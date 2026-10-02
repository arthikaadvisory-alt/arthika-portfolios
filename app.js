/* app.js */

// Portfolio Allocations Database (Academic Nobel Laureate Model)
const portfolios = {
  young_conservative: {
    name: "Defensive Preservation Phase",
    target: "Young Accumulators (Ages 20s-30s)",
    description: "Prioritizes capital stability using G-Secs, AAA debt, and a low-volatility equity factor overlay.",
    rationale: "Even at a young age, this conservative posture utilizes key diversification principles by placing 75% in Stability assets (Corporate FDs, NCDs, Debt MFs, G-Secs) and 25% in low-cost market indexes and low-volatility factor satellites to buffer returns.",
    estimatedReturn: 7.5,
    volatility: "Low",
    equityPct: 25,
    allocations: [
      { key: "core_equity", pct: 20, desc: "Nifty 50 Index funds providing standard market Beta." },
      { key: "satellite", pct: 5, desc: "Low Volatility 30 factors to capture quiet excess returns." },
      { key: "stability", pct: 75, desc: "AAA Corporate FDs (Bajaj/Shriram), Senior Secured NCDs (AA+ Sammaan/Muthoot), Debt MFs, and Sovereign Bonds." }
    ]
  },
  young_moderate: {
    name: "Balanced Consolidation Phase",
    target: "Young Accumulators (Ages 20s-30s)",
    description: "Captures steady Smart Beta factor returns balanced with a solid fixed-income shock absorber.",
    rationale: "Following a balanced Core-Satellite model, it allocates 45% to Nifty 50 index funds for core market exposure, 15% to smart beta factor satellites (Quality/Value), and 40% to AAA Corporate FDs, Secured NCDs, and Sovereign Gold Bonds (SGBs) for volatility defense.",
    estimatedReturn: 10.2,
    volatility: "Medium",
    equityPct: 60,
    allocations: [
      { key: "core_equity", pct: 45, desc: "Nifty 50 Index funds capturing cheap domestic market Beta." },
      { key: "satellite", pct: 15, desc: "Nifty100 Quality 30 / Nifty Value 20 factor index funds." },
      { key: "stability", pct: 40, desc: "AAA Corporate FDs (Bajaj/Shriram), Senior Secured NCDs (8.7%-10.3% YTM), Debt MFs, and SGBs." }
    ]
  },
  young_aggressive: {
    name: "Aggressive Accumulation Phase",
    target: "Young Accumulators (Ages 20s-30s)",
    description: "Maximizes smart factor premiums and broad market growth over a long-term compounding horizon.",
    rationale: "Using smart factor premiums and an enhanced return satellite, this allocates 50% to broad Nifty 500 / LargeMid 250 indices, 30% to high-momentum factors/swing setups, and 20% to liquid reserves and AAA Corporate FDs to act as a dry powder buffer.",
    estimatedReturn: 13.5,
    volatility: "High",
    equityPct: 80,
    allocations: [
      { key: "core_equity", pct: 50, desc: "Nifty 500 / LargeMid 250 index funds for broad market exposure." },
      { key: "satellite", pct: 30, desc: "Nifty200 Momentum 30, Mid/Smallcap mutual funds, and Swing Trading setups." },
      { key: "stability", pct: 20, desc: "AAA Corporate FDs, Liquid Cash Buffers, and Sovereign Gold Bonds (SGBs) for shock absorption." }
    ]
  },
  mid_conservative: {
    name: "Defensive Consolidation Phase",
    target: "Mid-Career Builders (Ages 40s-50s)",
    description: "Protects accumulated retirement nests using high-grade G-Secs and low-volatility indices.",
    rationale: "Designed to secure your growing net worth. It weights 75% in AAA Corporate FDs, Senior Secured NCDs, and G-Secs to guarantee stability, and allocates 25% to core market indexes and low-volatility satellites to outpace tax and inflation.",
    estimatedReturn: 7.5,
    volatility: "Low",
    equityPct: 25,
    allocations: [
      { key: "core_equity", pct: 20, desc: "Nifty 50 Index funds for core inflation-beating protection." },
      { key: "satellite", pct: 5, desc: "Low Volatility 30 factors to isolate alpha with minimal price swings." },
      { key: "stability", pct: 75, desc: "AAA Corporate FDs (Bajaj/Shriram), Senior Secured NCDs (AA+ Sammaan/Muthoot), Debt MFs, and Sovereign Bonds." }
    ]
  },
  mid_moderate: {
    name: "Moderate Consolidation Phase",
    target: "Mid-Career Builders (Ages 40s-50s)",
    description: "Maintains balanced growth to secure purchasing power while mitigating market crashes.",
    rationale: "The core transition portfolio. Keeps 45% in low-cost index funds to capture market appreciation, 15% in Quality and Value factors to optimize alpha, and 40% in AAA Corporate FDs, NCDs, and Debt MFs to lock in stability.",
    estimatedReturn: 10.2,
    volatility: "Medium",
    equityPct: 60,
    allocations: [
      { key: "core_equity", pct: 45, desc: "Nifty 50 Index funds capturing cheap domestic market Beta." },
      { key: "satellite", pct: 15, desc: "Nifty100 Quality 30 / Nifty Value 20 factor index funds." },
      { key: "stability", pct: 40, desc: "AAA Corporate FDs (Bajaj/Shriram), Senior Secured NCDs (8.7%-10.3% YTM), Debt MFs, and SGBs." }
    ]
  },
  mid_aggressive: {
    name: "Active Consolidation Phase",
    target: "Mid-Career Builders (Ages 40s-50s)",
    description: "Sustains a high growth trajectory for professionals with strong career stability.",
    rationale: "Keeps a robust 80% growth footprint. Puts 50% in broad market indices, 30% in Momentum ETFs and active satellites to boost compounding velocity, and uses a 20% liquid cash and AAA Corporate FD buffer to absorb sudden market crashes.",
    estimatedReturn: 13.5,
    volatility: "High",
    equityPct: 80,
    allocations: [
      { key: "core_equity", pct: 50, desc: "Nifty 500 / LargeMid 250 index funds for broad market exposure." },
      { key: "satellite", pct: 30, desc: "Nifty200 Momentum 30, Mid/Smallcap mutual funds, and Swing Trading setups." },
      { key: "stability", pct: 20, desc: "AAA Corporate FDs, Liquid Cash Buffers, and Sovereign Gold Bonds (SGBs) for shock absorption." }
    ]
  },
  retired_conservative: {
    name: "Conservative Distribution Phase",
    target: "Wealth Preservers (Ages 60s+)",
    description: "Maximized wealth preservation and income stability for systematic withdrawals (SWP).",
    rationale: "Under a structured behavioral glide path, we secure your corpus from emotional decision-making. We place 75% in AAA Corporate FDs (up to 8% p.a.), Monthly Payout NCDs, G-Secs, and liquid cash for income liquidity, allocating 25% to core Nifty 50.",
    estimatedReturn: 7.5,
    volatility: "Low",
    equityPct: 25,
    allocations: [
      { key: "core_equity", pct: 20, desc: "Nifty 50 Index funds for core inflation-beating protection." },
      { key: "satellite", pct: 5, desc: "Low Volatility 30 factors to isolate alpha with minimal price swings." },
      { key: "stability", pct: 75, desc: "AAA Corporate FDs (Bajaj/Shriram), Senior Secured NCDs (AA+ Sammaan/Muthoot), Debt MFs, and Sovereign Bonds." }
    ]
  },
  retired_moderate: {
    name: "Moderate Distribution Phase",
    target: "Wealth Preservers (Ages 60s+)",
    description: "Generates secure retirement payouts while growing the underlying principal.",
    rationale: "Balances cash distributions with growth. We dedicate 40% to AAA Corporate FDs, NCDs, and Debt MFs for payout safety, 45% to broad indices, and 15% to high-ROE Quality factors to grow your remaining estate.",
    estimatedReturn: 10.2,
    volatility: "Medium",
    equityPct: 60,
    allocations: [
      { key: "core_equity", pct: 45, desc: "Nifty 50 Index funds capturing cheap domestic market Beta." },
      { key: "satellite", pct: 15, desc: "Nifty100 Quality 30 / Nifty Value 20 factor index funds." },
      { key: "stability", pct: 40, desc: "AAA Corporate FDs (Bajaj/Shriram), Senior Secured NCDs (8.7%-10.3% YTM), Debt MFs, and SGBs." }
    ]
  },
  retired_aggressive: {
    name: "Active Estate Growth Phase",
    target: "Wealth Preservers (Ages 60s+)",
    description: "For retirees with substantial estates wishing to optimize legacy compounding.",
    rationale: "For high net worth retirees who do not rely on this capital for core living costs. It holds a high-growth 80% equity weight (50% Core, 30% Momentum/satellite) to build long-term legacy value, leaving 20% in gold/liquid cash.",
    estimatedReturn: 13.5,
    volatility: "High",
    equityPct: 80,
    allocations: [
      { key: "core_equity", pct: 50, desc: "Nifty 500 / LargeMid 250 index funds for broad market exposure." },
      { key: "satellite", pct: 30, desc: "Nifty200 Momentum 30, Mid/Smallcap mutual funds, and Swing Trading setups." },
      { key: "stability", pct: 20, desc: "AAA Corporate FDs, Liquid Cash Buffers, and Sovereign Gold Bonds (SGBs) for shock absorption." }
    ]
  }
};

const assetClassesMeta = {
  core_equity: { name: "Core Equity (Market Index)", color: "var(--color-core)" },
  satellite: { name: "Satellite (Enhanced Returns)", color: "var(--color-satellite)" },
  stability: { name: "Stability (Risk Mitigation)", color: "var(--color-stability)" }
};

// Top Curated Investment Recommendations from Nivesh (September 2026 Data)
const recommendedFunds = {
  core_equity: [
    { 
      name: "SBI Nifty Index Fund", 
      type: "Index Core", 
      badge: "mf", 
      category: "equity", 
      cagr: 12.0, 
      histYield: 13.80, 
      metric1: "3Y CAGR: 13.80%", 
      metric2: "1Y Return: 9.66%", 
      desc: "Nifty 50 passive index tracking cheap domestic market Beta." 
    },
    { 
      name: "Motilal Oswal Nifty 500 Index Fund", 
      type: "Index Core", 
      badge: "mf", 
      category: "equity", 
      cagr: 12.0, 
      histYield: 15.73, 
      metric1: "3Y CAGR: 15.73%", 
      metric2: "1Y Return: 5.82%", 
      desc: "BSE/Nifty 500 passive core tracking broad Indian market cap growth." 
    }
  ],
  satellite: [
    { 
      name: "Motilal Oswal Nifty 200 Momentum 30 Index Fund", 
      type: "Smart Beta Factor", 
      badge: "mf", 
      category: "equity", 
      cagr: 15.0, 
      histYield: 16.91, 
      metric1: "3Y CAGR: 16.91%", 
      metric2: "1Y Return: -6.62%", 
      desc: "Captures momentum premium to ride price trendwaves." 
    },
    { 
      name: "HSBC Midcap Fund", 
      type: "Active Mid Cap", 
      badge: "mf", 
      category: "equity", 
      cagr: 15.0, 
      histYield: 23.26, 
      metric1: "3Y CAGR: 23.26%", 
      metric2: "1Y Return: 21.74%", 
      desc: "Active mid-cap fund targeted to capture structural alpha on Dalal Street." 
    },
    { 
      name: "Bandhan Small Cap Fund", 
      type: "Active Small Cap", 
      badge: "mf", 
      category: "equity", 
      cagr: 16.0, 
      histYield: 23.55, 
      metric1: "3Y CAGR: 23.55%", 
      metric2: "1Y Return: 13.65%", 
      desc: "High-conviction active small cap allocation to maximize compound velocity." 
    }
  ],
  stability: [
    // 1. Corporate Fixed Deposits (AAA)
    { 
      name: "Bajaj Finance Ltd Corporate FD", 
      type: "Corporate FD (AAA)", 
      badge: "fd", 
      category: "fd", 
      cagr: 7.40, 
      histYield: 7.75, 
      metric1: "ROI: 7.40% - 7.75%", 
      metric2: "Rating: CRISIL AAA", 
      desc: "Highest safety AAA deposit. Monthly/Quarterly/Annual payout options available for steady regular income." 
    },
    { 
      name: "Shriram Finance Ltd Corporate FD", 
      type: "Corporate FD (AAA)", 
      badge: "fd", 
      category: "fd", 
      cagr: 7.50, 
      histYield: 8.00, 
      metric1: "ROI: 7.50% - 8.00%", 
      metric2: "Rating: CRISIL AAA", 
      desc: "High-yield AAA corporate deposit with up to 8.00% p.a. for senior citizens and strong rural/commercial reach." 
    },
    // 2. Curated Primary Bonds & NCDs
    { 
      name: "Sammaan Capital Ltd 9.20% NCD (2032)", 
      type: "Senior Secured NCD", 
      badge: "ncd", 
      category: "ncd", 
      cagr: 8.70, 
      histYield: 8.70, 
      metric1: "YTM: 8.70%", 
      metric2: "Rating: AA+ (ICRA/CRISIL)", 
      desc: "Senior Secured primary bond paying monthly interest. Ideal for high-grade fixed income held to maturity." 
    },
    { 
      name: "Muthoot Fincorp Ltd 10.25% NCD (2031)", 
      type: "High-Yield NCD", 
      badge: "ncd", 
      category: "ncd", 
      cagr: 10.29, 
      histYield: 10.29, 
      metric1: "YTM: 10.29%", 
      metric2: "Rating: AA (CRISIL)", 
      desc: "High-yield monthly interest bond offering 10.29% YTM for investors seeking higher cashflow with AA-level credit." 
    },
    // 3. Debt Mutual Funds
    { 
      name: "Nippon India Corporate Bond Fund", 
      type: "Corporate Debt MF", 
      badge: "mf", 
      category: "mf_debt", 
      cagr: 7.34, 
      histYield: 7.36, 
      metric1: "YTM: 7.34%", 
      metric2: "3Y CAGR: 7.36%", 
      desc: "High-grade corporate bond fund providing tax deferral and moderate accrual returns." 
    },
    { 
      name: "HDFC Short Term Debt Fund", 
      type: "Short Term Debt MF", 
      badge: "mf", 
      category: "mf_debt", 
      cagr: 7.48, 
      histYield: 7.41, 
      metric1: "YTM: 7.48%", 
      metric2: "3Y CAGR: 7.41%", 
      desc: "Short-duration buffer protecting capital against interest rate spikes with daily liquidity." 
    },
    { 
      name: "ABSL Liquid Fund", 
      type: "Liquid Cash Buffer MF", 
      badge: "mf", 
      category: "mf_debt", 
      cagr: 6.49, 
      histYield: 6.89, 
      metric1: "YTM: 6.49%", 
      metric2: "3Y CAGR: 6.89%", 
      desc: "Ultra-liquid cash management account for emergency reserves and tactical STP deployment." 
    },
    // 4. Sovereign & Tax-Advantaged Bonds
    { 
      name: "RBI Floating Rate Savings Bonds (FRSB)", 
      type: "Sovereign Bond", 
      badge: "gov", 
      category: "gov", 
      cagr: 7.75, 
      histYield: 7.75, 
      metric1: "Coupon: ~7.75% (Floating)", 
      metric2: "Rating: Sovereign (100% Safe)", 
      desc: "Government of India guaranteed floating rate bond paying semi-annual interest (NSC + 35 bps)." 
    },
    { 
      name: "REC / PFC 54EC Capital Gain Bonds", 
      type: "Capital Gain Tax Bond", 
      badge: "gov", 
      category: "gov", 
      cagr: 5.25, 
      histYield: 5.25, 
      metric1: "Tax Exemption: Sec 54EC", 
      metric2: "Rating: AAA Sovereign/PSU", 
      desc: "Government-backed PSU bonds to claim 100% capital gains tax exemption under Section 54EC." 
    }
  ]
};

// Wizard Steps Data
const quizSteps = [
  {
    title: "Step 1: Personal Profile & Horizon",
    html: `
      <div class="quiz-step-grid">
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label-bold">Customer / Investor Full Name</label>
          <input type="text" class="text-input" id="in-customerName" value="Rajesh Sharma" placeholder="e.g. Rajesh Sharma" style="padding-left: 1rem; font-weight: 600;">
        </div>
        <div class="form-group">
          <label class="form-label-bold">Current Age</label>
          <input type="number" class="text-input" id="in-age" value="30" min="18" max="100">
        </div>
        <div class="form-group">
          <label class="form-label-bold">City/Country of Residence</label>
          <input type="text" class="text-input" id="in-residence" value="Mumbai" style="padding-left: 1rem;">
        </div>
        <div class="form-group">
          <label class="form-label-bold">Tax Slab / Regime</label>
          <select class="select-input" id="in-taxSlab" style="padding-left: 1rem;">
            <option value="10">10% Bracket (Old/New)</option>
            <option value="20">20% Bracket (Old/New)</option>
            <option value="30" selected>30% / High Bracket</option>
          </select>
        </div>
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label-bold">Investment Horizon (Years) — Select or Enter Any Number of Years</label>
          <div style="background: rgba(0,0,0,0.3); padding: 0.85rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
            <div style="display: grid; grid-template-columns: 140px 1fr; gap: 1rem; align-items: center;">
              <div style="position: relative;">
                <input type="number" class="text-input" id="in-horizon-num" value="15" min="1" max="100" step="1" style="font-size: 1.15rem; font-weight: 700; color: var(--color-gold); text-align: center; padding: 0.5rem 1.8rem 0.5rem 0.5rem;" oninput="syncHorizonInputs('number')">
                <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); font-size: 0.75rem; color: var(--text-muted); pointer-events: none; font-weight: 600;">Yrs</span>
              </div>
              <div class="slider-container" style="margin-bottom:0; padding: 0.25rem 0.5rem; background: transparent; border: none;">
                <input type="range" class="custom-range" id="in-horizon" min="1" max="50" step="1" value="15" oninput="syncHorizonInputs('slider')">
              </div>
            </div>
            <div class="horizon-chip-group" id="step1-horizon-chips" style="margin-top: 0.65rem;">
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 1)">1 Yr</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 2)">2 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 3)">3 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 5)">5 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 7)">7 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 10)">10 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 12)">12 Yrs</button>
              <button type="button" class="horizon-chip active" onclick="syncHorizonInputs('chip', 15)">15 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 18)">18 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 20)">20 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 25)">25 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 30)">30 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 40)">40 Yrs</button>
              <button type="button" class="horizon-chip" onclick="syncHorizonInputs('chip', 50)">50 Yrs</button>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Step 2: Income, Expenses & Debt",
    html: `
      <div class="quiz-step-grid">
        <div class="form-group">
          <label class="form-label-bold">Monthly Net Take-Home (₹)</label>
          <input type="number" class="text-input" id="in-income" value="150000" min="0">
        </div>
        <div class="form-group">
          <label class="form-label-bold">Income Stability Status</label>
          <select class="select-input" id="in-stability" style="padding-left: 1rem;">
            <option value="stable" selected>Highly Stable (Salaried Corporate / Government)</option>
            <option value="variable">Variable / Commission (Sales / Freelancer)</option>
            <option value="business">Business Owners / High Fluctuations</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label-bold">Monthly Essential Expenses (₹)</label>
          <input type="number" class="text-input" id="in-expenses" value="50000" min="0">
        </div>
        <div class="form-group">
          <label class="form-label-bold">Existing Monthly Loans/EMIs (₹)</label>
          <input type="number" class="text-input" id="in-loans" value="15000" min="0">
        </div>
      </div>
    `
  },
  {
    title: "Step 3: Asset Portfolio & SIP Capacity",
    html: `
      <div class="quiz-step-grid">
        <div class="form-group">
          <label class="form-label-bold">Current Invested Capital (₹)</label>
          <input type="number" class="text-input" id="in-investments" value="800000" min="0" step="any">
        </div>
        <div class="form-group">
          <label class="form-label-bold">Available Lumpsum Capital (₹ Any Amount)</label>
          <input type="number" class="text-input" id="in-lumpsum" value="200000" min="0" step="any">
        </div>
        <div class="form-group">
          <label class="form-label-bold">SIP Frequency Mode</label>
          <select class="select-input" id="in-sipFrequency" style="padding-left: 1rem;">
            <option value="monthly" selected>Monthly SIP (Multiples of ₹500)</option>
            <option value="daily">Daily SIP (Multiples of ₹100 / 22 Days)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label-bold">Monthly SIP Capacity (₹ Multiples of 500)</label>
          <input type="number" class="text-input" id="in-sipCapacity" value="22500" min="0" step="500" oninput="syncSipInputs('monthly')">
        </div>
        <div class="form-group">
          <label class="form-label-bold">Daily SIP Equivalent (₹ Multiples of 100 / 22 Days)</label>
          <input type="number" class="text-input" id="in-dailySipAmount" value="1000" min="100" step="100" oninput="syncSipInputs('daily')">
        </div>
        <div class="form-group">
          <label class="form-label-bold">Active Monthly SIP Commits (₹/mo)</label>
          <input type="number" class="text-input" id="in-existingSips" value="15000" min="0" step="500">
        </div>
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label-bold">SIP Journey Growth Strategy</label>
          <select class="select-input" id="in-sipStrategy" style="padding-left: 1rem;">
            <option value="stepup" selected>Step-Up SIP (+10% Annual Growth) [Recommended]</option>
            <option value="freedom">Freedom SIP (Wealth Accumulation + Lifetime SWP Pension)</option>
            <option value="regular">Regular Fixed Monthly / Daily SIP</option>
          </select>
        </div>
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label-bold">Stability & Fixed Income Allocation Preference</label>
          <select class="select-input" id="in-stabilityPreference" style="padding-left: 1rem;">
            <option value="all" selected>Curated Multi-Asset Basket (AAA Corporate FDs + Secured NCDs + Debt MFs + Sovereign Bonds) [Recommended]</option>
            <option value="fds_ncds">High-Yield Fixed Income (AAA Corporate FDs & High-Yield NCDs)</option>
            <option value="mf_debt">Debt Mutual Funds Only (High Liquidity & Accrual)</option>
            <option value="sovereign">Sovereign & Tax Protection (RBI Floating Rate Bonds & 54EC Bonds)</option>
          </select>
        </div>
      </div>
    `
  },
  {
    title: "Step 4: Insurance, Target & Risk",
    html: `
      <div class="quiz-step-grid">
        <div class="form-group">
          <label class="form-label-bold">Emergency Fund Buffer (₹)</label>
          <input type="number" class="text-input" id="in-emergencyFund" value="200000" min="0">
        </div>
        <div class="form-group">
          <label class="form-label-bold">Health Insurance Coverage (₹)</label>
          <input type="number" class="text-input" id="in-healthInsurance" value="500000" min="0">
        </div>
        <div class="form-group">
          <label class="form-label-bold">Term Life Insurance Coverage (₹)</label>
          <input type="number" class="text-input" id="in-termInsurance" value="10000000" min="0">
        </div>
        <div class="form-group">
          <label class="form-label-bold">Investment Risk Comfort</label>
          <select class="select-input" id="in-riskComfort" style="padding-left: 1rem;">
            <option value="conservative">Conservative (Safety Bias - Core 20% / Satellite 5% / Debt 75%)</option>
            <option value="moderate" selected>Moderate (Balanced Core 45% / Satellite 15% / Debt 40%)</option>
            <option value="aggressive">Aggressive (Growth Bias - Core 50% / Satellite 30% / Debt 20%)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label-bold">Primary Goal Target Name</label>
          <select class="select-input" id="in-primaryGoal" style="padding-left: 1rem;">
            <option value="retirement" selected>Retirement Fund</option>
            <option value="education">Child's Higher Education</option>
            <option value="wealth">General Long-Term Wealth Creation</option>
            <option value="property">Home Purchase Fund</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label-bold">Goal Corpus (Current ₹ Value)</label>
          <input type="number" class="text-input" id="in-targetCorpus" value="10000000" min="0">
        </div>
      </div>
    `
  }
];

// Form state values
let formValues = {
  customerName: "Rajesh Sharma",
  age: 30,
  residence: "Mumbai",
  taxSlab: "30",
  horizon: 15,
  income: 150000,
  stability: "stable",
  expenses: 50000,
  loans: 15000,
  investments: 800000,
  existingSips: 15000,
  lumpsum: 200000,
  sipCapacity: 22500,
  sipFrequency: "monthly",
  dailySipAmount: 1000,
  emergencyFund: 200000,
  healthInsurance: 500000,
  termInsurance: 10000000,
  primaryGoal: "retirement",
  targetCorpus: 10000000,
  riskComfort: "moderate",
  sipStrategy: "stepup",
  stabilityPreference: "all"
};

let currentStepIndex = 0;
let currentAgeGroup = "young";
let currentRiskProfile = "moderate";

// DOM Mappings Onboarding
const onboardingContainer = document.getElementById('onboarding-container');
const dashboardContainer = document.getElementById('dashboard-container');
const onboardingWelcome = document.getElementById('onboarding-welcome');
const onboardingQuiz = document.getElementById('onboarding-quiz');
const onboardingAnalyzing = document.getElementById('onboarding-analyzing');
const onboardingResult = document.getElementById('onboarding-result');
const btnRetakeQuiz = document.getElementById('btn-retake-quiz');
const badgeMode = document.getElementById('badge-mode');

const quizQuestionTitle = document.getElementById('quiz-question-title');
const stepContentContainer = document.getElementById('step-content-container');
const quizBtnPrev = document.getElementById('quiz-btn-prev');
const quizBtnNext = document.getElementById('quiz-btn-next');
const quizProgressText = document.getElementById('quiz-progress-text');
const quizProgressPercent = document.getElementById('quiz-progress-percent');
const quizProgressBar = document.getElementById('quiz-progress-bar');

const resultProfileName = document.getElementById('result-profile-name');
const resultProfileDesc = document.getElementById('result-profile-desc');

// DOM Mappings Report Snapshot
const reportMetaName = document.getElementById('report-meta-name');
const reportMetaAge = document.getElementById('report-meta-age');
const reportMetaDate = document.getElementById('report-meta-date');

const snapGapsAlarmBox = document.getElementById('snapshot-gaps-alarm-box');
const snapValSurplus = document.getElementById('snap-val-surplus');
const snapValRate = document.getElementById('snap-val-rate');
const snapValAssets = document.getElementById('snap-val-assets');
const snapValTax = document.getElementById('snap-val-tax');

// DOM Mappings Risk
const riskCapEvaluation = document.getElementById('risk-cap-evaluation');
const riskWillEvaluation = document.getElementById('risk-will-evaluation');
const riskBehaviorWarnings = document.getElementById('risk-behavior-warnings');

// DOM Mappings Allocation Details
const portfolioNameEl = document.getElementById('portfolio-display-name');
const targetAudienceEl = document.getElementById('portfolio-target-audience');
const statReturnEl = document.getElementById('portfolio-stat-return');
const statVolEl = document.getElementById('portfolio-stat-vol');
const rationaleTextEl = document.getElementById('rationale-text');
const donutSegmentsGroup = document.getElementById('donut-segments-group');
const chartCenterRatioEl = document.getElementById('chart-center-ratio');
const chartCenterLabelEl = document.getElementById('chart-center-label');
const legendContainerEl = document.getElementById('chart-legend-container');
const cardsContainerEl = document.getElementById('allocation-cards-container');

// DOM Mappings Table & Roadmap
const recProductsTbody = document.getElementById('rec-products-tbody');
const goalValCurrent = document.getElementById('goal-val-current');
const goalValHorizon = document.getElementById('goal-val-horizon');
const goalValInflated = document.getElementById('goal-val-inflated');
const goalGapAnalysis = document.getElementById('goal-gap-analysis');
const roadValInvested = document.getElementById('road-val-invested');
const roadValFuture = document.getElementById('road-val-future');
const roadBarsContainer = document.getElementById('road-bars-container');

// Stress Test
const stressVal2008 = document.getElementById('stress-val-2008');
const stressVal2008Rec = document.getElementById('stress-val-2008-rec');
const stressVal2020 = document.getElementById('stress-val-2020');
const stressVal2020Rec = document.getElementById('stress-val-2020-rec');
const advisorDirectionConcl = document.getElementById('advisor-direction-concl');

// Initialize
function init() {
  // Set date
  const now = new Date();
  reportMetaDate.textContent = now.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  resetQuiz();
}

// Onboarding Navigation
function startQuiz() {
  onboardingWelcome.style.display = 'none';
  onboardingQuiz.style.display = 'block';
  currentStepIndex = 0;
  showStep(0);
}

function showStep(index) {
  const step = quizSteps[index];
  
  // Progress calculations
  const progressPercent = Math.round(((index + 1) / quizSteps.length) * 100);
  quizProgressText.textContent = `Step ${index + 1} of ${quizSteps.length}`;
  quizProgressPercent.textContent = `${progressPercent}%`;
  quizProgressBar.style.width = `${progressPercent}%`;
  
  // Set Title
  quizQuestionTitle.textContent = step.title;
  
  // Set inputs HTML
  stepContentContainer.innerHTML = step.html;
  
  // Hydrate fields with current formValues
  hydrateStepFields(index);
  
  // Back button visibility
  quizBtnPrev.style.visibility = index === 0 ? 'hidden' : 'visible';
  
  // Next button text
  if (index === quizSteps.length - 1) {
    quizBtnNext.textContent = 'Evaluate Profile →';
  } else {
    quizBtnNext.textContent = 'Next →';
  }
}

function hydrateStepFields(stepIndex) {
  if (stepIndex === 0) {
    if (document.getElementById('in-customerName')) {
      document.getElementById('in-customerName').value = formValues.customerName;
    }
    document.getElementById('in-age').value = formValues.age;
    document.getElementById('in-residence').value = formValues.residence;
    document.getElementById('in-taxSlab').value = formValues.taxSlab;
    if (document.getElementById('in-horizon')) {
      document.getElementById('in-horizon').value = Math.min(50, formValues.horizon);
    }
    if (document.getElementById('in-horizon-num')) {
      document.getElementById('in-horizon-num').value = formValues.horizon;
    }
    const chips = document.querySelectorAll('#step1-horizon-chips .horizon-chip');
    chips.forEach(chip => {
      const chipVal = parseInt(chip.textContent);
      if (chipVal === formValues.horizon) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  } else if (stepIndex === 1) {
    document.getElementById('in-income').value = formValues.income;
    document.getElementById('in-stability').value = formValues.stability;
    document.getElementById('in-expenses').value = formValues.expenses;
    document.getElementById('in-loans').value = formValues.loans;
  } else if (stepIndex === 2) {
    document.getElementById('in-investments').value = formValues.investments;
    document.getElementById('in-existingSips').value = formValues.existingSips;
    document.getElementById('in-lumpsum').value = formValues.lumpsum;
    document.getElementById('in-sipCapacity').value = formValues.sipCapacity;
    if (document.getElementById('in-sipFrequency')) {
      document.getElementById('in-sipFrequency').value = formValues.sipFrequency;
    }
    if (document.getElementById('in-dailySipAmount')) {
      document.getElementById('in-dailySipAmount').value = formValues.dailySipAmount;
    }
    if (document.getElementById('in-sipStrategy')) {
      document.getElementById('in-sipStrategy').value = formValues.sipStrategy;
    }
    if (document.getElementById('in-stabilityPreference')) {
      document.getElementById('in-stabilityPreference').value = formValues.stabilityPreference;
    }
  } else if (stepIndex === 3) {
    document.getElementById('in-emergencyFund').value = formValues.emergencyFund;
    document.getElementById('in-healthInsurance').value = formValues.healthInsurance;
    document.getElementById('in-termInsurance').value = formValues.termInsurance;
    document.getElementById('in-riskComfort').value = formValues.riskComfort;
    document.getElementById('in-primaryGoal').value = formValues.primaryGoal;
    document.getElementById('in-targetCorpus').value = formValues.targetCorpus;
  }
}

function syncHorizonInputs(source, specificVal) {
  const inRange = document.getElementById('in-horizon');
  const inNum = document.getElementById('in-horizon-num');
  
  let val = formValues.horizon || 15;
  if (source === 'chip' && specificVal !== undefined) {
    val = parseInt(specificVal) || 15;
  } else if (source === 'slider' && inRange) {
    val = parseInt(inRange.value) || 1;
  } else if (source === 'number' && inNum) {
    val = parseInt(inNum.value) || 1;
  }
  
  if (val < 1) val = 1;
  formValues.horizon = val;

  if (inNum) inNum.value = val;
  if (inRange) inRange.value = Math.min(50, val);

  // Update active class on Step 1 chips
  const chips = document.querySelectorAll('#step1-horizon-chips .horizon-chip');
  chips.forEach(chip => {
    const chipVal = parseInt(chip.textContent);
    if (chipVal === val) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}
window.syncHorizonInputs = syncHorizonInputs;

function setDashboardHorizon(years, source) {
  let val = parseInt(years);
  if (isNaN(val) || val < 1) val = 1;
  formValues.horizon = val;

  const dashNum = document.getElementById('dash-horizon-num');
  const dashSlider = document.getElementById('dash-horizon-slider');
  
  if (dashNum && source !== 'number') dashNum.value = val;
  if (dashSlider && source !== 'slider') dashSlider.value = Math.min(50, val);

  // Update active class on Dashboard horizon chips
  const chips = document.querySelectorAll('#dash-horizon-chips .horizon-chip');
  chips.forEach(chip => {
    const chipVal = parseInt(chip.textContent);
    if (chipVal === val) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });

  // Re-calculate and update Curated Products table and Goal Roadmap immediately
  if (activeCompiledPortfolio) {
    compileProductRecommendations(activeCompiledPortfolio, currentProductFilter);
    compileGoalRoadmap(activeCompiledPortfolio);
  }
}
window.setDashboardHorizon = setDashboardHorizon;

function syncSipInputs(source) {
  const inMonthly = document.getElementById('in-sipCapacity');
  const inDaily = document.getElementById('in-dailySipAmount');
  if (!inMonthly || !inDaily) return;

  if (source === 'monthly') {
    const mVal = parseFloat(inMonthly.value) || 0;
    const roundedM = roundTo500(mVal);
    const dVal = roundedM > 0 ? roundTo100(roundedM / 22, 100) : 0;
    inDaily.value = dVal;
  } else if (source === 'daily') {
    const dVal = parseFloat(inDaily.value) || 0;
    const roundedD = roundTo100(dVal);
    const mVal = roundedD > 0 ? roundTo500(roundedD * 22, 500) : 0;
    inMonthly.value = mVal;
  }
}
window.syncSipInputs = syncSipInputs;

function saveStepFields(stepIndex) {
  if (stepIndex === 0) {
    if (document.getElementById('in-customerName')) {
      formValues.customerName = document.getElementById('in-customerName').value.trim() || "Valued Client";
    }
    formValues.age = parseInt(document.getElementById('in-age').value) || 30;
    formValues.residence = document.getElementById('in-residence').value || "Mumbai";
    formValues.taxSlab = document.getElementById('in-taxSlab').value || "30";
    const numHorizon = document.getElementById('in-horizon-num') ? parseInt(document.getElementById('in-horizon-num').value) : 0;
    const rangeHorizon = document.getElementById('in-horizon') ? parseInt(document.getElementById('in-horizon').value) : 0;
    formValues.horizon = Math.max(1, numHorizon || rangeHorizon || 15);
  } else if (stepIndex === 1) {
    formValues.income = parseFloat(document.getElementById('in-income').value) || 0;
    formValues.stability = document.getElementById('in-stability').value || "stable";
    formValues.expenses = parseFloat(document.getElementById('in-expenses').value) || 0;
    formValues.loans = parseFloat(document.getElementById('in-loans').value) || 0;
  } else if (stepIndex === 2) {
    formValues.investments = parseFloat(document.getElementById('in-investments').value) || 0;
    formValues.existingSips = parseFloat(document.getElementById('in-existingSips').value) || 0;
    // Lumpsum: Any amount acceptable (no multiple restriction)
    formValues.lumpsum = Math.round(parseFloat(document.getElementById('in-lumpsum').value) || 0);
    // Monthly SIP: Multiples of ₹500
    formValues.sipCapacity = roundTo500(parseFloat(document.getElementById('in-sipCapacity').value) || 0);
    if (document.getElementById('in-sipFrequency')) {
      formValues.sipFrequency = document.getElementById('in-sipFrequency').value || "monthly";
    }
    // Daily SIP: Multiples of ₹100 matching 22 working days
    if (formValues.sipCapacity > 0) {
      formValues.dailySipAmount = roundTo100(formValues.sipCapacity / 22, 100);
    } else if (document.getElementById('in-dailySipAmount')) {
      formValues.dailySipAmount = roundTo100(parseFloat(document.getElementById('in-dailySipAmount').value) || 0, 100);
    }
    if (document.getElementById('in-sipStrategy')) {
      formValues.sipStrategy = document.getElementById('in-sipStrategy').value || "stepup";
    }
    if (document.getElementById('in-stabilityPreference')) {
      formValues.stabilityPreference = document.getElementById('in-stabilityPreference').value || "all";
    }
  } else if (stepIndex === 3) {
    formValues.emergencyFund = parseFloat(document.getElementById('in-emergencyFund').value) || 0;
    formValues.healthInsurance = parseFloat(document.getElementById('in-healthInsurance').value) || 0;
    formValues.termInsurance = parseFloat(document.getElementById('in-termInsurance').value) || 0;
    formValues.riskComfort = document.getElementById('in-riskComfort').value || "moderate";
    formValues.primaryGoal = document.getElementById('in-primaryGoal').value || "retirement";
    formValues.targetCorpus = parseFloat(document.getElementById('in-targetCorpus').value) || 0;
  }
}

function prevQuestion() {
  if (currentStepIndex > 0) {
    saveStepFields(currentStepIndex);
    currentStepIndex--;
    showStep(currentStepIndex);
  }
}

function nextQuestion() {
  saveStepFields(currentStepIndex);
  if (currentStepIndex < quizSteps.length - 1) {
    currentStepIndex++;
    showStep(currentStepIndex);
  } else {
    evaluateResults();
  }
}

// CFP Evaluation Calculations
function evaluateResults() {
  onboardingQuiz.style.display = 'none';
  onboardingAnalyzing.style.display = 'block';
  
  setTimeout(() => {
    onboardingAnalyzing.style.display = 'none';
    onboardingResult.style.display = 'block';
    
    // Set Target allocation groups
    currentRiskProfile = formValues.riskComfort;
    currentAgeGroup = formValues.age < 40 ? 'young' : (formValues.age < 60 ? 'mid' : 'retired');
    
    // Safety check - Behavioral Warning Override
    if (formValues.age >= 60 && currentRiskProfile === 'aggressive') {
      // Retiring users cannot hold 80% aggressive portfolio without warning
      resultProfileName.textContent = "Moderate SWP Phase (Age Overrule)";
      resultProfileDesc.textContent = "Although your risk willingness is Aggressive, your age (60s+) limits your loss capacity. To protect your retirement kitty, we suggest our Moderate Glide Path (45% Core, 15% Satellite, 40% Stability) rather than full Aggressive exposure.";
      // Force moderate model
      currentRiskProfile = 'moderate';
    } else {
      const key = `${currentAgeGroup}_${currentRiskProfile}`;
      const portfolio = portfolios[key];
      resultProfileName.textContent = portfolio.name;
      resultProfileDesc.textContent = portfolio.description + " " + portfolio.rationale;
    }
  }, 1200);
}

function finishQuiz() {
  onboardingContainer.style.display = 'none';
  dashboardContainer.style.display = 'block';
  btnRetakeQuiz.style.display = 'inline-block';
  
  const btnExportPpt = document.getElementById('btn-export-ppt');
  if (btnExportPpt) btnExportPpt.style.display = 'inline-block';
  
  badgeMode.textContent = "Advisory Plan Loaded";
  
  // Compile complete Wealth Plan
  compileCFPPlan();
}

function resetQuiz() {
  dashboardContainer.style.display = 'none';
  onboardingContainer.style.display = 'block';
  btnRetakeQuiz.style.display = 'none';
  
  const btnExportPpt = document.getElementById('btn-export-ppt');
  if (btnExportPpt) btnExportPpt.style.display = 'none';
  
  onboardingWelcome.style.display = 'block';
  onboardingQuiz.style.display = 'none';
  onboardingAnalyzing.style.display = 'none';
  onboardingResult.style.display = 'none';
  badgeMode.textContent = "Diagnostic Mode";
}

// CFP Plan Compile Engine
function compileCFPPlan() {
  // Sync Dashboard Horizon Controls
  const dashNum = document.getElementById('dash-horizon-num');
  const dashSlider = document.getElementById('dash-horizon-slider');
  if (dashNum) dashNum.value = formValues.horizon;
  if (dashSlider) dashSlider.value = Math.min(50, formValues.horizon);
  const chips = document.querySelectorAll('#dash-horizon-chips .horizon-chip');
  chips.forEach(chip => {
    const chipVal = parseInt(chip.textContent);
    if (chipVal === formValues.horizon) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });

  // Snapshot Metadata
  reportMetaName.textContent = formValues.customerName || "Valued Investor";
  reportMetaAge.textContent = `${formValues.age} Yrs (${formValues.residence})`;
  const pptBannerClient = document.getElementById('ppt-banner-client-name');
  if (pptBannerClient) pptBannerClient.textContent = formValues.customerName || "Valued Client";

  const surplus = formValues.income - formValues.expenses - formValues.loans;
  const savingsRate = formValues.income > 0 ? (surplus / formValues.income) * 100 : 0;
  const assetBase = formValues.investments + formValues.lumpsum + formValues.emergencyFund;
  
  snapValSurplus.textContent = formatINR(Math.round(surplus)) + "/mo";
  snapValRate.textContent = `${savingsRate.toFixed(1)}%`;
  snapValAssets.textContent = formatINR(Math.round(assetBase));
  snapValTax.textContent = `${formValues.taxSlab}% Slab`;

  // 1. Snapshot Protection Gaps & Alarm Cards
  compileProtectionAlarms(surplus, savingsRate);

  // 2. Behavioral Evaluations (Section 3)
  compileBehavioralDiagnostics(savingsRate);

  // 3. Asset Allocations UI (Section 4)
  const key = `${currentAgeGroup}_${currentRiskProfile}`;
  const portfolio = portfolios[key];
  portfolioNameEl.textContent = portfolio.name;
  targetAudienceEl.textContent = portfolio.target;
  statReturnEl.textContent = `${portfolio.estimatedReturn.toFixed(1)}%`;
  statVolEl.textContent = portfolio.volatility;
  
  // Center Donut text
  chartCenterRatioEl.textContent = `${portfolio.equityPct}%`;
  chartCenterLabelEl.textContent = "EQUITY";
  
  drawDonutChart(portfolio.allocations);
  drawLegend(portfolio.allocations);
  drawAllocationCards(portfolio.allocations, assetBase);

  // 4. Products Recommendations Table (Section 5)
  compileProductRecommendations(portfolio);

  // 5. Goal Roadmap (Section 6)
  compileGoalRoadmap(portfolio);

  // 6. Contingency Planning checklist (Section 7)
  compileContingencyChecklist();

  // 7. Stress Tests & Advisor Conclusions
  compileStressTestsAndConclusions(portfolio, surplus);
}

function compileProtectionAlarms(surplus, savingsRate) {
  snapGapsAlarmBox.innerHTML = '';
  const emergencyTarget = 6 * (formValues.expenses + formValues.loans);
  const termTarget = 12 * 12 * formValues.income; // 12x annual income
  const healthTarget = 500000; // 5L target
  
  const alarms = [];

  // Check emergency fund
  if (formValues.emergencyFund < emergencyTarget) {
    alarms.push({
      type: "danger",
      icon: "🚨",
      title: "Critical Emergency Buffer Deficit",
      desc: `Your current emergency buffer of ${formatINR(formValues.emergencyFund)} is below the minimum CFP target of 6 months expenses (${formatINR(emergencyTarget)}). Immediate action: Pause new SIPs until this buffer is filled.`
    });
  } else {
    alarms.push({
      type: "success",
      icon: "✅",
      title: "Emergency Reserves Secured",
      desc: `Your buffer of ${formatINR(formValues.emergencyFund)} is adequate to support your lifestyle for over 6 months.`
    });
  }

  // Check Term insurance
  if (formValues.age < 60) {
    if (formValues.termInsurance < termTarget) {
      alarms.push({
        type: "danger",
        icon: "🛡️",
        title: "Life Insurance Protection Gap",
        desc: `Your life cover of ${formatINR(formValues.termInsurance)} is below the recommended 12x annual income benchmark (${formatINR(termTarget)}). Seek an online term insurance cover immediately.`
      });
    }
  }

  // Check health insurance
  if (formValues.healthInsurance < healthTarget) {
    alarms.push({
      type: "danger",
      icon: "🏥",
      title: "Health Coverage Shortfall",
      desc: `Your health cover of ${formatINR(formValues.healthInsurance)} is below the standard ₹5 Lakhs benchmark. A sudden hospitalization will deplete your wealth creation equity.`
    });
  }

  // Savings rate warning
  if (savingsRate < 25) {
    alarms.push({
      type: "danger",
      icon: "📉",
      title: "Sub-Optimal Savings Rate",
      desc: `You save only ${savingsRate.toFixed(1)}% of your income. Consider reviewing essential budgets to free up capital.`
    });
  }

  alarms.forEach(al => {
    const card = document.createElement('div');
    card.className = `alarm-card ${al.type}`;
    card.innerHTML = `
      <div class="alarm-icon">${al.icon}</div>
      <div class="alarm-content">
        <h5>${al.title}</h5>
        <p>${al.desc}</p>
      </div>
    `;
    snapGapsAlarmBox.appendChild(card);
  });
}

function compileBehavioralDiagnostics(savingsRate) {
  // Capacity
  let capText = "";
  if (formValues.age >= 60) {
    capText = "Your risk capacity is **LOW** due to retirement lifecycle status. Cash flow preservation is crucial, and reliance on equity volatility must be heavily mitigated using stability asset classes.";
  } else if (formValues.loans > 0.35 * formValues.income) {
    capText = "Your risk capacity is **LOW-TO-MEDIUM**. Existing EMI debt obligations exceed 35% of income, reducing your flexibility to absorb equity drawdowns.";
  } else {
    capText = "Your risk capacity is **HIGH**. With a long horizon until retirement, stable income, and low debt, your corpus has maximum capability to compound through high equity allocations.";
  }
  riskCapEvaluation.innerHTML = capText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Willingness
  let willText = "";
  if (formValues.riskComfort === 'conservative') {
    willText = "Your risk willingness is **CONSERVATIVE**. Capital safety is your emotional comfort zone. Short-term price swings cause you anxiety, and you prefer stable, slower compounding.";
  } else if (formValues.riskComfort === 'moderate') {
    willText = "Your risk willingness is **MODERATE**. You accept mild, short-term equity swings in exchange for long-term purchasing-power growth, appreciating a balanced structure.";
  } else {
    willText = "Your risk willingness is **AGGRESSIVE**. You have strong comfort with high volatility. You see market drops as buying opportunities and prioritize absolute wealth compounding.";
  }
  riskWillEvaluation.innerHTML = willText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Warnings
  let warnText = "";
  if (formValues.stability === 'variable' || formValues.stability === 'business') {
    warnText = "• **Variable Cashflow Trap**: Since your income is variable, do not lock into high fixed SIP commitments. Use a hybrid SIP/Lumpsum approach to prevent default during dry months.";
  } else {
    warnText = "• **Lifestyle Inflation Risk**: As your income increases, ensure you step up your SIPs by 10% annually. Avoid growing expenses at the same rate as income.";
  }
  if (savingsRate < 15) {
    warnText += "<br>• **Surplus Crunch**: Your savings surplus is extremely narrow. Seek to automate investments immediately on salary day to bypass emotional spending.";
  }
  riskBehaviorWarnings.innerHTML = warnText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

let currentReturnMode = 'historical';

function setReturnCalculationMode(mode) {
  currentReturnMode = mode;
  const btnHist = document.getElementById('btn-mode-historical');
  const btnCons = document.getElementById('btn-mode-conservative');
  if (btnHist && btnCons) {
    if (mode === 'historical') {
      btnHist.classList.add('active');
      btnCons.classList.remove('active');
    } else {
      btnCons.classList.add('active');
      btnHist.classList.remove('active');
    }
  }
  if (activeCompiledPortfolio) {
    compileProductRecommendations(activeCompiledPortfolio, currentProductFilter);
  }
}
window.setReturnCalculationMode = setReturnCalculationMode;

// Product table compilation with multi-instrument support (FDs, NCDs, Debt MFs, Sovereign Bonds)
function compileProductRecommendations(portfolio, filterType = 'all') {
  activeCompiledPortfolio = portfolio;
  currentProductFilter = filterType;
  recProductsTbody.innerHTML = '';
  
  const lumpsumCapital = formValues.lumpsum;
  const sipCapacity = formValues.sipCapacity;
  const years = formValues.horizon;

  portfolio.allocations.forEach(alloc => {
    const meta = assetClassesMeta[alloc.key];
    let schemes = recommendedFunds[alloc.key] || [];

    // Filter stability instruments based on onboarding preference if in default view
    if (alloc.key === 'stability' && filterType === 'all') {
      if (formValues.stabilityPreference === 'fds_ncds') {
        schemes = schemes.filter(s => s.category === 'fd' || s.category === 'ncd');
      } else if (formValues.stabilityPreference === 'mf_debt') {
        schemes = schemes.filter(s => s.category === 'mf_debt');
      } else if (formValues.stabilityPreference === 'sovereign') {
        schemes = schemes.filter(s => s.category === 'gov');
      }
    }

    // Apply interactive filter chip if selected
    if (filterType !== 'all') {
      if (filterType === 'equity') {
        if (alloc.key !== 'core_equity' && alloc.key !== 'satellite') return;
      } else {
        if (alloc.key !== 'stability') return;
        schemes = schemes.filter(s => s.category === filterType);
      }
    }

    if (schemes.length === 0) return;

    schemes.forEach((sch) => {
      // Divide allocation evenly among active recommended schemes in the category
      const subAllocPct = alloc.pct / schemes.length;
      
      // Strict CFP rounding: Multiples of ₹500 for Monthly SIP; Multiples of ₹100 for Daily SIP (22 Working Days); Lumpsum exact (unrestricted)
      const rawLumpsum = (subAllocPct / 100) * lumpsumCapital;
      const rawMonthlySip = (subAllocPct / 100) * sipCapacity;

      const fundLumpsum = Math.round(rawLumpsum);
      const fundMonthlySip = roundTo500(rawMonthlySip);
      const fundDailySip = fundMonthlySip > 0 ? roundTo100(fundMonthlySip / 22, 100) : 0;
      
      // Calculate Expected Maturity value strictly based on the chosen mode (Historical Yield vs Conservative Model)
      const appliedRate = (currentReturnMode === 'historical' && sch.histYield) ? sch.histYield : sch.cagr;
      const r = appliedRate / 100;
      const monthlyRate = r / 12;
      const n = years * 12;
      
      const fvLumpsum = fundLumpsum * Math.pow(1 + r, years);
      
      // Use effective monthly contribution based on active frequency mode (22 working days for daily)
      const effectiveMonthlySip = formValues.sipFrequency === 'daily' ? (fundDailySip * 22) : fundMonthlySip;
      const fvSip = effectiveMonthlySip > 0 ? effectiveMonthlySip * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate) : 0;
      const totalFv = Math.round(fvLumpsum + fvSip);

      const badgeClass = sch.badge || 'mf';

      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid var(--border-color)';
      tr.innerHTML = `
        <td style="padding: 0.75rem 0.5rem; font-weight: 600; color: white;">
          ${sch.name} <br>
          <span class="inst-badge ${badgeClass}">${sch.type}</span>
        </td>
        <td style="padding: 0.75rem 0.5rem; color:var(--text-muted);">${meta.name}</td>
        <td style="padding: 0.75rem 0.5rem; text-align: right; color:white;">${subAllocPct.toFixed(1)}%</td>
        <td style="padding: 0.75rem 0.5rem; text-align: right; color:white;">${fundMonthlySip > 0 ? formatINR(fundMonthlySip) : '--'}</td>
        <td style="padding: 0.75rem 0.5rem; text-align: right; color:var(--color-gold); font-weight:700;">${fundDailySip > 0 ? formatINR(fundDailySip) + '/day' : '--'}</td>
        <td style="padding: 0.75rem 0.5rem; text-align: right; color:white;">${fundLumpsum > 0 ? formatINR(fundLumpsum) : '--'}</td>
        <td style="padding: 0.75rem 0.5rem; text-align: center; color:var(--accent-cyan); font-weight:700;">${sch.metric1}</td>
        <td style="padding: 0.75rem 0.5rem; text-align: center;">
          <span class="risk-pill ${getRiskClass(sch.cagr)}">${getRiskLabel(sch.cagr)}</span>
        </td>
        <td style="padding: 0.75rem 0.5rem; text-align: right; color:var(--color-gold); font-weight:700;">
          ${formatINR(totalFv)}
          <div style="font-size:0.68rem; color:var(--text-muted); font-weight:400;">@ ${appliedRate.toFixed(2)}% p.a.</div>
        </td>
        <td style="padding: 0.75rem 0.5rem; font-size:0.75rem; color:var(--text-muted); line-height:1.4;">${sch.desc}</td>
      `;
      recProductsTbody.appendChild(tr);
    });
  });
}

function filterProducts(filterKey, evt) {
  if (evt) {
    document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
    evt.currentTarget.classList.add('active');
  }
  if (activeCompiledPortfolio) {
    compileProductRecommendations(activeCompiledPortfolio, filterKey);
  }
}
window.filterProducts = filterProducts;

function getRiskClass(cagr) {
  if (cagr >= 14) return "high";
  if (cagr >= 10) return "medium";
  return "low";
}

function getRiskLabel(cagr) {
  if (cagr >= 14) return "Very High";
  if (cagr >= 10) return "Moderate";
  return "Low";
}

// Goal based roadmap index
function compileGoalRoadmap(portfolio) {
  const target = roundTo1000(formValues.targetCorpus);
  const t = formValues.horizon;
  
  // Inflation adjusted future value (6% inflation)
  const inflRate = 0.06;
  const inflatedTarget = roundTo1000(target * Math.pow(1 + inflRate, t));
  
  goalValCurrent.textContent = formatINR(target);
  goalValHorizon.textContent = `${t} Years`;
  goalValInflated.textContent = formatINR(inflatedTarget);

  // Compute portfolio projected future value with strict CFP multiples (22 Working Days conversion)
  const r = portfolio.estimatedReturn / 100;
  const initial = Math.round(formValues.lumpsum);
  const monthly = formValues.sipFrequency === 'daily' ? roundTo500(formValues.dailySipAmount * 22) : roundTo500(formValues.sipCapacity);
  const daily = monthly > 0 ? roundTo100(monthly / 22, 100) : 0;
  
  const n = t * 12;
  const monthlyRate = r / 12;
  
  const fvInitial = initial * Math.pow(1 + r, t);
  const fvMonthly = monthly > 0 ? monthly * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate) : 0;
  const totalProjected = Math.round(fvInitial + fvMonthly);
  const totalInvested = Math.round(initial + (monthly * n));

  roadValInvested.textContent = formatINR(totalInvested);
  roadValFuture.textContent = formatINR(totalProjected);

  // Roadmap gap text
  const shortfall = inflatedTarget - totalProjected;
  if (shortfall <= 0) {
    goalGapAnalysis.innerHTML = `
      <p style="color: var(--accent-emerald); font-weight: 700;">✅ Goal Surplus Projected!</p>
      <p style="margin-top: 0.25rem;">At a projected return CAGR of ${portfolio.estimatedReturn}%, your current savings strategy will comfortably secure your goal. You have an estimated surplus of ${formatINR(Math.round(Math.abs(shortfall)))} at maturity. Success Probability: **HIGH (>85%)**.</p>
    `.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  } else {
    // Calculate additional monthly SIP required to bridge the gap
    const addSipRequired = roundTo500(shortfall / (((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate)));
    const addDailyRequired = roundTo100(addSipRequired / 22, 100);
    goalGapAnalysis.innerHTML = `
      <p style="color: var(--accent-rose); font-weight: 700;">🚨 Goal Shortfall Detected!</p>
      <p style="margin-top: 0.25rem;">Under inflation adjustment, your goal target grows to ${formatINR(inflatedTarget)}, leaving a shortfall of ${formatINR(Math.round(shortfall))} against your projected portfolio.</p>
      <p style="margin-top: 0.5rem; color: white;">**Action Required**: Increase your monthly SIP by **${formatINR(addSipRequired)}/mo** (or **${formatINR(addDailyRequired)}/day**), or add lumpsum allocation to secure your roadmap. Success Probability: **LOW (<50%)**.</p>
    `.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  // Draw graph bars
  roadBarsContainer.innerHTML = '';
  const intervals = [Math.round(t*0.25), Math.round(t*0.50), Math.round(t*0.75), t];
  
  const barData = intervals.map(y => {
    const p = y * 12;
    const fvInit = initial * Math.pow(1 + r, y);
    const fvMonth = monthly > 0 ? monthly * ((Math.pow(1 + monthlyRate, p) - 1) / monthlyRate) * (1 + monthlyRate) : 0;
    const fv = Math.round(fvInit + fvMonth);
    const invested = Math.round(initial + (monthly * p));
    return { year: y, fv, invested };
  });

  const maxFv = barData[3].fv || 1;

  barData.forEach(d => {
    const barHeight = (d.fv / maxFv) * 100;
    const invHeight = (d.invested / d.fv) * 100;
    const retHeight = ((d.fv - d.invested) / d.fv) * 100;

    const group = document.createElement('div');
    group.className = 'projection-bar-group';
    group.innerHTML = `
      <div class="projection-bar-stacked" style="height: ${barHeight}%; width: 28px;">
        <div class="bar-part-returns" style="height: ${retHeight}%;"></div>
        <div class="bar-part-principal" style="height: ${invHeight}%;"></div>
      </div>
      <div class="projection-bar-label">Yr ${d.year}</div>
    `;
    roadBarsContainer.appendChild(group);
  });

  // SIP Strategy Acceleration Calculations (Step-Up, Daily SIP, Freedom SIP)
  const sipGrid = document.getElementById('sip-strategy-comparison-grid');
  if (sipGrid) {
    const stepUpRate = 0.10; // 10% annual increment
    let stepUpInvested = initial;
    let stepUpFv = initial * Math.pow(1 + r, t);
    let finalYearMonthlySip = monthly;
    
    for (let k = 1; k <= t; k++) {
      const curMonthly = roundTo500(monthly * Math.pow(1 + stepUpRate, k - 1));
      finalYearMonthlySip = curMonthly;
      stepUpInvested += curMonthly * 12;
      const fvYearSip = curMonthly * ((Math.pow(1 + monthlyRate, 12) - 1) / monthlyRate) * (1 + monthlyRate);
      const fvRemainingYears = fvYearSip * Math.pow(1 + r, t - k);
      stepUpFv += fvRemainingYears;
    }
    
    stepUpFv = Math.round(stepUpFv);
    stepUpInvested = Math.round(stepUpInvested);
    const extraWealthCreated = Math.round(stepUpFv - totalProjected);
    const extraWealthPct = totalProjected > 0 ? ((extraWealthCreated / totalProjected) * 100) : 0;
    
    // Daily SIP Projection (22 working days compounding equivalent)
    const dailyMonthEquiv = Math.round(daily * 22);
    const dailyTotalInvested = Math.round(initial + (dailyMonthEquiv * n));
    const dailyFvMonthly = dailyMonthEquiv > 0 ? dailyMonthEquiv * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate) : 0;
    const dailyTotalFv = Math.round(fvInitial + dailyFvMonthly);

    // Freedom SIP Calculations:
    const baseCorpusForFreedom = (formValues.sipStrategy === 'stepup' ? stepUpFv : totalProjected);
    const safeSwpAnnualRate = 0.07;
    const monthlyFreedomPension = roundTo500((baseCorpusForFreedom * safeSwpAnnualRate) / 12);
    const freedomMultiplier = monthly > 0 ? (monthlyFreedomPension / monthly).toFixed(1) : "0.0";

    sipGrid.innerHTML = `
      <!-- Card 1: Regular Monthly SIP -->
      <div class="strategy-card ${formValues.sipFrequency === 'monthly' && formValues.sipStrategy === 'regular' ? 'highlight' : ''}">
        <div>
          <div class="strategy-header">
            <div>
              <h5 class="strategy-title">1. Monthly SIP</h5>
              <span style="font-size:0.75rem; color:var(--text-muted);">Standard Multiples of ₹500</span>
            </div>
            <span class="strategy-tag blue">Monthly</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Monthly SIP:</span>
            <span class="strategy-metric-val">${formatINR(monthly)}/mo</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Total Capital Invested:</span>
            <span class="strategy-metric-val">${formatINR(totalInvested)}</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Expected Corpus (${t} Yrs):</span>
            <span class="strategy-metric-val gold">${formatINR(totalProjected)}</span>
          </div>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:1rem; line-height:1.4;">
          Consistent monthly investment in strict multiples of ₹500. Ideal for salaried professionals with monthly pay cycles.
        </p>
      </div>

      <!-- Card 2: Daily Micro-SIP -->
      <div class="strategy-card ${formValues.sipFrequency === 'daily' ? 'highlight' : ''}">
        <div>
          <div class="strategy-header">
            <div>
              <h5 class="strategy-title">2. Daily Micro-SIP</h5>
              <span style="font-size:0.75rem; color:var(--text-muted);">Multiples of ₹100 / 22 Days</span>
            </div>
            <span class="strategy-tag gold">Daily RCA</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Daily SIP Commitment:</span>
            <span class="strategy-metric-val gold">${formatINR(daily)}/day</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Monthly Equiv (22 Days):</span>
            <span class="strategy-metric-val">${formatINR(dailyMonthEquiv)}/mo</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Expected Corpus (${t} Yrs):</span>
            <span class="strategy-metric-val emerald">${formatINR(dailyTotalFv)}</span>
          </div>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:1rem; line-height:1.4;">
          Automated daily micro-investing across 22 monthly trading sessions. Matches monthly capacity while eliminating market timing anxiety.
        </p>
      </div>

      <!-- Card 3: Step-Up SIP (+10% Annual) -->
      <div class="strategy-card ${formValues.sipStrategy === 'stepup' ? 'highlight' : ''}">
        <div>
          <div class="strategy-header">
            <div>
              <h5 class="strategy-title">3. Step-Up SIP (+10%/Yr)</h5>
              <span style="font-size:0.75rem; color:var(--text-muted);">Compounding Booster</span>
            </div>
            <span class="strategy-tag emerald">Recommended</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Starting Monthly SIP:</span>
            <span class="strategy-metric-val">${formatINR(monthly)}/mo</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Year ${t} Monthly SIP:</span>
            <span class="strategy-metric-val">${formatINR(finalYearMonthlySip)}/mo</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Accelerated Corpus (${t} Yrs):</span>
            <span class="strategy-metric-val emerald">${formatINR(stepUpFv)}</span>
          </div>
          <div class="strategy-metric-row" style="border-top:1px dashed var(--border-color); margin-top:0.25rem; padding-top:0.5rem;">
            <span class="strategy-metric-lbl" style="color:var(--primary); font-weight:600;">Extra Wealth Generated:</span>
            <span class="strategy-metric-val gold">+${formatINR(extraWealthCreated)} (+${extraWealthPct.toFixed(0)}%)</span>
          </div>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:1rem; line-height:1.4;">
          Increases investment by 10% annually with salary growth (in ₹500 multiples), generating massive terminal wealth.
        </p>
      </div>

      <!-- Card 4: Freedom SIP (Target SWP Blueprint) -->
      <div class="strategy-card ${formValues.sipStrategy === 'freedom' ? 'highlight' : ''}">
        <div>
          <div class="strategy-header">
            <div>
              <h5 class="strategy-title">4. Freedom SIP (Retirement)</h5>
              <span style="font-size:0.75rem; color:var(--text-muted);">Lifetime SWP Pension</span>
            </div>
            <span class="strategy-tag blue">Financial Freedom</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Accumulation Tenure:</span>
            <span class="strategy-metric-val">${t} Years</span>
          </div>
          <div class="strategy-metric-row">
            <span class="strategy-metric-lbl">Maturity Target:</span>
            <span class="strategy-metric-val">${formatINR(baseCorpusForFreedom)}</span>
          </div>
          <div class="freedom-payout-box">
            <div class="freedom-payout-title">Monthly Freedom SWP Pension</div>
            <div class="freedom-payout-val">${formatINR(monthlyFreedomPension)}</div>
            <span style="font-size:0.72rem; color:var(--text-muted);">(${freedomMultiplier}x of initial monthly SIP in ₹500 multiples)</span>
          </div>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.75rem; line-height:1.4;">
          Upon maturity, corpus switches to stability assets to pay tax-efficient monthly income for life with zero capital depletion.
        </p>
      </div>
    `;
  }
}

function compileContingencyChecklist() {
  const container = document.getElementById('contingency-analysis-container');
  container.innerHTML = '';

  const emergencyTarget = 6 * (formValues.expenses + formValues.loans);
  
  // Item 1: Emergency Fund
  const emPercent = Math.min(100, (formValues.emergencyFund / emergencyTarget) * 100);
  const emCard = document.createElement('div');
  emCard.className = 'allocation-card';
  emCard.style.setProperty('--card-border-color', emPercent >= 100 ? 'var(--accent-emerald)' : 'var(--accent-rose)');
  emCard.innerHTML = `
    <div class="allocation-header">
      <span class="allocation-name">Emergency Buffer Reserve (CFP Target: ${formatINR(emergencyTarget)})</span>
      <span class="allocation-pct">${emPercent.toFixed(0)}%</span>
    </div>
    <div class="progress-bar-bg">
      <div class="progress-bar-fill" style="width: ${emPercent}%; background-color: ${emPercent >= 100 ? 'var(--accent-emerald)' : 'var(--accent-rose)'}"></div>
    </div>
    <p class="allocation-desc">${emPercent >= 100 ? 'Emergency fund is secure and resting in high-yield liquid cash assets.' : 'Your buffer is deficient. We recommend directing your next savings surplus strictly into liquid cash deposits.'}</p>
  `;
  container.appendChild(emCard);

  // Item 2: Health Insurance
  const healthPercent = Math.min(100, (formValues.healthInsurance / 500000) * 100);
  const hlCard = document.createElement('div');
  hlCard.className = 'allocation-card';
  hlCard.style.setProperty('--card-border-color', healthPercent >= 100 ? 'var(--accent-emerald)' : 'var(--accent-rose)');
  hlCard.innerHTML = `
    <div class="allocation-header">
      <span class="allocation-name">Health Insurance Coverage (Min Base: ₹5 Lakhs)</span>
      <span class="allocation-pct">${healthPercent.toFixed(0)}%</span>
    </div>
    <div class="progress-bar-bg">
      <div class="progress-bar-fill" style="width: ${healthPercent}%; background-color: ${healthPercent >= 100 ? 'var(--accent-emerald)' : 'var(--accent-rose)'}"></div>
    </div>
    <p class="allocation-desc">${healthPercent >= 100 ? 'You hold sufficient health protection. Keep premium payments automated.' : 'Under-insured. A medical crisis will force debt creation or direct equity liquidation. Buy a top-up cover.'}</p>
  `;
  container.appendChild(hlCard);
}

function compileStressTestsAndConclusions(portfolio, surplus) {
  // Stress Drawdown calculations based on Equity allocation % (Core + Satellite)
  const equityWeight = portfolio.allocations.find(a => a.key === 'core_equity').pct + portfolio.allocations.find(a => a.key === 'satellite').pct;
  
  // 2008 Crash: Equity drops 50%, Debt holds steady. Gold gains 10%.
  const drop2008 = (0.50 * (equityWeight / 100)) * 100;
  stressVal2008.textContent = `-${drop2008.toFixed(1)}%`;
  stressVal2008Rec.textContent = drop2008 > 30 ? "24-36 Months" : "12-18 Months";

  // 2020 Crash: Equity drops 35%.
  const drop2020 = (0.35 * (equityWeight / 100)) * 100;
  stressVal2020.textContent = `-${drop2020.toFixed(1)}%`;
  stressVal2020Rec.textContent = drop2020 > 25 ? "12-18 Months" : "6-10 Months";

  // Advisory Conclusion
  let conclText = "";
  if (surplus < 0) {
    conclText = "🚨 **CRITICAL WARNING**: Your current expenses and loan obligations exceed your net take-home salary. You are in a debt trap. Prioritize loan refinancing, expense cuts, and halt all investment plans until cash flow is net positive.";
  } else if (formValues.emergencyFund < 0.5 * (6 * (formValues.expenses + formValues.loans))) {
    conclText = "⚠️ **PRESERVATION FOCUS**: Your cash flow is healthy, but your emergency defense reserves are dangerously low. Direct all current SIP capability into liquid schemes or saving accounts. Build your buffer first before starting market accumulation.";
  } else {
    conclText = "✅ **STEADY compounding**: Your diagnostic shows high cash flow health. Your protection shields are active, and you have comfortable surplus capital. Proceed with the automated execution steps to deploy your capital into Nivesh recommended portfolios.";
  }
  advisorDirectionConcl.innerHTML = conclText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// Chart rendering functions
function drawDonutChart(allocations) {
  donutSegmentsGroup.innerHTML = '';
  const r = 38;
  const circumference = 2 * Math.PI * r;

  let accumulatedLength = 0;
  const activeAllocations = allocations.filter(a => a.pct > 0);

  activeAllocations.forEach(alloc => {
    const meta = assetClassesMeta[alloc.key];
    const segmentLength = (alloc.pct / 100) * circumference;
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('class', 'donut-segment');
    circle.setAttribute('cx', '50');
    circle.setAttribute('cy', '50');
    circle.setAttribute('r', r.toString());
    circle.setAttribute('stroke', meta.color);
    circle.setAttribute('stroke-dasharray', `${segmentLength} ${circumference}`);
    circle.setAttribute('stroke-dashoffset', (-accumulatedLength).toString());
    
    circle.addEventListener('mouseenter', () => {
      chartCenterRatioEl.textContent = `${alloc.pct}%`;
      chartCenterLabelEl.textContent = meta.name.split(' ')[0].toUpperCase();
    });
    
    circle.addEventListener('mouseleave', () => {
      const key = `${currentAgeGroup}_${currentRiskProfile}`;
      chartCenterRatioEl.textContent = `${portfolios[key].equityPct}%`;
      chartCenterLabelEl.textContent = "EQUITY";
    });

    donutSegmentsGroup.appendChild(circle);
    accumulatedLength += segmentLength;
  });
}

function drawLegend(allocations) {
  legendContainerEl.innerHTML = '';
  allocations.forEach(alloc => {
    if (alloc.pct === 0) return;
    const meta = assetClassesMeta[alloc.key];
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
      <div class="legend-color" style="background-color: ${meta.color};"></div>
      <span>${meta.name} (${alloc.pct}%)</span>
    `;
    legendContainerEl.appendChild(item);
  });
}

// Strict rounding helpers requested by CFP advisory logic:
// Multiples of ₹500 for Monthly investments & SIPs
function roundTo500(val, minVal = 0) {
  if (!val || val <= 0) return 0;
  const rounded = Math.round(val / 500) * 500;
  return Math.max(minVal, rounded);
}

// Multiples of ₹100 for Daily SIP micro-investments
function roundTo100(val, minVal = 0) {
  if (!val || val <= 0) return 0;
  const rounded = Math.round(val / 100) * 100;
  return Math.max(minVal, rounded);
}

// Multiples of ₹1,000 for macro targets & general buffers
function roundTo1000(val, minVal = 0) {
  if (!val || val <= 0) return 0;
  const rounded = Math.round(val / 1000) * 1000;
  return Math.max(minVal, rounded);
}

function drawAllocationCards(allocations, assetBase) {
  cardsContainerEl.innerHTML = '';
  allocations.forEach(alloc => {
    if (alloc.pct === 0) return;
    const meta = assetClassesMeta[alloc.key];
    
    // Calculate targeted deployment values: Lumpsum exact, Monthly SIP ₹500, Daily SIP ₹100
    const targetLump = Math.round((alloc.pct / 100) * formValues.lumpsum);
    const targetMonthlySip = roundTo500((alloc.pct / 100) * formValues.sipCapacity);
    // Daily SIP dynamically derived from Monthly SIP / 22 working days in multiples of ₹100
    const targetDailySip = targetMonthlySip > 0 ? roundTo100(targetMonthlySip / 22, 100) : 0;

    const optionsHtml = `
      <div style="margin: 0.6rem 0; display: flex; align-items: center; flex-wrap: wrap; gap: 0.35rem; font-size: 0.82rem; background: rgba(0,0,0,0.3); padding: 0.45rem 0.75rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06);">
        <span style="color: white; font-weight: 600;">SIP: ${targetMonthlySip > 0 ? formatINR(targetMonthlySip) + '/mo' : '--'}</span>
        <span style="color: var(--primary); font-weight: 700; font-size: 0.72rem; padding: 0 0.25rem;">— OR —</span>
        <span style="color: var(--color-gold); font-weight: 600;">Daily SIP: ${targetDailySip > 0 ? formatINR(targetDailySip) + '/day' : '--'}</span>
        <span style="color: var(--primary); font-weight: 700; font-size: 0.72rem; padding: 0 0.25rem;">— OR —</span>
        <span style="color: var(--accent-cyan); font-weight: 600;">Lump Sum: ${targetLump > 0 ? formatINR(targetLump) : '--'}</span>
      </div>
    `;

    const card = document.createElement('div');
    card.className = 'allocation-card';
    card.style.setProperty('--card-border-color', meta.color);
    card.innerHTML = `
      <div class="allocation-header">
        <span class="allocation-name">${meta.name}</span>
        <span class="allocation-pct">${alloc.pct}% Target Weight</span>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width: ${alloc.pct}%;"></div>
      </div>
      ${optionsHtml}
      <p class="allocation-desc">${alloc.desc}</p>
    `;
    cardsContainerEl.appendChild(card);
  });
}

// Utility rupee formatting en-IN locale
function formatINR(val) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
}

// Tab switcher
function switchTab(evt, tabId) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

/// -------------------------------------------------------------
// PPTX PRESENTATION EXPORT ENGINE (10 EXECUTIVE SLIDES - UNIFIED DECK)
// -------------------------------------------------------------
function exportToPowerPoint() {
  if (typeof PptxGenJS === 'undefined') {
    alert("PowerPoint generation library is loading. Please try again in a moment.");
    return;
  }

  try {
    const pptx = new PptxGenJS();
    pptx.defineLayout({ name: 'LAYOUT_WIDE', width: 13.33, height: 7.5 });
    pptx.layout = 'LAYOUT_WIDE';
    pptx.author = 'Arthika Wealth Advisors';
    pptx.company = 'Arthika Financial Advisory Services';
    pptx.title = `Comprehensive Wealth Plan - ${formValues.customerName || 'Valued Investor'}`;

  // Theme Constants
  const BG_COLOR = '0A1424';
  const CARD_BG = '132238';
  const CARD_BG_ALT = '172642';
  const CARD_BORDER = '2A3F5F';
  const GOLD = 'C5A059';
  const GOLD_LIGHT = 'DFC599';
  const WHITE = 'FFFFFF';
  const TEXT_MUTED = '94A3B8';
  const TEXT_DARK = '5E6F85';
  const CYAN = '38BDF8';
  const EMERALD = '10B981';
  const ROSE = 'F43F5E';

  // Key Financial State & Calculations
  const clientName = formValues.customerName || "Valued Investor";
  const key = `${currentAgeGroup}_${currentRiskProfile}`;
  const portfolio = portfolios[key] || portfolios['young_moderate'];
  const surplus = formValues.income - formValues.expenses - formValues.loans;
  const savingsRate = formValues.income > 0 ? (surplus / formValues.income) * 100 : 0;
  const assetBase = formValues.investments + formValues.lumpsum + formValues.emergencyFund;
  const emergencyTarget = 6 * (formValues.expenses + formValues.loans);
  const termTarget = 12 * 12 * formValues.income;
  const emPercent = Math.min(100, (formValues.emergencyFund / emergencyTarget) * 100);

  // Calculate weighted historical 3Y CAGR across selected allocations
  let weightedHistSum = 0;
  let weightSum = 0;
  portfolio.allocations.forEach(alloc => {
    let schemes = recommendedFunds[alloc.key] || [];
    if (alloc.key === 'stability') {
      if (formValues.stabilityPreference === 'fds_ncds') schemes = schemes.filter(s => s.category === 'fd' || s.category === 'ncd');
      else if (formValues.stabilityPreference === 'mf_debt') schemes = schemes.filter(s => s.category === 'mf_debt');
      else if (formValues.stabilityPreference === 'sovereign') schemes = schemes.filter(s => s.category === 'gov');
    }
    if (schemes.length > 0) {
      const avgHist = schemes.reduce((acc, s) => acc + (s.histYield || s.cagr), 0) / schemes.length;
      weightedHistSum += avgHist * (alloc.pct / 100);
      weightSum += (alloc.pct / 100);
    }
  });
  const histPortfolioReturn = weightSum > 0 ? parseFloat((weightedHistSum / weightSum).toFixed(2)) : portfolio.estimatedReturn;
  const conservativeReturn = portfolio.estimatedReturn;

  // Goal & Compounding Calculations
  const target = roundTo1000(formValues.targetCorpus);
  const t = formValues.horizon;
  const inflRate = 0.06;
  const inflatedTarget = roundTo1000(target * Math.pow(1 + inflRate, t));
  const rCons = conservativeReturn / 100;
  const rHist = histPortfolioReturn / 100;
  const initial = Math.round(formValues.lumpsum);
  const monthly = formValues.sipFrequency === 'daily' ? roundTo500(formValues.dailySipAmount * 22) : roundTo500(formValues.sipCapacity);
  const daily = monthly > 0 ? roundTo100(monthly / 22, 100) : 0;
  const n = t * 12;
  const monthlyRateCons = rCons / 12;
  const monthlyRateHist = rHist / 12;

  // Conservative Projections
  const fvInitialCons = initial * Math.pow(1 + rCons, t);
  const fvMonthlyCons = monthly > 0 ? monthly * ((Math.pow(1 + monthlyRateCons, n) - 1) / monthlyRateCons) * (1 + monthlyRateCons) : 0;
  const totalProjectedCons = Math.round(fvInitialCons + fvMonthlyCons);
  const totalInvested = Math.round(initial + (monthly * n));
  const shortfallCons = inflatedTarget - totalProjectedCons;
  const addSipRequiredCons = shortfallCons > 0 ? roundTo500(shortfallCons / (((Math.pow(1 + monthlyRateCons, n) - 1) / monthlyRateCons) * (1 + monthlyRateCons))) : 0;

  // Historical Yield Projections
  const fvInitialHist = initial * Math.pow(1 + rHist, t);
  const fvMonthlyHist = monthly > 0 ? monthly * ((Math.pow(1 + monthlyRateHist, n) - 1) / monthlyRateHist) * (1 + monthlyRateHist) : 0;
  const totalProjectedHist = Math.round(fvInitialHist + fvMonthlyHist);
  const shortfallHist = inflatedTarget - totalProjectedHist;
  const addSipRequiredHist = shortfallHist > 0 ? roundTo500(shortfallHist / (((Math.pow(1 + monthlyRateHist, n) - 1) / monthlyRateHist) * (1 + monthlyRateHist))) : 0;

  // Step-Up SIP Calculations - Conservative Baseline (+10% annual escalation)
  const stepUpRate = 0.10;
  let stepUpInvested = initial;
  let stepUpFvCons = initial * Math.pow(1 + rCons, t);
  let finalYearMonthlySip = monthly;
  for (let k = 1; k <= t; k++) {
    const curMonthly = roundTo500(monthly * Math.pow(1 + stepUpRate, k - 1));
    finalYearMonthlySip = curMonthly;
    stepUpInvested += curMonthly * 12;
    const fvYearSip = curMonthly * ((Math.pow(1 + monthlyRateCons, 12) - 1) / monthlyRateCons) * (1 + monthlyRateCons);
    const fvRemainingYears = fvYearSip * Math.pow(1 + rCons, t - k);
    stepUpFvCons += fvRemainingYears;
  }
  stepUpFvCons = Math.round(stepUpFvCons);
  stepUpInvested = Math.round(stepUpInvested);
  const extraWealthCreatedCons = Math.round(stepUpFvCons - totalProjectedCons);
  const extraWealthPctCons = totalProjectedCons > 0 ? ((extraWealthCreatedCons / totalProjectedCons) * 100) : 0;

  // Step-Up SIP Calculations - Historical Yield Scenario
  let stepUpFvHist = initial * Math.pow(1 + rHist, t);
  for (let k = 1; k <= t; k++) {
    const curMonthly = roundTo500(monthly * Math.pow(1 + stepUpRate, k - 1));
    const fvYearSip = curMonthly * ((Math.pow(1 + monthlyRateHist, 12) - 1) / monthlyRateHist) * (1 + monthlyRateHist);
    const fvRemainingYears = fvYearSip * Math.pow(1 + rHist, t - k);
    stepUpFvHist += fvRemainingYears;
  }
  stepUpFvHist = Math.round(stepUpFvHist);
  const extraWealthCreatedHist = Math.round(stepUpFvHist - totalProjectedHist);
  const extraWealthPctHist = totalProjectedHist > 0 ? ((extraWealthCreatedHist / totalProjectedHist) * 100) : 0;

  // Daily Micro-SIP Projections (22 working days)
  const dailyMonthEquiv = Math.round(daily * 22);
  const dailyTotalInvested = Math.round(initial + (dailyMonthEquiv * n));
  const dailyFvMonthlyCons = dailyMonthEquiv > 0 ? dailyMonthEquiv * ((Math.pow(1 + monthlyRateCons, n) - 1) / monthlyRateCons) * (1 + monthlyRateCons) : 0;
  const dailyTotalFvCons = Math.round(fvInitialCons + dailyFvMonthlyCons);

  const dailyFvMonthlyHist = dailyMonthEquiv > 0 ? dailyMonthEquiv * ((Math.pow(1 + monthlyRateHist, n) - 1) / monthlyRateHist) * (1 + monthlyRateHist) : 0;
  const dailyTotalFvHist = Math.round(fvInitialHist + dailyFvMonthlyHist);

  // Freedom SIP Calculations
  const safeSwpAnnualRate = 0.07;
  const baseCorpusForFreedomCons = (formValues.sipStrategy === 'stepup' ? stepUpFvCons : totalProjectedCons);
  const monthlyFreedomPensionCons = roundTo500((baseCorpusForFreedomCons * safeSwpAnnualRate) / 12);
  const freedomMultiplierCons = monthly > 0 ? (monthlyFreedomPensionCons / monthly).toFixed(1) : "0.0";

  const baseCorpusForFreedomHist = (formValues.sipStrategy === 'stepup' ? stepUpFvHist : totalProjectedHist);
  const monthlyFreedomPensionHist = roundTo500((baseCorpusForFreedomHist * safeSwpAnnualRate) / 12);
  const freedomMultiplierHist = monthly > 0 ? (monthlyFreedomPensionHist / monthly).toFixed(1) : "0.0";

  // Year-by-Year Compounding Trajectory (Year 1 to Year T) for Native PPT Charts
  const yearsLabels = [];
  const investedArr = [];
  const fvArrCons = [];
  const fvArrHist = [];
  for (let yr = 1; yr <= t; yr++) {
    yearsLabels.push(`Yr ${yr}`);
    const periods = yr * 12;
    const inv = Math.round(initial + (monthly * periods));
    investedArr.push(inv);

    const fvInitCons = initial * Math.pow(1 + rCons, yr);
    const fvMonthCons = monthly > 0 ? monthly * ((Math.pow(1 + monthlyRateCons, periods) - 1) / monthlyRateCons) * (1 + monthlyRateCons) : 0;
    fvArrCons.push(Math.round(fvInitCons + fvMonthCons));

    const fvInitHist = initial * Math.pow(1 + rHist, yr);
    const fvMonthHist = monthly > 0 ? monthly * ((Math.pow(1 + monthlyRateHist, periods) - 1) / monthlyRateHist) * (1 + monthlyRateHist) : 0;
    fvArrHist.push(Math.round(fvInitHist + fvMonthHist));
  }

  // Base Slide Builder with Arthika Brand Header & Footer (Unified 11 Slides Deck)
  function createBaseSlide(title, subtitle, slideNum) {
    const slide = pptx.addSlide();
    slide.background = { color: BG_COLOR };

    // Header Top Bar
    slide.addText("🛡️ ARTHIKA ADVISORS  |  Certified Financial Planning & Model Portfolios", {
      x: 0.6, y: 0.22, w: 6.8, h: 0.3,
      fontSize: 10, bold: true, color: GOLD, fontFace: 'Calibri'
    });
    slide.addText(`Client: ${clientName}  |  Horizon: ${t} Yrs  |  Date: September 2026`, {
      x: 6.8, y: 0.22, w: 5.93, h: 0.3,
      fontSize: 9, color: TEXT_MUTED, align: 'right', fontFace: 'Calibri'
    });

    // Top Divider Line
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.6, y: 0.55, w: 12.13, h: 0.015,
      fill: { color: CARD_BORDER }, line: { color: CARD_BORDER, width: 0 }
    });

    // Slide Titles
    slide.addText(title, {
      x: 0.6, y: 0.68, w: 12.13, h: 0.42,
      fontSize: 18, bold: true, color: WHITE, fontFace: 'Calibri'
    });
    slide.addText(subtitle, {
      x: 0.6, y: 1.12, w: 12.13, h: 0.28,
      fontSize: 10, color: GOLD_LIGHT, fontFace: 'Calibri'
    });

    // Footer Divider & Disclaimer
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0.6, y: 6.95, w: 12.13, h: 0.015,
      fill: { color: CARD_BORDER }, line: { color: CARD_BORDER, width: 0 }
    });
    slide.addText("Confidential — Prepared by Arthika Advisors | Certified Financial Planning & Wealth Architecture Framework", {
      x: 0.6, y: 7.05, w: 8.5, h: 0.25,
      fontSize: 8, color: TEXT_DARK, fontFace: 'Calibri'
    });
    slide.addText(`Slide ${slideNum} of 11`, {
      x: 9.5, y: 7.05, w: 3.23, h: 0.25,
      fontSize: 8.5, bold: true, color: GOLD, align: 'right', fontFace: 'Calibri'
    });

    return slide;
  }

  // =========================================================================
  // SLIDE 1: Investor Snapshot & Gaps Analysis
  // =========================================================================
  const s1 = createBaseSlide("1. INVESTOR SNAPSHOT & GAPS ANALYSIS", "Client Diagnostic Profile, Cashflow Dynamics & Balance Sheet Capacity", 1);
  
  // Row 1: 4 Metric Cards
  const cardsS1 = [
    {
      title: "CLIENT PROFILE",
      lines: [
        { lbl: "Client Name:", val: clientName, color: GOLD },
        { lbl: "Age & City:", val: `${formValues.age} Yrs | ${formValues.residence}`, color: WHITE },
        { lbl: "Tax Slab Mode:", val: `${formValues.taxSlab}% Bracket`, color: CYAN },
        { lbl: "Horizon:", val: `${formValues.horizon} Years`, color: WHITE }
      ]
    },
    {
      title: "MONTHLY CASHFLOW",
      lines: [
        { lbl: "Net Take-Home:", val: `${formatINR(formValues.income)}/mo`, color: WHITE },
        { lbl: "Expenses & Debt:", val: `${formatINR(formValues.expenses + formValues.loans)}/mo`, color: TEXT_MUTED },
        { lbl: "Net Surplus:", val: `${formatINR(surplus)}/mo`, color: EMERALD },
        { lbl: "Net Savings Rate:", val: `${savingsRate.toFixed(1)}% (Target >30%)`, color: GOLD_LIGHT }
      ]
    },
    {
      title: "INVESTMENT OPTIONS (CFP)",
      lines: [
        { lbl: "SIP:", val: `${formatINR(monthly)}/mo (₹500 mult)`, color: GOLD },
        { lbl: "— OR — Daily SIP:", val: `${formatINR(daily)}/day (22 Days)`, color: GOLD_LIGHT },
        { lbl: "— OR — Lump Sum:", val: `${formatINR(formValues.lumpsum)} (Exact)`, color: CYAN },
        { lbl: "Selected Mode:", val: formValues.sipFrequency === 'daily' ? 'Daily Micro-SIP' : 'Monthly Regular SIP', color: WHITE }
      ]
    },
    {
      title: "ASSET BASE & STANCE",
      lines: [
        { lbl: "Current Investments:", val: `${formatINR(formValues.investments)}`, color: WHITE },
        { lbl: "Total Liquid Cushion:", val: `${formatINR(assetBase)}`, color: WHITE },
        { lbl: "Risk Stance:", val: `${currentRiskProfile.toUpperCase()}`, color: CYAN },
        { lbl: "Growth Mode:", val: `${formValues.sipStrategy.toUpperCase()}`, color: EMERALD }
      ]
    }
  ];

  cardsS1.forEach((c, i) => {
    const xPos = 0.6 + i * 3.08;
    s1.addShape(pptx.shapes.RECTANGLE, {
      x: xPos, y: 1.5, w: 2.92, h: 2.15,
      fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }
    });
    
    // Header tag
    s1.addText(c.title, {
      x: xPos + 0.15, y: 1.6, w: 2.62, h: 0.25,
      fontSize: 8.5, bold: true, color: GOLD, fontFace: 'Calibri'
    });

    const textArr = [];
    c.lines.forEach(l => {
      textArr.push({ text: `${l.lbl} `, options: { fontSize: 8.5, color: TEXT_MUTED } });
      textArr.push({ text: `${l.val}\n`, options: { fontSize: 9.5, bold: true, color: l.color } });
    });

    s1.addText(textArr, {
      x: xPos + 0.15, y: 1.9, w: 2.62, h: 1.65,
      valign: 'top', margin: 0, fontFace: 'Calibri'
    });
  });

  // Row 2: 3 Protection & Diagnostics Cards
  const diagBoxesS1 = [
    {
      title: "🛡️ EMERGENCY BUFFER DIAGNOSTIC",
      val: `Current: ${formatINR(formValues.emergencyFund)} / Target: ${formatINR(emergencyTarget)}`,
      status: emPercent >= 100 ? "STATUS: BUFFER SECURED (✅ Adequate)" : "STATUS: DEFICIT DETECTED (🚨 High Priority)",
      statusColor: emPercent >= 100 ? EMERALD : ROSE,
      desc: "Emergency reserves must cover 6 months of living expenses + EMIs in high-yield liquid mutual funds or sweep-in FDs to prevent liquidating long-term equity SIPs during market downturns."
    },
    {
      title: "👨‍👩‍👧 LIFE & HEALTH INSURANCE DEFENSE",
      val: `Life Cover: ${formatINR(formValues.termInsurance)} (Target: ${formatINR(termTarget)}) | Health: ${formatINR(formValues.healthInsurance)}`,
      status: formValues.termInsurance >= termTarget ? "STATUS: FULLY PROTECTED (✅ Covered)" : "STATUS: TERM PROTECTION GAP (⚠️ Action Needed)",
      statusColor: formValues.termInsurance >= termTarget ? EMERALD : ROSE,
      desc: "Ensure life cover equals 10x–12x annual income via pure online term insurance. Maintain a minimum ₹5 Lakhs base family health floater + ₹25 Lakhs Super Top-Up independent of corporate cover."
    },
    {
      title: "⚖️ BEHAVIORAL & CASHFLOW DIRECTIVE",
      val: `Risk Capacity: ${formValues.age < 60 && surplus > 0 ? 'HIGH' : 'CONSERVATIVE'} | Willingness: ${currentRiskProfile.toUpperCase()}`,
      status: savingsRate >= 25 ? "SAVINGS EFFICIENCY: EXCELLENT (✅ >25%)" : "SAVINGS EFFICIENCY: TIGHT (⚠️ Automate on Salary Day)",
      statusColor: savingsRate >= 25 ? EMERALD : GOLD,
      desc: "Behavioral recommendation: Automate SIP investments on the 1st of every month. Avoid panic selling during market corrections and activate an automated +10% annual Step-Up mandate."
    }
  ];

  diagBoxesS1.forEach((b, i) => {
    const xPos = 0.6 + i * 4.1;
    s1.addShape(pptx.shapes.RECTANGLE, {
      x: xPos, y: 3.85, w: 3.93, h: 2.9,
      fill: { color: CARD_BG_ALT }, line: { color: CARD_BORDER, width: 1 }
    });

    s1.addText(b.title, {
      x: xPos + 0.2, y: 3.98, w: 3.53, h: 0.3,
      fontSize: 9.5, bold: true, color: GOLD, fontFace: 'Calibri'
    });
    s1.addText(b.val, {
      x: xPos + 0.2, y: 4.3, w: 3.53, h: 0.35,
      fontSize: 9, color: WHITE, bold: true, fontFace: 'Calibri'
    });
    s1.addText(b.status, {
      x: xPos + 0.2, y: 4.65, w: 3.53, h: 0.28,
      fontSize: 8.5, bold: true, color: b.statusColor, fontFace: 'Calibri'
    });
    s1.addText(b.desc, {
      x: xPos + 0.2, y: 4.95, w: 3.53, h: 1.65,
      fontSize: 8.5, color: TEXT_MUTED, fontFace: 'Calibri', lineSpacingMultiple: 1.15
    });
  });

  // =========================================================================
  // SLIDE 2: Macroeconomic & Market Outlook
  // =========================================================================
  const s2 = createBaseSlide("2. MACROECONOMIC & MARKET OUTLOOK", "Current Indian Macro Landscape, Geopolitical Dynamics & Strategic Positioning (September 2026)", 2);

  const macroBoxes = [
    {
      title: "🇮🇳 INDIAN MACROECONOMIC FUNDAMENTALS",
      items: [
        "• GDP Growth Leadership: India's FY26/FY27 GDP growth projected at 6.8%–7.2%, outpacing all major global economies.",
        "• Tax & Revenue Buoyancy: Monthly gross GST collections averaging ₹1.85+ Lakh Crore reflecting rapid corporate formalization.",
        "• Private CapEx Momentum: Multi-year expansion cycles underway across Infrastructure, Power, Renewable Energy, and PLI Manufacturing.",
        "• Corporate Balance Sheets: Domestic corporate leverage at decadal lows with return on equity (ROE) expanding across mid/large caps."
      ]
    },
    {
      title: "📈 INTEREST RATES, YIELDS & INFLATION",
      items: [
        "• 10-Year G-Sec Sovereign Yield: Hovering near 6.94%, creating attractive accrual lock-in opportunities for high-grade debt.",
        "• CPI Inflation Comfort: July headline inflation moderated to ~4.45%, firmly within the RBI's 4.0% (+/-2%) target corridor.",
        "• Monetary Policy Stance: RBI maintaining neutral-to-easing liquidity; global rate cuts (US Fed easing) support emerging market capital.",
        "• Sovereign Resilience: India's foreign exchange reserves surpass $680 Billion, shielding the Rupee from sudden currency shocks."
      ]
    },
    {
      title: "🌍 GEOPOLITICAL DYNAMICS & CAPITAL FLOWS",
      items: [
        "• Domestic SIP Moat: Retail monthly SIP inflows reaching record ₹23,000+ Crore/month, creating an institutional floor against FII volatility.",
        "• Energy & Crude Oil: Brent crude stabilizing within $80–$90/barrel amid OPEC+ supply discipline and Red Sea trade management.",
        "• Precious Metals (Gold/Silver): Gold rallied 9%+ in recent months, demonstrating its role as a premier domestic crash & currency hedge.",
        "• Global Supply Chains: 'China+1' structural manufacturing shifts continue directing multinational FDI into Indian industrial corridors."
      ]
    },
    {
      title: "🎯 STRATEGIC ASSET POSITIONING (HOUSE VIEW)",
      items: [
        "• Equities (Core & Satellite): Prime long-term compounding engine (3-5+ year horizon). Accumulate via SIP/STP in Nifty 500 & Momentum factors.",
        "• Fixed Income & Stability: Avoid high-duration/gilt interest rate traps. Focus on AAA Corporate FDs (7.5%-8.0%) and Senior Secured NCDs (8.7%-10.3%).",
        "• Daily Micro-SIP Edge: Leverage daily ₹100 micro-allocations (22 trading days) to eliminate market-timing anxiety seamlessly.",
        "• Annual Rebalancing: Rebalance portfolios if Core/Satellite segments drift by >5% absolute weight to capture low valuations systematically."
      ]
    }
  ];

  macroBoxes.forEach((b, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const xPos = col === 0 ? 0.6 : 6.75;
    const yPos = row === 0 ? 1.5 : 4.2;

    s2.addShape(pptx.shapes.RECTANGLE, {
      x: xPos, y: yPos, w: 5.98, h: 2.55,
      fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }
    });

    s2.addText(b.title, {
      x: xPos + 0.2, y: yPos + 0.15, w: 5.58, h: 0.3,
      fontSize: 9.5, bold: true, color: GOLD, fontFace: 'Calibri'
    });

    const bulletArr = b.items.map(it => ({
      text: `${it}\n\n`,
      options: { fontSize: 8.5, color: TEXT_MUTED, fontFace: 'Calibri' }
    }));

    s2.addText(bulletArr, {
      x: xPos + 0.2, y: yPos + 0.45, w: 5.58, h: 1.95,
      valign: 'top', margin: 0, fontFace: 'Calibri'
    });
  });

  // =========================================================================
  // SLIDE 3: Recommended Portfolio Asset Allocation
  // =========================================================================
  const s3 = createBaseSlide("3. RECOMMENDED PORTFOLIO ASSET ALLOCATION", "Nobel-Laureate Markowitz Modern Portfolio Theory & Multi-Asset Allocation Architecture", 3);

  // Top Banner
  s3.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.5, w: 12.13, h: 1.05,
    fill: { color: CARD_BG_ALT }, line: { color: GOLD, width: 1 }
  });
  s3.addText(`PROPOSED PORTFOLIO: ${portfolio.name.toUpperCase()} (${portfolio.target})`, {
    x: 0.8, y: 1.6, w: 7.5, h: 0.3,
    fontSize: 12, bold: true, color: GOLD, fontFace: 'Calibri'
  });
  s3.addText(`Target Conservative Return: ${conservativeReturn.toFixed(1)}% CAGR   |   Weighted Historical 3Y: ${histPortfolioReturn.toFixed(1)}% CAGR   |   Equity Ratio: ${portfolio.equityPct}%`, {
    x: 0.8, y: 1.92, w: 7.5, h: 0.3,
    fontSize: 9.5, color: WHITE, fontFace: 'Calibri'
  });
  s3.addText("Nobel Markowitz Model\nCore-Satellite Strategy", {
    x: 8.8, y: 1.6, w: 3.7, h: 0.8,
    fontSize: 10, bold: true, color: CYAN, align: 'right', fontFace: 'Calibri'
  });

  // 3 Asset Class Cards
  const coreAlloc = portfolio.allocations.find(a => a.key === 'core_equity') ? portfolio.allocations.find(a => a.key === 'core_equity').pct : 45;
  const satAlloc = portfolio.allocations.find(a => a.key === 'satellite') ? portfolio.allocations.find(a => a.key === 'satellite').pct : 15;
  const stabAlloc = portfolio.allocations.find(a => a.key === 'stability') ? portfolio.allocations.find(a => a.key === 'stability').pct : 40;

  const coreLump = Math.round((coreAlloc / 100) * formValues.lumpsum);
  const coreMonthly = roundTo500((coreAlloc / 100) * formValues.sipCapacity);
  const coreDaily = coreMonthly > 0 ? roundTo100(coreMonthly / 22, 100) : 0;

  const satLump = Math.round((satAlloc / 100) * formValues.lumpsum);
  const satMonthly = roundTo500((satAlloc / 100) * formValues.sipCapacity);
  const satDaily = satMonthly > 0 ? roundTo100(satMonthly / 22, 100) : 0;

  const stabLump = Math.round((stabAlloc / 100) * formValues.lumpsum);
  const stabMonthly = roundTo500((stabAlloc / 100) * formValues.sipCapacity);
  const stabDaily = stabMonthly > 0 ? roundTo100(stabMonthly / 22, 100) : 0;

  const allocCardsS3 = [
    {
      title: "1. CORE EQUITY (MARKET INDEX BETA)",
      pct: `${coreAlloc}%`,
      lump: coreLump,
      month: coreMonthly,
      daily: coreDaily,
      desc: "Captures low-cost broad market Beta through Nifty 50 and Nifty 500 passive index funds with minimum tracking error. Anchors portfolio compounding with India's macroeconomic expansion."
    },
    {
      title: "2. SATELLITE (ENHANCED FACTOR ALPHA)",
      pct: `${satAlloc}%`,
      lump: satLump,
      month: satMonthly,
      daily: satDaily,
      desc: "Targets structural excess returns (Alpha) through Nifty200 Momentum 30 factor index funds and high-conviction Active Mid/Small Cap mutual funds to maximize long-term wealth acceleration."
    },
    {
      title: "3. STABILITY (RISK MITIGATION & INCOME)",
      pct: `${stabAlloc}%`,
      lump: stabLump,
      month: stabMonthly,
      daily: stabDaily,
      desc: "Protects capital using CRISIL AAA Corporate FDs (Bajaj/Shriram 7.75%-8.0%), Senior Secured NCDs (AA+ Sammaan/Muthoot 8.7%-10.3% YTM), Debt MFs, and Sovereign Floating Rate Bonds."
    }
  ];

  allocCardsS3.forEach((c, i) => {
    const xPos = 0.6 + i * 4.1;
    s3.addShape(pptx.shapes.RECTANGLE, {
      x: xPos, y: 2.7, w: 3.93, h: 2.7,
      fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }
    });

    s3.addText(c.title, {
      x: xPos + 0.15, y: 2.82, w: 2.8, h: 0.25,
      fontSize: 8.5, bold: true, color: GOLD, fontFace: 'Calibri'
    });
    s3.addText(c.pct, {
      x: xPos + 2.95, y: 2.8, w: 0.8, h: 0.3,
      fontSize: 13, bold: true, color: WHITE, align: 'right', fontFace: 'Calibri'
    });

    const metricsArr = [
      { text: "Monthly SIP: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
      { text: `${formatINR(c.month)}/mo\n`, options: { fontSize: 9.5, bold: true, color: WHITE } },
      { text: "— OR Daily SIP: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
      { text: `${formatINR(c.daily)}/day\n`, options: { fontSize: 9.5, bold: true, color: GOLD_LIGHT } },
      { text: "— OR Lump Sum: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
      { text: `${formatINR(c.lump)}\n\n`, options: { fontSize: 9.5, bold: true, color: CYAN } },
      { text: c.desc, options: { fontSize: 8.2, color: TEXT_MUTED } }
    ];

    s3.addText(metricsArr, {
      x: xPos + 0.15, y: 3.12, w: 3.63, h: 2.2,
      valign: 'top', margin: 0, fontFace: 'Calibri'
    });
  });

  // Bottom Framework Banner
  s3.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 5.55, w: 12.13, h: 1.25,
    fill: { color: CARD_BG_ALT }, line: { color: CARD_BORDER, width: 1 }
  });
  s3.addText("ACADEMIC NOBEL LAUREATE PORTFOLIO FRAMEWORK", {
    x: 0.8, y: 5.65, w: 11.7, h: 0.25,
    fontSize: 9.5, bold: true, color: GOLD, fontFace: 'Calibri'
  });
  s3.addText("• Markowitz Mean-Variance Optimization: Blends negatively correlated asset classes (Equity, Fixed Income, Sovereign Gold) to eliminate uncompensated risk.\n• William Sharpe CAPM: Isolates ultra-low-cost market Beta (70% core) while targeting active factor Alpha (30% satellite) to maximize overall Sharpe Ratio.\n• Richard Thaler Behavioral Glide Path: Automates asset allocation shifts across lifecycle stages to remove emotional decision errors during market drawdowns.", {
    x: 0.8, y: 5.92, w: 11.7, h: 0.78,
    fontSize: 8.5, color: TEXT_MUTED, fontFace: 'Calibri'
  });

  // =========================================================================
  // SLIDE 4: Curated Product Portfolio — CONSERVATIVE BENCHMARK MODEL
  // =========================================================================
  const s4 = createBaseSlide("4. CURATED PRODUCT PORTFOLIO — CONSERVATIVE BENCHMARK MODEL", "Expected returns projected using standard conservative benchmark parameters (Equities: 12.0% p.a., Fixed Income: 7.5% p.a.)", 4);

  // Callout Banner
  s4.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.45, w: 12.13, h: 0.52,
    fill: { color: '132238' }, line: { color: GOLD, width: 1 }
  });
  s4.addText("🛡️ CONSERVATIVE BENCHMARK MODEL: Utilizes prudent long-term baseline capital market assumptions (Equities: 12.0% p.a., Stability/Debt: 7.5% p.a.) recommended for fiduciary risk management & statutory goal-planning.", {
    x: 0.8, y: 1.52, w: 11.73, h: 0.38,
    fontSize: 8.5, bold: true, color: GOLD_LIGHT, fontFace: 'Calibri'
  });

  // Generate Conservative table rows
  const tableRowsCons = [];
  tableRowsCons.push([
    { text: "Product / Scheme Name", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'left' } },
    { text: "Category", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'left' } },
    { text: "Weight", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } },
    { text: "Monthly SIP", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } },
    { text: "Daily SIP", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } },
    { text: "Lump Sum", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } },
    { text: "Benchmark CAGR", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'center' } },
    { text: "Expected Maturity Value (@ Conservative)", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } }
  ]);

  let totalAllocPctCons = 0;
  let totalMonthlySipSumCons = 0;
  let totalDailySipSumCons = 0;
  let totalLumpsumSumCons = 0;
  let totalMaturityFvSumCons = 0;

  portfolio.allocations.forEach(alloc => {
    let schemes = recommendedFunds[alloc.key] || [];
    if (alloc.key === 'stability') {
      if (formValues.stabilityPreference === 'fds_ncds') {
        schemes = schemes.filter(s => s.category === 'fd' || s.category === 'ncd');
      } else if (formValues.stabilityPreference === 'mf_debt') {
        schemes = schemes.filter(s => s.category === 'mf_debt');
      } else if (formValues.stabilityPreference === 'sovereign') {
        schemes = schemes.filter(s => s.category === 'gov');
      }
    }

    if (schemes.length === 0) return;

    schemes.forEach(sch => {
      const subAllocPct = alloc.pct / schemes.length;
      totalAllocPctCons += subAllocPct;

      const fundLumpsum = Math.round((subAllocPct / 100) * formValues.lumpsum);
      const fundMonthlySip = roundTo500((subAllocPct / 100) * formValues.sipCapacity);
      const fundDailySip = fundMonthlySip > 0 ? roundTo100(fundMonthlySip / 22, 100) : 0;

      const appliedYield = sch.cagr;
      const itemR = appliedYield / 100;
      const itemMonthlyRate = itemR / 12;
      const fvL = fundLumpsum * Math.pow(1 + itemR, t);
      const effSip = formValues.sipFrequency === 'daily' ? (fundDailySip * 22) : fundMonthlySip;
      const fvS = effSip > 0 ? effSip * ((Math.pow(1 + itemMonthlyRate, n) - 1) / itemMonthlyRate) * (1 + itemMonthlyRate) : 0;
      const itemTotalFv = Math.round(fvL + fvS);

      totalMonthlySipSumCons += fundMonthlySip;
      totalDailySipSumCons += fundDailySip;
      totalLumpsumSumCons += fundLumpsum;
      totalMaturityFvSumCons += itemTotalFv;

      tableRowsCons.push([
        { text: sch.name, options: { fill: { color: CARD_BG }, color: WHITE, bold: true, fontSize: 8 } },
        { text: sch.type, options: { fill: { color: CARD_BG }, color: CYAN, fontSize: 7.5 } },
        { text: `${subAllocPct.toFixed(1)}%`, options: { fill: { color: CARD_BG }, color: WHITE, fontSize: 8, align: 'right' } },
        { text: fundMonthlySip > 0 ? formatINR(fundMonthlySip) : '--', options: { fill: { color: CARD_BG }, color: WHITE, fontSize: 8, align: 'right' } },
        { text: fundDailySip > 0 ? formatINR(fundDailySip) : '--', options: { fill: { color: CARD_BG }, color: GOLD_LIGHT, bold: true, fontSize: 8, align: 'right' } },
        { text: fundLumpsum > 0 ? formatINR(fundLumpsum) : '--', options: { fill: { color: CARD_BG }, color: WHITE, fontSize: 8, align: 'right' } },
        { text: `${appliedYield.toFixed(2)}% p.a.`, options: { fill: { color: CARD_BG }, color: EMERALD, bold: true, fontSize: 7.5, align: 'center' } },
        { text: `${formatINR(itemTotalFv)} (@ ${appliedYield.toFixed(1)}%)`, options: { fill: { color: CARD_BG }, color: GOLD_LIGHT, bold: true, fontSize: 8, align: 'right' } }
      ]);
    });
  });

  tableRowsCons.push([
    { text: "TOTAL PORTFOLIO (CONSERVATIVE BASELINE)", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5 } },
    { text: "Multi-Asset", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8 } },
    { text: "100.0%", options: { fill: { color: '1e3a5f' }, color: WHITE, bold: true, fontSize: 8.5, align: 'right' } },
    { text: formatINR(roundTo500(totalMonthlySipSumCons)), options: { fill: { color: '1e3a5f' }, color: WHITE, bold: true, fontSize: 8.5, align: 'right' } },
    { text: formatINR(roundTo100(totalDailySipSumCons)), options: { fill: { color: '1e3a5f' }, color: GOLD_LIGHT, bold: true, fontSize: 8.5, align: 'right' } },
    { text: formatINR(Math.round(totalLumpsumSumCons)), options: { fill: { color: '1e3a5f' }, color: WHITE, bold: true, fontSize: 8.5, align: 'right' } },
    { text: `${conservativeReturn.toFixed(1)}% CAGR`, options: { fill: { color: '1e3a5f' }, color: EMERALD, bold: true, fontSize: 8.5, align: 'center' } },
    { text: formatINR(totalMaturityFvSumCons), options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } }
  ]);

  s4.addTable(tableRowsCons, {
    x: 0.6, y: 2.05, w: 12.13,
    colW: [2.8, 1.4, 0.7, 1.2, 1.1, 1.1, 1.5, 2.33],
    autoPage: false,
    border: { type: 'solid', pt: 0.5, color: CARD_BORDER }
  });

  // =========================================================================
  // SLIDE 5: Curated Product Portfolio — HISTORICAL YIELDS & COUPONS SCENARIO
  // =========================================================================
  const s5 = createBaseSlide("5. CURATED PRODUCT PORTFOLIO — HISTORICAL YIELDS & COUPONS SCENARIO", "Projections matching exact historical yields, 3Y trailing CAGRs, and primary bond/deposit coupons", 5);

  // Callout Banner
  s5.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.45, w: 12.13, h: 0.52,
    fill: { color: '132238' }, line: { color: CYAN, width: 1 }
  });
  s5.addText("📈 HISTORICAL YIELDS & COUPONS SCENARIO: Projections strictly match actual 3Y trailing performance and coupons (SBI Nifty: 13.80%, Motilal 500: 15.73%, HSBC Midcap: 23.26%, Bandhan Small Cap: 23.55%, Sammaan NCD: 8.70%, Muthoot NCD: 10.29%, Bajaj FD: 7.75%, Shriram FD: 8.00%).", {
    x: 0.8, y: 1.52, w: 11.73, h: 0.38,
    fontSize: 8.5, bold: true, color: CYAN, fontFace: 'Calibri'
  });

  // Generate Historical table rows
  const tableRowsHist = [];
  tableRowsHist.push([
    { text: "Product / Scheme Name", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'left' } },
    { text: "Category", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'left' } },
    { text: "Weight", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } },
    { text: "Monthly SIP", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } },
    { text: "Daily SIP", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } },
    { text: "Lump Sum", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } },
    { text: "Actual 3Y CAGR / Coupon", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'center' } },
    { text: "Expected Maturity Value (@ Historical Yield)", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } }
  ]);

  let totalAllocPctHist = 0;
  let totalMonthlySipSumHist = 0;
  let totalDailySipSumHist = 0;
  let totalLumpsumSumHist = 0;
  let totalMaturityFvSumHist = 0;

  portfolio.allocations.forEach(alloc => {
    let schemes = recommendedFunds[alloc.key] || [];
    if (alloc.key === 'stability') {
      if (formValues.stabilityPreference === 'fds_ncds') {
        schemes = schemes.filter(s => s.category === 'fd' || s.category === 'ncd');
      } else if (formValues.stabilityPreference === 'mf_debt') {
        schemes = schemes.filter(s => s.category === 'mf_debt');
      } else if (formValues.stabilityPreference === 'sovereign') {
        schemes = schemes.filter(s => s.category === 'gov');
      }
    }

    if (schemes.length === 0) return;

    schemes.forEach(sch => {
      const subAllocPct = alloc.pct / schemes.length;
      totalAllocPctHist += subAllocPct;

      const fundLumpsum = Math.round((subAllocPct / 100) * formValues.lumpsum);
      const fundMonthlySip = roundTo500((subAllocPct / 100) * formValues.sipCapacity);
      const fundDailySip = fundMonthlySip > 0 ? roundTo100(fundMonthlySip / 22, 100) : 0;

      const appliedYield = sch.histYield || sch.cagr;
      const itemR = appliedYield / 100;
      const itemMonthlyRate = itemR / 12;
      const fvL = fundLumpsum * Math.pow(1 + itemR, t);
      const effSip = formValues.sipFrequency === 'daily' ? (fundDailySip * 22) : fundMonthlySip;
      const fvS = effSip > 0 ? effSip * ((Math.pow(1 + itemMonthlyRate, n) - 1) / itemMonthlyRate) * (1 + itemMonthlyRate) : 0;
      const itemTotalFv = Math.round(fvL + fvS);

      totalMonthlySipSumHist += fundMonthlySip;
      totalDailySipSumHist += fundDailySip;
      totalLumpsumSumHist += fundLumpsum;
      totalMaturityFvSumHist += itemTotalFv;

      tableRowsHist.push([
        { text: sch.name, options: { fill: { color: CARD_BG }, color: WHITE, bold: true, fontSize: 8 } },
        { text: sch.type, options: { fill: { color: CARD_BG }, color: CYAN, fontSize: 7.5 } },
        { text: `${subAllocPct.toFixed(1)}%`, options: { fill: { color: CARD_BG }, color: WHITE, fontSize: 8, align: 'right' } },
        { text: fundMonthlySip > 0 ? formatINR(fundMonthlySip) : '--', options: { fill: { color: CARD_BG }, color: WHITE, fontSize: 8, align: 'right' } },
        { text: fundDailySip > 0 ? formatINR(fundDailySip) : '--', options: { fill: { color: CARD_BG }, color: GOLD_LIGHT, bold: true, fontSize: 8, align: 'right' } },
        { text: fundLumpsum > 0 ? formatINR(fundLumpsum) : '--', options: { fill: { color: CARD_BG }, color: WHITE, fontSize: 8, align: 'right' } },
        { text: sch.metric1, options: { fill: { color: CARD_BG }, color: EMERALD, bold: true, fontSize: 7.5, align: 'center' } },
        { text: `${formatINR(itemTotalFv)} (@ ${appliedYield.toFixed(2)}%)`, options: { fill: { color: CARD_BG }, color: GOLD_LIGHT, bold: true, fontSize: 8, align: 'right' } }
      ]);
    });
  });

  tableRowsHist.push([
    { text: "TOTAL PORTFOLIO (HISTORICAL YIELD MATCH)", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5 } },
    { text: "Multi-Asset", options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8 } },
    { text: "100.0%", options: { fill: { color: '1e3a5f' }, color: WHITE, bold: true, fontSize: 8.5, align: 'right' } },
    { text: formatINR(roundTo500(totalMonthlySipSumHist)), options: { fill: { color: '1e3a5f' }, color: WHITE, bold: true, fontSize: 8.5, align: 'right' } },
    { text: formatINR(roundTo100(totalDailySipSumHist)), options: { fill: { color: '1e3a5f' }, color: GOLD_LIGHT, bold: true, fontSize: 8.5, align: 'right' } },
    { text: formatINR(Math.round(totalLumpsumSumHist)), options: { fill: { color: '1e3a5f' }, color: WHITE, bold: true, fontSize: 8.5, align: 'right' } },
    { text: `${histPortfolioReturn.toFixed(1)}% CAGR`, options: { fill: { color: '1e3a5f' }, color: EMERALD, bold: true, fontSize: 8.5, align: 'center' } },
    { text: formatINR(totalMaturityFvSumHist), options: { fill: { color: '1e3a5f' }, color: GOLD, bold: true, fontSize: 8.5, align: 'right' } }
  ]);

  s5.addTable(tableRowsHist, {
    x: 0.6, y: 2.05, w: 12.13,
    colW: [2.8, 1.4, 0.7, 1.2, 1.1, 1.1, 1.5, 2.33],
    autoPage: false,
    border: { type: 'solid', pt: 0.5, color: CARD_BORDER }
  });

  // =========================================================================
  // SLIDE 6: Goal-Based Wealth Roadmap — CONSERVATIVE BENCHMARK MODEL
  // =========================================================================
  const s6 = createBaseSlide("6. GOAL-BASED WEALTH ROADMAP — CONSERVATIVE BENCHMARK MODEL", `Inflation-Adjusted Target vs. Compounded Trajectory from Year 1 to ${t} (Conservative Benchmark: ${conservativeReturn.toFixed(1)}% CAGR)`, 6);

  // Callout Banner
  s6.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.45, w: 12.13, h: 0.40,
    fill: { color: '132238' }, line: { color: GOLD, width: 1 }
  });
  s6.addText(`🛡️ CONSERVATIVE BENCHMARK MODEL: Prudent trajectory compounding at standard parameters (Equities: 12.0% p.a., Stability/Debt: 7.5% p.a. | ${conservativeReturn.toFixed(1)}% CAGR).`, {
    x: 0.8, y: 1.50, w: 11.73, h: 0.30,
    fontSize: 8.5, bold: true, color: GOLD_LIGHT, fontFace: 'Calibri'
  });

  // Left Box: Goal Target & Inflation Parameters
  s6.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.92, w: 5.95, h: 1.70,
    fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }
  });
  s6.addText("🎯 GOAL TARGET & INFLATION PARAMETERS", {
    x: 0.8, y: 2.00, w: 5.55, h: 0.24,
    fontSize: 9.5, bold: true, color: GOLD, fontFace: 'Calibri'
  });

  const goalParamsArrCons = [
    { text: "Primary Goal: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
    { text: `${formValues.primaryGoal.toUpperCase()} CREATION  |  `, options: { fontSize: 9, bold: true, color: WHITE } },
    { text: "Time Horizon: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
    { text: `${t} Years\n`, options: { fontSize: 9, bold: true, color: CYAN } },
    { text: "Today's Cost: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
    { text: `${formatINR(target)}  |  `, options: { fontSize: 9, bold: true, color: WHITE } },
    { text: "Assumed Inflation: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
    { text: "6.0% p.a.\n", options: { fontSize: 9, bold: true, color: GOLD_LIGHT } },
    { text: "Inflation-Adjusted Target Cost: ", options: { fontSize: 9, bold: true, color: GOLD } },
    { text: `${formatINR(inflatedTarget)} `, options: { fontSize: 11, bold: true, color: GOLD } },
    { text: `(+${((inflatedTarget/target - 1)*100).toFixed(0)}% due to inflation)`, options: { fontSize: 8, color: TEXT_MUTED } }
  ];

  s6.addText(goalParamsArrCons, {
    x: 0.8, y: 2.26, w: 5.55, h: 1.28,
    valign: 'top', margin: 0, fontFace: 'Calibri'
  });

  // Right Box: Conservative Accumulation & Gap Diagnostic
  s6.addShape(pptx.shapes.RECTANGLE, {
    x: 6.78, y: 1.92, w: 5.95, h: 1.70,
    fill: { color: CARD_BG_ALT }, line: { color: CARD_BORDER, width: 1 }
  });
  s6.addText("📊 CONSERVATIVE ACCUMULATION & GAP DIAGNOSTIC", {
    x: 6.98, y: 2.00, w: 5.55, h: 0.24,
    fontSize: 9.5, bold: true, color: GOLD, fontFace: 'Calibri'
  });

  const accumArrCons = [
    { text: "Total Invested Capital: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
    { text: `${formatINR(totalInvested)} (Lumpsum: ${formatINR(initial)} + SIP)\n`, options: { fontSize: 9, bold: true, color: WHITE } },
    { text: `Conservative Projected Corpus (${conservativeReturn.toFixed(1)}% CAGR): `, options: { fontSize: 8.5, bold: true, color: GOLD_LIGHT } },
    { text: `${formatINR(totalProjectedCons)}\n`, options: { fontSize: 11, bold: true, color: GOLD_LIGHT } },
    { text: "Goal Status: ", options: { fontSize: 8.5, bold: true, color: shortfallCons <= 0 ? EMERALD : ROSE } },
    { text: shortfallCons <= 0 ? `SURPLUS OF +${formatINR(Math.abs(shortfallCons))} (Prob >85%)` : `SHORTFALL OF -${formatINR(shortfallCons)} (Add'l SIP ${formatINR(addSipRequiredCons)}/mo)`, options: { fontSize: 9, bold: true, color: shortfallCons <= 0 ? EMERALD : ROSE } }
  ];

  s6.addText(accumArrCons, {
    x: 6.98, y: 2.26, w: 5.55, h: 1.28,
    valign: 'top', margin: 0, fontFace: 'Calibri'
  });

  // Bottom Box: Timeline Chart (Conservative)
  s6.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 3.70, w: 12.13, h: 3.10,
    fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }
  });
  s6.addText(`📈 TIMELINE WEALTH ACCUMULATION MILESTONES (CONSERVATIVE COMPOUNDING TRAJECTORY: YEAR 1 TO YEAR ${t})`, {
    x: 0.8, y: 3.76, w: 11.7, h: 0.25,
    fontSize: 9.5, bold: true, color: GOLD, fontFace: 'Calibri'
  });

  const chartType = pptx.ChartType ? pptx.ChartType.bar : (pptx.charts ? pptx.charts.BAR : 'bar');
  const chartDataCons = [
    { name: "Cumulative Invested Capital", labels: yearsLabels, values: investedArr },
    { name: `Projected Wealth Corpus (@ ${conservativeReturn.toFixed(1)}% CAGR)`, labels: yearsLabels, values: fvArrCons }
  ];
  s6.addChart(chartType, chartDataCons, {
    x: 0.8, y: 4.05, w: 11.73, h: 2.65,
    barGrouping: 'clustered',
    chartColors: ['38BDF8', '10B981'],
    showLegend: true, legendPos: 't', legendColor: 'FFFFFF', legendFontSize: 8.5,
    catAxisLabelColor: '94A3B8', catAxisLabelFontSize: 8,
    valAxisLabelColor: '94A3B8', valAxisLabelFontSize: 8,
    valGridLine: { color: '2A3F5F', size: 0.5 },
    catGridLine: { style: 'none' },
    plotArea: { fill: { color: '132238' } }
  });

  // =========================================================================
  // SLIDE 7: Goal-Based Wealth Roadmap — HISTORICAL YIELDS & COUPONS SCENARIO
  // =========================================================================
  const s7 = createBaseSlide("7. GOAL-BASED WEALTH ROADMAP — HISTORICAL YIELDS & COUPONS SCENARIO", `Inflation-Adjusted Target vs. Compounded Trajectory from Year 1 to ${t} (Historical 3Y Weighted Performance: ${histPortfolioReturn.toFixed(1)}% CAGR)`, 7);

  // Callout Banner
  s7.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.45, w: 12.13, h: 0.40,
    fill: { color: '132238' }, line: { color: CYAN, width: 1 }
  });
  s7.addText(`📈 HISTORICAL YIELDS & COUPONS SCENARIO: Wealth compounding strictly matching exact historical 3Y trailing performance and primary coupon yields (${histPortfolioReturn.toFixed(1)}% CAGR).`, {
    x: 0.8, y: 1.50, w: 11.73, h: 0.30,
    fontSize: 8.5, bold: true, color: CYAN, fontFace: 'Calibri'
  });

  // Left Box: Goal Target & Inflation Parameters
  s7.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.92, w: 5.95, h: 1.70,
    fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }
  });
  s7.addText("🎯 GOAL TARGET & INFLATION PARAMETERS", {
    x: 0.8, y: 2.00, w: 5.55, h: 0.24,
    fontSize: 9.5, bold: true, color: GOLD, fontFace: 'Calibri'
  });

  const goalParamsArrHist = [
    { text: "Primary Goal: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
    { text: `${formValues.primaryGoal.toUpperCase()} CREATION  |  `, options: { fontSize: 9, bold: true, color: WHITE } },
    { text: "Time Horizon: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
    { text: `${t} Years\n`, options: { fontSize: 9, bold: true, color: CYAN } },
    { text: "Today's Cost: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
    { text: `${formatINR(target)}  |  `, options: { fontSize: 9, bold: true, color: WHITE } },
    { text: "Assumed Inflation: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
    { text: "6.0% p.a.\n", options: { fontSize: 9, bold: true, color: GOLD_LIGHT } },
    { text: "Inflation-Adjusted Target Cost: ", options: { fontSize: 9, bold: true, color: GOLD } },
    { text: `${formatINR(inflatedTarget)} `, options: { fontSize: 11, bold: true, color: GOLD } },
    { text: `(+${((inflatedTarget/target - 1)*100).toFixed(0)}% due to inflation)`, options: { fontSize: 8, color: TEXT_MUTED } }
  ];

  s7.addText(goalParamsArrHist, {
    x: 0.8, y: 2.26, w: 5.55, h: 1.28,
    valign: 'top', margin: 0, fontFace: 'Calibri'
  });

  // Right Box: Historical Yield Accumulation & Gap Diagnostic
  s7.addShape(pptx.shapes.RECTANGLE, {
    x: 6.78, y: 1.92, w: 5.95, h: 1.70,
    fill: { color: CARD_BG_ALT }, line: { color: CARD_BORDER, width: 1 }
  });
  s7.addText("📊 HISTORICAL YIELD ACCUMULATION & GAP DIAGNOSTIC", {
    x: 6.98, y: 2.00, w: 5.55, h: 0.24,
    fontSize: 9.5, bold: true, color: GOLD, fontFace: 'Calibri'
  });

  const accumArrHist = [
    { text: "Total Invested Capital: ", options: { fontSize: 8.5, color: TEXT_MUTED } },
    { text: `${formatINR(totalInvested)} (Lumpsum: ${formatINR(initial)} + SIP)\n`, options: { fontSize: 9, bold: true, color: WHITE } },
    { text: `Historical Yield Projected Corpus (${histPortfolioReturn.toFixed(1)}% CAGR): `, options: { fontSize: 8.5, bold: true, color: EMERALD } },
    { text: `${formatINR(totalProjectedHist)}\n`, options: { fontSize: 11, bold: true, color: EMERALD } },
    { text: "Goal Status: ", options: { fontSize: 8.5, bold: true, color: shortfallHist <= 0 ? EMERALD : ROSE } },
    { text: shortfallHist <= 0 ? `SURPLUS OF +${formatINR(Math.abs(shortfallHist))} (Growth Trajectory)` : `SHORTFALL OF -${formatINR(shortfallHist)} (Add'l SIP ${formatINR(addSipRequiredHist)}/mo)`, options: { fontSize: 9, bold: true, color: shortfallHist <= 0 ? EMERALD : ROSE } }
  ];

  s7.addText(accumArrHist, {
    x: 6.98, y: 2.26, w: 5.55, h: 1.28,
    valign: 'top', margin: 0, fontFace: 'Calibri'
  });

  // Bottom Box: Timeline Chart (Historical)
  s7.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 3.70, w: 12.13, h: 3.10,
    fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }
  });
  s7.addText(`📈 TIMELINE WEALTH ACCUMULATION MILESTONES (HISTORICAL YIELDS COMPOUNDING TRAJECTORY: YEAR 1 TO YEAR ${t})`, {
    x: 0.8, y: 3.76, w: 11.7, h: 0.25,
    fontSize: 9.5, bold: true, color: CYAN, fontFace: 'Calibri'
  });

  const chartDataHist = [
    { name: "Cumulative Invested Capital", labels: yearsLabels, values: investedArr },
    { name: `Projected Wealth Corpus (@ ${histPortfolioReturn.toFixed(1)}% CAGR)`, labels: yearsLabels, values: fvArrHist }
  ];
  s7.addChart(chartType, chartDataHist, {
    x: 0.8, y: 4.05, w: 11.73, h: 2.65,
    barGrouping: 'clustered',
    chartColors: ['38BDF8', 'D4AF37'],
    showLegend: true, legendPos: 't', legendColor: 'FFFFFF', legendFontSize: 8.5,
    catAxisLabelColor: '94A3B8', catAxisLabelFontSize: 8,
    valAxisLabelColor: '94A3B8', valAxisLabelFontSize: 8,
    valGridLine: { color: '2A3F5F', size: 0.5 },
    catGridLine: { style: 'none' },
    plotArea: { fill: { color: '132238' } }
  });

  // =========================================================================
  // SLIDE 8: Wealth Acceleration — CONSERVATIVE BENCHMARK MODEL
  // =========================================================================
  const s8 = createBaseSlide("8. WEALTH ACCELERATION: STEP-UP SIP vs. FREEDOM SIP JOURNEY — CONSERVATIVE BENCHMARK MODEL", `Dynamic SIP Accelerators projected using standard conservative benchmark parameters (Equities: 12.0% p.a., Fixed Income: 7.5% p.a. | ${conservativeReturn.toFixed(1)}% CAGR)`, 8);

  // Callout Banner
  s8.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.45, w: 12.13, h: 0.45,
    fill: { color: '132238' }, line: { color: GOLD, width: 1 }
  });
  s8.addText(`🛡️ CONSERVATIVE BENCHMARK MODEL: Prudent baseline projection demonstrating the power of +10% Step-Up SIP and Freedom SIP under standard advisory return parameters (${conservativeReturn.toFixed(1)}% CAGR).`, {
    x: 0.8, y: 1.5, w: 11.73, h: 0.35,
    fontSize: 8.5, bold: true, color: GOLD_LIGHT, fontFace: 'Calibri'
  });

  const sipCardsS8 = [
    {
      title: "1. REGULAR MONTHLY SIP",
      tag: "Fixed Nominal Baseline",
      tagColor: '1e3a5f',
      lines: [
        { lbl: "Monthly SIP:", val: `${formatINR(monthly)}/mo`, color: WHITE },
        { lbl: "Total Capital Invested:", val: `${formatINR(totalInvested)}`, color: TEXT_MUTED },
        { lbl: `Expected Corpus (${t} Yrs):`, val: `${formatINR(totalProjectedCons)}`, color: GOLD },
        { lbl: "Compounding Dynamic:", val: "Fixed nominal contribution over entire tenure.", color: TEXT_MUTED }
      ],
      desc: "Standard disciplined investing in strict multiples of ₹500. Suitable for stable monthly salary budgets."
    },
    {
      title: "2. DAILY MICRO-SIP",
      tag: "Rupee Cost Averaging (RCA)",
      tagColor: '1e3a5f',
      lines: [
        { lbl: "Daily SIP Amount:", val: `${formatINR(daily)}/day`, color: GOLD_LIGHT },
        { lbl: "Monthly Equiv (22 Days):", val: `${formatINR(dailyMonthEquiv)}/mo`, color: TEXT_MUTED },
        { lbl: `Expected Corpus (${t} Yrs):`, val: `${formatINR(dailyTotalFvCons)}`, color: EMERALD },
        { lbl: "Compounding Dynamic:", val: "250+ annual buy-points averaging volatility.", color: TEXT_MUTED }
      ],
      desc: "Daily automated micro-investments in multiples of ₹100 across 22 working days. Absorbs intraday market volatility seamlessly."
    },
    {
      title: "3. STEP-UP SIP (+10%/YR)",
      tag: "CFP Growth Booster",
      tagColor: '065f46',
      lines: [
        { lbl: "Starting Monthly SIP:", val: `${formatINR(monthly)}/mo`, color: WHITE },
        { lbl: `Year ${t} Monthly SIP:`, val: `${formatINR(finalYearMonthlySip)}/mo`, color: CYAN },
        { lbl: `Accelerated Corpus (${t} Yrs):`, val: `${formatINR(stepUpFvCons)}`, color: EMERALD },
        { lbl: "Extra Wealth Generated:", val: `+${formatINR(extraWealthCreatedCons)} (+${extraWealthPctCons.toFixed(0)}%)`, color: GOLD }
      ],
      desc: "Boosts SIP by 10% annually with salary increments (₹500 multiples). Shortens goal timelines by 3–5 years."
    },
    {
      title: "4. FREEDOM SIP (RETIREMENT SWP)",
      tag: "Lifetime Financial Freedom",
      tagColor: '1e3a5f',
      lines: [
        { lbl: "Accumulation Phase:", val: `${t} Years Systematic`, color: WHITE },
        { lbl: "Target Maturity Corpus:", val: `${formatINR(baseCorpusForFreedomCons)}`, color: GOLD },
        { lbl: "Monthly Freedom SWP:", val: `${formatINR(monthlyFreedomPensionCons)}/mo`, color: EMERALD },
        { lbl: "Cashflow Multiple:", val: `${freedomMultiplierCons}x initial monthly SIP`, color: CYAN }
      ],
      desc: "At maturity, corpus transitions to stability assets to pay tax-efficient monthly income for life with 0% capital loss."
    }
  ];

  sipCardsS8.forEach((c, i) => {
    const xPos = 0.6 + i * 3.08;
    s8.addShape(pptx.shapes.RECTANGLE, {
      x: xPos, y: 2.0, w: 2.92, h: 4.75,
      fill: { color: i === 2 ? CARD_BG_ALT : CARD_BG },
      line: { color: i === 2 ? GOLD : CARD_BORDER, width: i === 2 ? 1.5 : 1 }
    });

    s8.addText(c.title, {
      x: xPos + 0.15, y: 2.12, w: 2.62, h: 0.28,
      fontSize: 9, bold: true, color: i === 2 ? GOLD : WHITE, fontFace: 'Calibri'
    });
    s8.addText(c.tag, {
      x: xPos + 0.15, y: 2.4, w: 2.62, h: 0.2,
      fontSize: 7.5, bold: true, color: CYAN, fontFace: 'Calibri'
    });

    const linesArr = [];
    c.lines.forEach(l => {
      linesArr.push({ text: `${l.lbl}\n`, options: { fontSize: 8, color: TEXT_MUTED } });
      linesArr.push({ text: `${l.val}\n\n`, options: { fontSize: 9.5, bold: true, color: l.color } });
    });

    linesArr.push({ text: c.desc, options: { fontSize: 8, color: TEXT_MUTED } });

    s8.addText(linesArr, {
      x: xPos + 0.15, y: 2.65, w: 2.62, h: 4.0,
      valign: 'top', margin: 0, fontFace: 'Calibri'
    });
  });

  // =========================================================================
  // SLIDE 9: Wealth Acceleration — HISTORICAL YIELDS SCENARIO
  // =========================================================================
  const s9 = createBaseSlide("9. WEALTH ACCELERATION: STEP-UP SIP vs. FREEDOM SIP JOURNEY — HISTORICAL YIELDS SCENARIO", `Dynamic SIP Accelerators projected strictly matching exact historical 3Y trailing performance and primary coupon yields (${histPortfolioReturn.toFixed(1)}% CAGR)`, 9);

  // Callout Banner
  s9.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 1.45, w: 12.13, h: 0.45,
    fill: { color: '132238' }, line: { color: CYAN, width: 1 }
  });
  s9.addText(`📈 HISTORICAL YIELDS & COUPONS SCENARIO: Demonstrates terminal wealth acceleration and higher lifetime SWP retirement pensions when schemes compound at historical 3Y CAGRs and primary coupons (${histPortfolioReturn.toFixed(1)}% CAGR).`, {
    x: 0.8, y: 1.5, w: 11.73, h: 0.35,
    fontSize: 8.5, bold: true, color: CYAN, fontFace: 'Calibri'
  });

  const sipCardsS9 = [
    {
      title: "1. REGULAR MONTHLY SIP",
      tag: "Fixed Nominal Baseline",
      tagColor: '1e3a5f',
      lines: [
        { lbl: "Monthly SIP:", val: `${formatINR(monthly)}/mo`, color: WHITE },
        { lbl: "Total Capital Invested:", val: `${formatINR(totalInvested)}`, color: TEXT_MUTED },
        { lbl: `Expected Corpus (${t} Yrs):`, val: `${formatINR(totalProjectedHist)}`, color: GOLD },
        { lbl: "Compounding Dynamic:", val: "Fixed nominal contribution over entire tenure.", color: TEXT_MUTED }
      ],
      desc: "Standard disciplined investing in strict multiples of ₹500. Compounding strictly at weighted historical 3Y CAGR."
    },
    {
      title: "2. DAILY MICRO-SIP",
      tag: "Rupee Cost Averaging (RCA)",
      tagColor: '1e3a5f',
      lines: [
        { lbl: "Daily SIP Amount:", val: `${formatINR(daily)}/day`, color: GOLD_LIGHT },
        { lbl: "Monthly Equiv (22 Days):", val: `${formatINR(dailyMonthEquiv)}/mo`, color: TEXT_MUTED },
        { lbl: `Expected Corpus (${t} Yrs):`, val: `${formatINR(dailyTotalFvHist)}`, color: EMERALD },
        { lbl: "Compounding Dynamic:", val: "250+ annual buy-points averaging volatility.", color: TEXT_MUTED }
      ],
      desc: "Daily automated micro-investments in multiples of ₹100 across 22 working days. High-frequency Rupee Cost Averaging."
    },
    {
      title: "3. STEP-UP SIP (+10%/YR)",
      tag: "CFP Growth Booster",
      tagColor: '065f46',
      lines: [
        { lbl: "Starting Monthly SIP:", val: `${formatINR(monthly)}/mo`, color: WHITE },
        { lbl: `Year ${t} Monthly SIP:`, val: `${formatINR(finalYearMonthlySip)}/mo`, color: CYAN },
        { lbl: `Accelerated Corpus (${t} Yrs):`, val: `${formatINR(stepUpFvHist)}`, color: EMERALD },
        { lbl: "Extra Wealth Generated:", val: `+${formatINR(extraWealthCreatedHist)} (+${extraWealthPctHist.toFixed(0)}%)`, color: GOLD }
      ],
      desc: "Boosts SIP by 10% annually with salary increments (₹500 multiples). Massive compounding over historical bull cycles."
    },
    {
      title: "4. FREEDOM SIP (RETIREMENT SWP)",
      tag: "Lifetime Financial Freedom",
      tagColor: '1e3a5f',
      lines: [
        { lbl: "Accumulation Phase:", val: `${t} Years Systematic`, color: WHITE },
        { lbl: "Target Maturity Corpus:", val: `${formatINR(baseCorpusForFreedomHist)}`, color: GOLD },
        { lbl: "Monthly Freedom SWP:", val: `${formatINR(monthlyFreedomPensionHist)}/mo`, color: EMERALD },
        { lbl: "Cashflow Multiple:", val: `${freedomMultiplierHist}x initial monthly SIP`, color: CYAN }
      ],
      desc: "At maturity, historical accumulated corpus switches to stability assets for superior inflation-protected SWP income."
    }
  ];

  sipCardsS9.forEach((c, i) => {
    const xPos = 0.6 + i * 3.08;
    s9.addShape(pptx.shapes.RECTANGLE, {
      x: xPos, y: 2.0, w: 2.92, h: 4.75,
      fill: { color: i === 2 ? CARD_BG_ALT : CARD_BG },
      line: { color: i === 2 ? GOLD : CARD_BORDER, width: i === 2 ? 1.5 : 1 }
    });

    s9.addText(c.title, {
      x: xPos + 0.15, y: 2.12, w: 2.62, h: 0.28,
      fontSize: 9, bold: true, color: i === 2 ? GOLD : WHITE, fontFace: 'Calibri'
    });
    s9.addText(c.tag, {
      x: xPos + 0.15, y: 2.4, w: 2.62, h: 0.2,
      fontSize: 7.5, bold: true, color: CYAN, fontFace: 'Calibri'
    });

    const linesArr = [];
    c.lines.forEach(l => {
      linesArr.push({ text: `${l.lbl}\n`, options: { fontSize: 8, color: TEXT_MUTED } });
      linesArr.push({ text: `${l.val}\n\n`, options: { fontSize: 9.5, bold: true, color: l.color } });
    });

    linesArr.push({ text: c.desc, options: { fontSize: 8, color: TEXT_MUTED } });

    s9.addText(linesArr, {
      x: xPos + 0.15, y: 2.65, w: 2.62, h: 4.0,
      valign: 'top', margin: 0, fontFace: 'Calibri'
    });
  });

  // =========================================================================
  // SLIDE 10: Protection & Contingency Diagnostics
  // =========================================================================
  const s10 = createBaseSlide("10. PROTECTION & CONTINGENCY DIAGNOSTICS", "Shielding Wealth from Catastrophic Shocks: Emergency Reserves, Health, Life & Estate", 10);

  const protBoxesS10 = [
    {
      title: "🛡️ PILLAR 1: EMERGENCY BUFFER DEFENSE",
      status: emPercent >= 100 ? "STATUS: BUFFER SECURED (✅ 100% Adequate)" : "STATUS: CRITICAL DEFICIT (🚨 Action Required)",
      statusColor: emPercent >= 100 ? EMERALD : ROSE,
      benchmark: `CFP Benchmark: 6–12 months expenses (${formatINR(emergencyTarget)})`,
      current: `Current Liquid Reserve: ${formatINR(formValues.emergencyFund)}`,
      action: "Advisory Protocol: Maintain liquid buffer in ABSL Liquid Fund or bank sweep accounts. Never invest emergency capital into equity or high-volatility products."
    },
    {
      title: "👨‍👩‍👧 PILLAR 2: LIFE INSURANCE & INCOME REPLACEMENT",
      status: formValues.termInsurance >= termTarget ? "STATUS: FULLY INSURED (✅ 10x–12x Income Covered)" : "STATUS: COVERAGE GAP (⚠️ Urgent Term Cover Needed)",
      statusColor: formValues.termInsurance >= termTarget ? EMERALD : ROSE,
      benchmark: `CFP Benchmark: 10x–12x gross annual income (${formatINR(termTarget)})`,
      current: `Current Term Life Cover: ${formatINR(formValues.termInsurance)}`,
      action: "Advisory Protocol: Secure pure online term insurance covering your earning horizon up to age 65–70. Surrender high-cost traditional endowment/ULIP policies."
    },
    {
      title: "🏥 PILLAR 3: HEALTH & MEDICAL SHIELD",
      status: formValues.healthInsurance >= 500000 ? "STATUS: BASE HEALTH COVER ACTIVE (✅ Protected)" : "STATUS: SHORTFALL DETECTED (🚨 High Vulnerability)",
      statusColor: formValues.healthInsurance >= 500000 ? EMERALD : ROSE,
      benchmark: "CFP Benchmark: ₹5–₹10 Lakhs Base Floater + ₹25 Lakhs Super Top-Up",
      current: `Current Health Policy: ${formatINR(formValues.healthInsurance)}`,
      action: "Advisory Protocol: Never rely solely on corporate employer insurance. Maintain an independent family floater with comprehensive restoration and no room-rent capping."
    },
    {
      title: "📜 PILLAR 4: ESTATE & NOMINEE GOVERNANCE",
      status: "STATUS: COMPLIANCE AUDIT RECOMMENDED (📋 Periodic Review)",
      statusColor: CYAN,
      benchmark: "CFP Benchmark: 100% folios registered with primary and secondary nominees",
      current: "Audit Scope: Mutual fund folios, bank accounts, demat accounts & property deeds",
      action: "Advisory Protocol: Ensure all folio nominations are actively updated. Create a registered Will if holding real estate or private business assets. Maintain an encrypted emergency vault."
    }
  ];

  protBoxesS10.forEach((b, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const xPos = col === 0 ? 0.6 : 6.75;
    const yPos = row === 0 ? 1.5 : 4.2;

    s10.addShape(pptx.shapes.RECTANGLE, {
      x: xPos, y: yPos, w: 5.98, h: 2.55,
      fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }
    });

    s10.addText(b.title, {
      x: xPos + 0.2, y: yPos + 0.15, w: 5.58, h: 0.28,
      fontSize: 9.5, bold: true, color: GOLD, fontFace: 'Calibri'
    });
    s10.addText(b.status, {
      x: xPos + 0.2, y: yPos + 0.42, w: 5.58, h: 0.22,
      fontSize: 8.5, bold: true, color: b.statusColor, fontFace: 'Calibri'
    });

    const bodyArr = [
      { text: `${b.benchmark}\n`, options: { fontSize: 8.5, color: TEXT_MUTED } },
      { text: `${b.current}\n\n`, options: { fontSize: 9, bold: true, color: WHITE } },
      { text: b.action, options: { fontSize: 8.5, color: TEXT_MUTED } }
    ];

    s10.addText(bodyArr, {
      x: xPos + 0.2, y: yPos + 0.68, w: 5.58, h: 1.75,
      valign: 'top', margin: 0, fontFace: 'Calibri'
    });
  });

  // =========================================================================
  // SLIDE 11: Actionable Execution Plan
  // =========================================================================
  const s11 = createBaseSlide("11. ACTIONABLE EXECUTION PLAN", "Phased Deployment Roadmap, Systematic Execution & Ongoing Portfolio Governance", 11);

  const planPhasesS11 = [
    {
      phase: "PHASE 1: IMMEDIATE SETUP",
      timeline: "Days 1 to 30",
      color: CYAN,
      items: [
        { head: "1. C-KYC & Auto-Debit Registration:", desc: "Complete central digital KYC verification and activate online bank e-Mandates/NACH for seamless automated SIP deductions." },
        { head: "2. Lock Emergency Buffer Reserve:", desc: `Deploy ${formatINR(emergencyTarget)} into ABSL Liquid Fund before initiating long-term equity allocations.` },
        { head: "3. Activate Core & Satellite SIPs:", desc: `Initiate recommended Monthly SIP (${formatINR(monthly)}) with an Automated Annual +10% Step-Up Mandate.` },
        { head: "4. Setup Daily Micro-SIP Schedule:", desc: `Configure daily auto-investing of ${formatINR(daily)}/day in multiples of ₹100 for high-frequency Rupee Cost Averaging.` }
      ]
    },
    {
      phase: "PHASE 2: DEPLOYMENT & OPTIMIZATION",
      timeline: "Days 31 to 90",
      color: GOLD,
      items: [
        { head: "1. Systematic Lump Sum STP Deployment:", desc: `Deploy available lumpsum (${formatINR(formValues.lumpsum)}) via 6–12 month Systematic Transfer Plans to average entry valuations.` },
        { head: "2. High-Yield Fixed Income Lock-In:", desc: "Allocate stability assets into AAA Corporate FDs (Bajaj/Shriram 7.75%-8.0%) and Senior Secured NCDs (AA+ 8.7%-10.3% YTM) for regular cashflow." },
        { head: "3. Freedom SIP Maturity Triggers:", desc: `Register target maturity date (${t} Years) to automatically switch corpus into systematic monthly SWP payouts.` },
        { head: "4. Eliminate High-Cost Legacy Funds:", desc: "Audit and prune legacy underperforming mutual funds with high expense ratios or duplicate portfolio overlaps." }
      ]
    },
    {
      phase: "PHASE 3: GOVERNANCE & MAINTENANCE",
      timeline: "Annual Checkpoints",
      color: EMERALD,
      items: [
        { head: "1. 5% Rebalance Band Trigger:", desc: "Review portfolio annually; rebalance asset weights if Core Equity, Satellite, or Stability drift by >5% from target allocation." },
        { head: "2. Step-Up SIP Verification:", desc: "Verify that the +10% annual escalation executes smoothly aligned with your annual appraisal/salary increment cycle." },
        { head: "3. Annual LTCG Tax Harvesting:", desc: "Harvest Long-Term Capital Gains annually up to the statutory IT exemption limit to boost compounding efficiency." },
        { head: "4. Annual Comprehensive CFP Audit:", desc: "Schedule annual review with Arthika Advisors to adjust for life milestones, career shifts, and goal revisions." }
      ]
    }
  ];

  planPhasesS11.forEach((p, i) => {
    const xPos = 0.6 + i * 4.1;
    s11.addShape(pptx.shapes.RECTANGLE, {
      x: xPos, y: 1.5, w: 3.93, h: 5.25,
      fill: { color: CARD_BG }, line: { color: CARD_BORDER, width: 1 }
    });

    s11.addText(p.phase, {
      x: xPos + 0.2, y: 1.65, w: 3.53, h: 0.25,
      fontSize: 10, bold: true, color: p.color, fontFace: 'Calibri'
    });
    s11.addText(p.timeline, {
      x: xPos + 0.2, y: 1.9, w: 3.53, h: 0.2,
      fontSize: 8, bold: true, color: TEXT_MUTED, fontFace: 'Calibri'
    });

    const itemsArr = [];
    p.items.forEach(it => {
      itemsArr.push({ text: `${it.head}\n`, options: { fontSize: 8.5, bold: true, color: WHITE } });
      itemsArr.push({ text: `${it.desc}\n\n`, options: { fontSize: 8, color: TEXT_MUTED } });
    });

    s11.addText(itemsArr, {
      x: xPos + 0.2, y: 2.2, w: 3.53, h: 4.4,
      valign: 'top', margin: 0, fontFace: 'Calibri'
    });
  });

  // Export and Save Single Deck
  const sanitizedClient = clientName.replace(/[^a-zA-Z0-9]/g, '_');
  const fileName = `Arthika_Wealth_Plan_${sanitizedClient}_Comprehensive_Plan.pptx`;
  pptx.writeFile({ fileName: fileName });
  } catch (err) {
    console.error("Presentation generation error:", err);
    alert("An error occurred while generating the PowerPoint presentation: " + err.message);
  }
}

window.exportToPowerPoint = exportToPowerPoint;

// Start
window.addEventListener('DOMContentLoaded', init);



