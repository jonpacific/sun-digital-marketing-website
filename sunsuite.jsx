// ===== SunSuite platform showcase (dark) =====

function Sparkline({ points, color = "#FF8A3D", w = 220, h = 56, fill = true }) {
  const max = Math.max(...points), min = Math.min(...points);
  const nx = (i) => (i / (points.length - 1)) * w;
  const ny = (v) => h - ((v - min) / (max - min || 1)) * (h - 8) - 4;
  const d = points.map((v, i) => `${i ? "L" : "M"}${nx(i).toFixed(1)} ${ny(v).toFixed(1)}`).join(" ");
  const area = `${d} L${w} ${h} L0 ${h} Z`;
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={"sp" + color.replace("#","")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.28"/>
          <stop offset="1" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      {fill && <path d={area} fill={"url(#sp" + color.replace("#","") + ")"} />}
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AIBar({ label, pct, color }) {
  return (
    <div className="aibar">
      <div className="aibar-top"><span>{label}</span><b>{pct}%</b></div>
      <div className="aibar-track"><div className="aibar-fill" style={{ width: pct + "%", background: color }}></div></div>
    </div>
  );
}

function Dashboard() {
  const nav = [
    ["Overview", true], ["Rankings", false], ["AI Visibility", false],
    ["Paid Media", false], ["Social", false], ["Reviews", false], ["Reports", false],
  ];
  return (
    <div className="dash">
      <aside className="dash-rail">
        <div className="dash-brand"><SunGlyph size={26}/> <span>SunSuite</span></div>
        <nav>
          {nav.map(([l, on]) => <a key={l} className={on ? "on" : ""}>{l}</a>)}
        </nav>
        <div className="dash-sol">
          <span className="hc-dot"></span> Sol is awake
        </div>
      </aside>
      <div className="dash-main">
        <div className="dash-top">
          <div className="dash-client">
            <span className="dash-ava">LP</span>
            <div><b>Lowcountry Plumbing Co.</b><small>Savannah, GA · updated 5:58 AM</small></div>
          </div>
          <div className="dash-date">Tue, Jun 8</div>
        </div>

        <div className="dash-grid">
          <div className="dcard dcard-wide">
            <div className="dcard-h"><span>AI Search Visibility</span><small>share of answers</small></div>
            <div className="aibars">
              <AIBar label="ChatGPT" pct={72} color="#FF8A3D"/>
              <AIBar label="Claude" pct={64} color="#FF6F45"/>
              <AIBar label="Gemini" pct={48} color="#FFB14B"/>
              <AIBar label="Perplexity" pct={55} color="#FFC24B"/>
            </div>
          </div>
          <div className="dcard">
            <div className="dcard-h"><span>Organic rankings</span><small className="up">▲ 6</small></div>
            <div className="dcard-big">Top&nbsp;3 <em>· 41 kw</em></div>
            <Sparkline points={[28,30,29,33,34,32,37,39,38,41]} />
          </div>
          <div className="dcard">
            <div className="dcard-h"><span>Ad spend · ROAS</span><small className="up">4.8×</small></div>
            <div className="dcard-big">$12,480 <em>· MTD</em></div>
            <Sparkline points={[3.1,3.4,3.2,3.9,4.0,4.3,4.1,4.6,4.5,4.8]} color="#FFC24B"/>
          </div>
          <div className="dcard dcard-wide dcard-sol">
            <div className="dcard-h"><span><span className="hc-dot"></span> Sol · this morning</span><small>3 flagged</small></div>
            <div className="hc-row"><span className="pip pip-red"></span>Rank slip on "emergency plumber savannah": draft fix ready</div>
            <div className="hc-row"><span className="pip pip-amber"></span>Meta CPA up 18%: paused worst ad, awaiting your OK</div>
            <div className="hc-row"><span className="pip pip-green"></span>2 review requests sent after yesterday's 5★</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TOOL_GROUPS = [
  ["Rankings & Audit", 7, [
    "SunRank · daily keyword position tracking",
    "SunVerify · citation accuracy audit",
    "SunScan · live citation checker",
    "SunLocal · Google Business Profile performance",
    "SunMap · sitemap health & coverage audit",
    "SunTag · Google Tag Manager audit",
    "SunRival · competitor ranking watch",
  ]],
  ["AI & Intelligence", 6, [
    "SunSignal · AI search visibility tracker",
    "SunEcho · AI mention monitoring across ChatGPT, Claude, Gemini & Perplexity",
    "SunGround · local market context research",
    "SunSeed · brand knowledge initialization",
    "SunFeed · ongoing knowledge ingestion",
    "SunLoop · optimization loop engine",
  ]],
  ["Paid Media", 3, [
    "SunBid · Google Ads management",
    "SunReach · Meta & Instagram ads",
    "SunEdge · Microsoft & Bing ads",
  ]],
  ["Social & Content", 6, [
    "SunCast · multi-platform social publishing",
    "SunReel · video content pipeline",
    "SunForge · campaign planning",
    "SunCal · campaign calendar",
    "SunTruth · offering catalog & content validation",
    "SunList · email list & broadcast",
  ]],
  ["Email & CRM", 7, [
    "SunSort · Gmail triage & prioritization",
    "SunDraft · AI-assisted email drafting",
    "SunSweep · email lifecycle automation",
    "SunThread · contact thread archiving",
    "SunContact · contact context editing",
    "SunOpen · new contact creation",
    "SunClose · client exit interview trigger",
  ]],
  ["Client Management", 3, [
    "SunOnboard · new client setup",
    "SunRoster · client account directory",
    "SunRepute · review request automation",
  ]],
  ["Reporting", 4, [
    "SunPulse · weekly performance report",
    "SunLedger · monthly analytics report",
    "SunDepth · GA4 historical analysis",
    "SunTide · market trend analysis",
  ]],
];

function SunSuite() {
  return (
    <section id="sunsuite" className="dark sec-pad sunsuite">
      <div className="sun-haze" aria-hidden="true"></div>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow" style={{ color: "var(--night-muted)" }}>The Platform</span>
          <h2 className="sec-title">SunSuite is the nervous system<br/>behind every account we run.</h2>
          <p className="sec-lead">
            Thirty-eight tools we wrote ourselves, not a rebadged stack of someone else's software.
            They watch rankings, paid media, AI search, social, reviews and reporting in one place,
            so nothing slips through the cracks between logins.
          </p>
        </div>

        <div className="reveal"><Dashboard/></div>

        <div className="tool-head reveal">
          <h3>38 tools, working as one</h3>
          <span className="tool-count"><b>38</b> proprietary tools</span>
        </div>
        <div className="tool-grid">
          {TOOL_GROUPS.map(([name, n, tools]) => (
            <div className="tool-card reveal" key={name}>
              <div className="tool-card-h"><h4>{name}</h4><span>{n}</span></div>
              <ul>{tools.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.SunSuite = SunSuite; window.Sparkline = Sparkline;
