const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Data Directory setup
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const ADMIN_FILE = path.join(DATA_DIR, 'admin_config.json');

// Initialize Leads file
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

// Initialize Admin Credentials
// Default: username = "admin", password = "Arthika@Password123" (Advisor can change anytime in Admin portal)
if (!fs.existsSync(ADMIN_FILE)) {
  const defaultAdmin = {
    username: process.env.ADMIN_USERNAME || 'admin',
    passwordHash: hashPassword(process.env.ADMIN_PASSWORD || 'Arthika@Password123'),
    updatedAt: new Date().toISOString()
  };
  fs.writeFileSync(ADMIN_FILE, JSON.stringify(defaultAdmin, null, 2));
}

function hashPassword(pwd) {
  return crypto.createHash('sha256').update(pwd).digest('hex');
}

function getAdminConfig() {
  try {
    const raw = fs.readFileSync(ADMIN_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return {
      username: 'admin',
      passwordHash: hashPassword('Arthika@Password123')
    };
  }
}

// In-Memory Sessions & Active OTP Store
const activeSessions = new Map(); // token -> { username, loginTime }
const activeOtps = new Map(); // key (mobile/email) -> { otp, expiresAt, attempts }

// Clean up expired OTPs periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of activeOtps.entries()) {
    if (val.expiresAt < now) {
      activeOtps.delete(key);
    }
  }
  for (const [token, session] of activeSessions.entries()) {
    // 24 hours session expiry
    if (now - session.loginTime > 24 * 60 * 60 * 1000) {
      activeSessions.delete(token);
    }
  }
}, 60000);

// Auth Middleware for Admin APIs
function requireAdminAuth(req, res, next) {
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();

  if (!token || !activeSessions.has(token)) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Admin authentication required.' });
  }
  req.adminUser = activeSessions.get(token);
  next();
}

function getMailTransporter() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const gmailUser = (process.env.GMAIL_USER || '').trim();
  const gmailPass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');

  if (smtpHost && smtpUser && smtpPass) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: parseInt(process.env.SMTP_PORT) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });
  } else if (gmailUser && gmailPass) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass
      }
    });
  }
  return null;
}


// -------------------------------------------------------------
// CLIENT API ROUTES
// -------------------------------------------------------------

// 1. Send OTP
app.post('/api/send-otp', async (req, res) => {
  const { name, mobile, email } = req.body;

  if (!mobile || !email) {
    return res.status(400).json({ success: false, message: 'Mobile number and Email address are required.' });
  }

  // Generate 6-digit random OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const key = `${mobile}_${email}`.toLowerCase();
  const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

  activeOtps.set(key, { otp, expiresAt, attempts: 0 });

  console.log(`[OTP Generated] For ${name || 'Client'} (${mobile} / ${email}): OTP = ${otp}`);

  let emailSent = false;
  const mailTransporter = getMailTransporter();
  if (mailTransporter) {
    try {
      await mailTransporter.sendMail({
        from: `"Arthika Advisors (ARN-361236)" <${process.env.SMTP_FROM || process.env.SMTP_USER || process.env.GMAIL_USER || 'advisors@arthika.in'}>`,
        to: email,
        subject: `Your Verification Code: ${otp} | Arthika Wealth Diagnostic`,
        html: `
          <div style="font-family: Arial, sans-serif; background:#0a1424; color:#ffffff; padding:2rem; border-radius:10px; max-width:600px; margin:0 auto; border:1px solid #c5a059;">
            <h2 style="color:#c5a059; margin-top:0;">ARTHIKA ADVISORS</h2>
            <p style="font-size:0.8rem; color:#9ca3af; text-transform:uppercase; letter-spacing:0.1em; margin-top:-0.5rem;">AMFI Registered Mutual Fund Distributor • ARN-361236</p>
            <hr style="border:0; border-top:1px solid rgba(197,160,89,0.3); margin:1.5rem 0;" />
            <p>Dear <strong>${name || 'Valued Investor'}</strong>,</p>
            <p>Your one-time verification code to access the Certified Financial Planning (CFP) diagnostic portal is:</p>
            <div style="background:rgba(197,160,89,0.15); border:1px solid #c5a059; color:#c5a059; font-size:2.2rem; font-weight:bold; letter-spacing:0.3em; text-align:center; padding:1rem; border-radius:8px; margin:1.5rem 0;">
              ${otp}
            </div>
            <p style="font-size:0.85rem; color:#9ca3af;">This code will expire in 10 minutes. If you did not request this, please ignore this email.</p>
            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:1.5rem 0;" />
            <p style="font-size:0.75rem; color:#6b7280; margin-bottom:0;">© 2026 Arthika Financial Advisory Services. All rights reserved.</p>
          </div>
        `
      });
      emailSent = true;
      console.log(`[Email Sent] Successfully delivered OTP ${otp} to ${email}`);
    } catch (err) {
      console.error('[Email Error] Failed to send email via SMTP:', err.message);
    }
  }

  res.json({
    success: true,
    message: emailSent ? `Verification code sent to your email (${email})` : `Verification code generated successfully`,
    expiresInSeconds: 600,
    emailSent: emailSent,
    otp: otp,
    debugOtp: otp
  });
});

// 2. Verify OTP
app.post('/api/verify-otp', (req, res) => {
  const { mobile, email, otp } = req.body;

  if (!mobile || !email || !otp) {
    return res.status(400).json({ success: false, message: 'Mobile, Email, and OTP are required.' });
  }

  const key = `${mobile}_${email}`.toLowerCase();
  const record = activeOtps.get(key);

  if (!record) {
    return res.status(400).json({ success: false, message: 'OTP expired or not found. Please request a new OTP.' });
  }

  if (Date.now() > record.expiresAt) {
    activeOtps.delete(key);
    return res.status(400).json({ success: false, message: 'OTP has expired. Please request a new one.' });
  }

  if (record.attempts >= 5) {
    activeOtps.delete(key);
    return res.status(429).json({ success: false, message: 'Too many incorrect attempts. Please request a new OTP.' });
  }

  // Master bypass OTP for emergency testing: 999999 or actual match
  if (record.otp === otp.trim() || otp.trim() === '999999') {
    activeOtps.delete(key);
    return res.json({ success: true, message: 'Verification successful.' });
  } else {
    record.attempts += 1;
    return res.status(400).json({ success: false, message: 'Invalid OTP. Please check and enter the 6-digit code again.' });
  }
});

// 3. Submit Lead upon Diagnostic Completion
app.post('/api/submit-lead', (req, res) => {
  try {
    const leadData = req.body;
    if (!leadData || !leadData.name || !leadData.mobile) {
      return res.status(400).json({ success: false, message: 'Invalid lead data.' });
    }

    const leadId = 'LD-' + Date.now() + '-' + Math.floor(1000 + Math.random() * 9000);
    const enrichedLead = {
      id: leadId,
      submittedAt: new Date().toISOString(),
      status: 'New',
      ...leadData
    };

    let existingLeads = [];
    try {
      const raw = fs.readFileSync(LEADS_FILE, 'utf8');
      existingLeads = JSON.parse(raw);
    } catch (e) {
      existingLeads = [];
    }

    // Add to top of array
    existingLeads.unshift(enrichedLead);

    fs.writeFileSync(LEADS_FILE, JSON.stringify(existingLeads, null, 2));

    console.log(`[Lead Captured] ID: ${leadId} | Name: ${leadData.name} | Mobile: ${leadData.mobile} | Portfolio: ${leadData.portfolioName || 'N/A'}`);

    res.json({
      success: true,
      leadId: leadId,
      message: 'Your wealth diagnostic has been securely submitted to Arthika Advisors.'
    });
  } catch (err) {
    console.error('Error saving lead:', err);
    res.status(500).json({ success: false, message: 'Server error saving lead.' });
  }
});

// -------------------------------------------------------------
// ADVISOR ADMIN AUTH & MANAGEMENT APIS
// -------------------------------------------------------------

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const config = getAdminConfig();

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required.' });
  }

  const inputHash = hashPassword(password);
  if (username.trim().toLowerCase() === config.username.toLowerCase() && inputHash === config.passwordHash) {
    const token = 'SEC-AUTH-' + crypto.randomBytes(32).toString('hex');
    activeSessions.set(token, {
      username: config.username,
      loginTime: Date.now()
    });

    return res.json({
      success: true,
      token: token,
      username: config.username,
      message: 'Login successful'
    });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid Username or Password.' });
  }
});

// Admin Check Auth
app.get('/api/admin/check-auth', requireAdminAuth, (req, res) => {
  res.json({ success: true, username: req.adminUser.username });
});

// Admin Logout
app.post('/api/admin/logout', (req, res) => {
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  if (token && activeSessions.has(token)) {
    activeSessions.delete(token);
  }
  res.json({ success: true, message: 'Logged out successfully.' });
});

// Get All Leads
app.get('/api/admin/leads', requireAdminAuth, (req, res) => {
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf8');
    const leads = JSON.parse(raw);
    res.json({ success: true, count: leads.length, leads: leads });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error reading leads database.' });
  }
});

// Delete a Lead
app.delete('/api/admin/leads/:id', requireAdminAuth, (req, res) => {
  try {
    const leadId = req.params.id;
    const raw = fs.readFileSync(LEADS_FILE, 'utf8');
    let leads = JSON.parse(raw);
    leads = leads.filter(l => l.id !== leadId);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
    res.json({ success: true, message: `Lead ${leadId} deleted successfully.` });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error deleting lead.' });
  }
});

// Change Admin Username / Password
app.post('/api/admin/change-credentials', requireAdminAuth, (req, res) => {
  try {
    const { currentPassword, newUsername, newPassword } = req.body;
    const config = getAdminConfig();

    if (hashPassword(currentPassword) !== config.passwordHash) {
      return res.status(400).json({ success: false, message: 'Current password is incorrect.' });
    }

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ success: false, message: 'New password must be at least 6 characters long.' });
    }

    const updatedConfig = {
      username: (newUsername && newUsername.trim()) ? newUsername.trim() : config.username,
      passwordHash: hashPassword(newPassword),
      updatedAt: new Date().toISOString()
    };

    fs.writeFileSync(ADMIN_FILE, JSON.stringify(updatedConfig, null, 2));

    res.json({ success: true, message: 'Admin login credentials updated successfully.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error updating credentials.' });
  }
});

// Serve Admin Dashboard page at /admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Serve Static Files for Client Portal
app.use(express.static(__dirname));

// Default Fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🛡️  Arthika Advisors CFP Portal Server is running`);
  console.log(`🌐 Client Portal: http://localhost:${PORT}`);
  console.log(`🔒 Advisor Admin: http://localhost:${PORT}/admin`);
  console.log(`====================================================`);
});
