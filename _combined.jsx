// ===== Nav, Hero, Proof strip =====
const { useState, useEffect } = React;

function Logo({ h = 26 }) {
  return <img src="assets/logo.png" alt="Sun Digital Marketing" style={{ height: h, width: "auto" }} />;
}

function Arrow() {
  return (
    <svg className="arr" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [["SunSuite", "#sunsuite"], ["Sol", "#sol"], ["Services", "#services"], ["Results", "#results"]];
  return (
    <header className={"nav" + (scrolled ? " nav-on" : "")} role="banner">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-logo" aria-label="Sun Digital Marketing — home"><Logo h={42} /></a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
        </nav>
        <div className="nav-cta">
          <a href="tel:+13032188570" className="nav-phone" aria-label="Call Sun Digital Marketing at (303) 218-8570">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5.5 2.5 7 5 5.5 6.5a8 8 0 0 0 4 4L11 9l2.5 1.5v2a1.5 1.5 0 0 1-1.7 1.5C6.6 13.4 2.6 9.4 2 4.2A1.5 1.5 0 0 1 3.5 2.5h2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
            (303) 218-8570
          </a>
          <button className="btn btn-sun nav-book" onClick={() => window.openSol && window.openSol()}>Book a call</button>
        </div>
        <button className="nav-burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="nav-mobile-menu" onClick={() => setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>
      {open && (
        <div id="nav-mobile-menu" className="nav-mobile" role="navigation" aria-label="Mobile navigation">
          {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="tel:+13032188570">(303) 218-8570</a>
          <button className="btn btn-sun" onClick={() => { setOpen(false); window.openSol && window.openSol(); }}>Book a call</button>
        </div>
      )}
    </header>
  );
}

// orbiting sun dots, scaled small for accents
function SunGlyph({ size = 120 }) {
  const dots = [];
  // a spiral-ish arc of dots, echoing the logo mark
  const rings = [
    { r: 7, items: [[0.45, 1.0]] },
    { r: 16, n: 5, a0: 200, a1: 320, s: [3,3.6,4,3.6,3] },
    { r: 27, n: 6, a0: 190, a1: 340, s: [2,2.6,3.2,3.2,2.6,2] },
    { r: 38, n: 6, a0: 200, a1: 330, s: [1.6,2,2.6,2.6,2,1.6] },
  ];
  let k = 0;
  rings.forEach((ring) => {
    if (ring.items) {
      ring.items.forEach(() => dots.push(<circle key={k++} cx={size/2 - 6} cy={size/2} r={ring.r} fill="url(#sg)"/>));
      return;
    }
    for (let i = 0; i < ring.n; i++) {
      const t = ring.n === 1 ? 0 : i / (ring.n - 1);
      const ang = (ring.a0 + (ring.a1 - ring.a0) * t) * Math.PI / 180;
      const cx = size/2 + Math.cos(ang) * ring.r;
      const cy = size/2 + Math.sin(ang) * ring.r;
      dots.push(<circle key={k++} cx={cx} cy={cy} r={ring.s[i]} fill="url(#sg)"/>);
    }
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF5247"/><stop offset="0.5" stopColor="#FF8A3D"/><stop offset="1" stopColor="#FFC24B"/>
        </linearGradient>
      </defs>
      {dots}
    </svg>
  );
}

function Hero() {
  return (
    <section id="main-content" className="hero hero-bleed">
      <div className="hero-bg" aria-hidden="true">
        <img src="assets/hero-team.jpg" alt=""/>
        <div className="hero-scrim"></div>
      </div>
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="eyebrow reveal">Digital Marketing · Savannah • NJ · Since 2009</span>
          <h1 className="hero-h1 reveal">
            Building <span className="grad-text">proprietary AI</span>
            <br/>digital marketing tools
            customized for our clients.
          </h1>
          <p className="hero-sub reveal">
            Sun Digital is the outsourced marketing department for small businesses that have
            outgrown doing it themselves. It runs on <strong>SunSuite</strong>, our 38-tool platform,
            and is orchestrated by <strong>Sol</strong>, an AI layer that works the overnight shift so
            your morning starts with answers, not surprises.
          </p>
          <div className="hero-actions reveal">
            <button className="btn btn-sun" onClick={() => window.openSol && window.openSol()}>
              Book a strategy call <Arrow/>
            </button>
            <a href="#sunsuite" className="btn btn-ghost">See SunSuite</a>
          </div>
          <div className="hero-meta reveal">
            <div><b>70%+</b><span>of clients stay 5+ years</span></div>
            <div className="vr"></div>
            <div><b>27 yrs</b><span>marketing small business</span></div>
            <div className="vr"></div>
            <div><b>38 tools</b><span>built in-house</span></div>
          </div>
        </div>
      </div>

      <div className="hero-card reveal">
        <div className="hc-top">
          <span className="hc-dot"></span> Sol · overnight sweep
        </div>
        <div className="hc-body">
          <b>3 items</b> flagged before 6:00 AM
        </div>
        <div className="hc-row"><span className="pip pip-red"></span>Google rank slip: "emergency plumber savannah"</div>
        <div className="hc-row"><span className="pip pip-amber"></span>Meta CPA up 18% on Retargeting set</div>
        <div className="hc-row"><span className="pip pip-green"></span>New 5★ review: auto-requested 2 more</div>
      </div>
    </section>
  );
}

window.Logo = Logo; window.Arrow = Arrow; window.SunGlyph = SunGlyph;
window.Nav = Nav; window.Hero = Hero;

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
  ["Rank Intelligence", 6, ["Daily rank tracker", "Local pack monitor", "Competitor watch", "Keyword-gap finder", "SERP-feature tracker", "Algorithm-shift alerts"]],
  ["AI Search Visibility", 5, ["ChatGPT citation monitor", "Claude visibility", "Gemini tracker", "Perplexity mentions", "Answer-share index"]],
  ["Paid Media", 7, ["Google Ads", "Meta & Instagram", "YouTube", "Microsoft Bing", "Pinterest", "Budget pacing", "Spend-anomaly alerts"]],
  ["Web & Conversion", 5, ["WordPress monitor", "Shopify monitor", "Core Web Vitals", "Form & CTA tracking", "Uptime + speed watch"]],
  ["Social & Content", 4, ["Multi-platform publisher", "Content calendar", "Post performance", "Auto-repurpose"]],
  ["Reputation", 3, ["Review-request automation", "Review monitor", "Sentiment digest"]],
  ["Reporting & Sol", 4, ["Automated reports", "Sol morning briefing", "Goal tracker", "Client portal"]],
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

// ===== Sol - AI morning briefing (animated) =====

const SOL_SCRIPT = [
  { t: "line", who: "sol", text: "Good morning. I ran the overnight sweep across all 14 of your channels at 5:42 AM." },
  { t: "line", who: "sol", text: "Three things want your attention. Everything else is on track." },
  { t: "item", sev: "red", title: "Rankings", body: "\"emergency plumber savannah\" fell from #2 to #6 overnight; a competitor refreshed their page. I drafted updated copy; one tap to approve." },
  { t: "item", sev: "amber", title: "Paid Media", body: "Meta retargeting CPA is up 18% this week. I paused the worst-performing ad and shifted $40/day to the set converting at 4.8× ROAS." },
  { t: "item", sev: "green", title: "Reputation", body: "You earned a 5★ review yesterday. I automatically requested two more from recent happy customers." },
  { t: "line", who: "sol", text: "That's it. I'll keep watching and ping the team if anything moves. Talk soon, Sol." },
];

function Sol() {
  const [shown, setShown] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const ref = React.useRef(null);
  const timers = React.useRef([]);

  const play = React.useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setShown(0); setPlaying(true);
    let delay = 350;
    SOL_SCRIPT.forEach((_, i) => {
      const d = SOL_SCRIPT[i].t === "item" ? 1050 : 850;
      delay += d;
      timers.current.push(setTimeout(() => {
        setShown(i + 1);
        if (i === SOL_SCRIPT.length - 1) setPlaying(false);
      }, delay));
    });
  }, []);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const tryPlay = () => {
      if (done) return false;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.7 && r.bottom > 60) { done = true; play(); return true; }
      return false;
    };
    const poll = setInterval(() => { if (tryPlay()) clearInterval(poll); }, 350);
    window.addEventListener("scroll", tryPlay, { passive: true });
    return () => { clearInterval(poll); window.removeEventListener("scroll", tryPlay); timers.current.forEach(clearTimeout); };
  }, [play]);

  const caps = [
    ["Watches", "Rankings, ad spend, AI-search mentions, reviews and site health, every night, every account."],
    ["Decides", "Triages what actually matters and drafts the fix, so a slip becomes a one-tap approval, not a fire drill."],
    ["Reports", "Lands a plain-English briefing in your inbox by 6 AM, with no dashboards to dig through."],
  ];

  return (
    <section id="sol" className="dark sec-pad sol-sec">
      <div className="wrap sol-grid">
        <div className="sol-copy reveal">
          <span className="eyebrow" style={{ color: "var(--night-muted)" }}>Meet Sol</span>
          <h2 className="sec-title">Sol works the<br/>overnight shift.</h2>
          <p className="sec-lead" style={{ marginLeft: 0 }}>
            Sol is the AI layer that orchestrates all 38 SunSuite tools. While you're closed,
            it sweeps every account, separates noise from signal, and has the answer ready
            before you've had coffee.
          </p>
          <div className="sol-caps">
            {caps.map(([h, b]) => (
              <div className="sol-cap" key={h}>
                <span className="sol-cap-dot"></span>
                <div><b>{h}.</b> {b}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sol-demo reveal" ref={ref}>
          <div className="sol-win">
            <div className="sol-win-top">
              <span className="sol-orb"></span>
              <div className="sol-win-title">Sol · Morning Briefing</div>
              <div className="sol-time">5:58 AM</div>
            </div>
            <div className="sol-stream">
              {SOL_SCRIPT.slice(0, shown).map((s, i) =>
                s.t === "line" ? (
                  <div className="sol-msg" key={i}>{s.text}</div>
                ) : (
                  <div className={"sol-item sol-" + s.sev} key={i}>
                    <div className="sol-item-h"><span className={"pip pip-" + s.sev}></span>{s.title}</div>
                    <p>{s.body}</p>
                    {s.sev !== "green" && (
                      <div className="sol-item-act" aria-hidden="true">
                        <button className="sol-approve" tabIndex="-1">Approve fix</button>
                        <button className="sol-view" tabIndex="-1">View</button>
                      </div>
                    )}
                  </div>
                )
              )}
              {playing && <div className="sol-typing"><span></span><span></span><span></span></div>}
            </div>
            <div className="sol-foot">
              <button className="sol-replay" onClick={play}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8a5 5 0 1 1-1.5-3.5M13 2v3h-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Replay briefing
              </button>
              <span className="sol-foot-note">Live demo · real briefings are tailored to your business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Sol = Sol;

// ===== Services · Results · Founders · CTA · Footer =====

function SvcIcon({ name }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    ppc: <g {...p}><path d="M3 14V8M9 14V4M15 14V10M21 14V6"/><path d="M3 18h18"/></g>,
    seo: <g {...p}><circle cx="10" cy="10" r="6"/><path d="M14.5 14.5 20 20"/><path d="M7.5 10.5 9.5 12.5 13 8.5"/></g>,
    web: <g {...p}><rect x="3" y="4" width="18" height="15" rx="2"/><path d="M3 8h18M7 6h.01M10 6h.01"/></g>,
    email: <g {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></g>,
  };
  return <svg width="26" height="26" viewBox="0 0 24 24">{icons[name]}</svg>;
}

const SERVICES = [
  ["ppc", "PPC Advertising", "Campaigns that pay for themselves, managed daily, not set-and-forget.", ["Google", "Meta", "Instagram", "YouTube", "Bing", "Pinterest"]],
  ["seo", "Local SEO & AI Search", "Rank in Google's map pack and get cited by the AI engines people now ask first.", ["Local SEO", "ChatGPT", "Claude", "Gemini", "Perplexity"]],
  ["web", "Web Design", "Fast, conversion-built sites we keep healthy long after launch.", ["WordPress", "Shopify", "Core Web Vitals", "CRO"]],
  ["email", "Email Marketing", "Flows and campaigns that turn one-time buyers into regulars.", ["Klaviyo", "Constant Contact", "Automations"]],
];

function Services() {
  return (
    <section id="services" className="sec-pad services">
      <div className="wrap">
        <div className="sec-head light reveal">
          <span className="eyebrow">What We Run</span>
          <h2 className="sec-title dark-title">Your whole marketing<br/>department, outsourced.</h2>
          <p className="sec-lead dark-lead">
            Big enough to need serious marketing, too small to staff it in-house? That's exactly
            who we're built for. You get a full team and a platform for less than one hire.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map(([icon, title, desc, tags]) => (
            <div className="svc-card reveal" key={title}>
              <div className="svc-icon"><SvcIcon name={icon}/></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="svc-tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    ["70%+", "of clients have stayed with us 5+ years"],
    ["2009", "the year we started, long before AI was a buzzword"],
    ["38", "tools we built ourselves, used on every account"],
    ["1", "AI layer, Sol, watching while you sleep"],
  ];
  return (
    <section id="results" className="sec-pad results">
      <div className="wrap">
        <div className="results-stats">
          {stats.map(([n, l], i) => (
            <div className="stat reveal" key={i}>
              <div className="stat-n grad-text">{n}</div>
              <div className="stat-l">{l}</div>
            </div>
          ))}
        </div>

        <div className="quote-wrap reveal">
          <div className="quote-mark grad-text">"</div>
          <blockquote>
            Jon and Trevor are incredibly professional, responsive, and knowledgeable. They take the time to explain strategy, answer questions, and make sure everything is running smoothly. It's clear they genuinely care about their clients' success.
          </blockquote>
          <div className="quote-by">
            <div className="quote-ava" aria-hidden="true">MA</div>
            <div>
              <b>Marc Alhanaty</b>
              <small>Google Review ★★★★★</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section id="about" className="sec-pad founders">
      <div className="wrap founders-grid">
        <div className="founders-photos reveal">
          {[["Jon Pacific","Co-founder","assets/jon-pacific.jpg"],["Trevor Clendenin","Co-founder","assets/trevor-clendenin.jpg"]].map(([n, r, src]) => (
            <div className="founder" key={n}>
              <div className="founder-img"><img src={src} alt={n}/></div>
              <b>{n}</b><small>{r}</small>
            </div>
          ))}
        </div>
        <div className="founders-copy reveal">
          <span className="eyebrow">Savannah • New Jersey</span>
          <h2 className="sec-title dark-title">Built by two people who got tired of the tools.</h2>
          <p className="founders-p">
            Jon Pacific and Trevor Clendenin started Sun Digital in 2009. After more than fifteen years of
            stitching together other people's software to serve small businesses, they did the thing
            most agencies only talk about: they built their own platform.
          </p>
          <p className="founders-p">
            SunSuite and Sol are the result, and the reason most of our clients have been with us
            for more than five years. We're not the biggest agency. We're the one that built the thing.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="cta-band">
      <div className="cta-haze" aria-hidden="true"></div>
      <div className="wrap cta-inner">
        <img src="assets/sun-mark.png" alt="" className="cta-mark"/>
        <h2>See what Sol finds<br/>in your marketing.</h2>
        <p>Book a 30-minute strategy call. We'll run your business through SunSuite live and
          show you exactly what's working, what's leaking, and what we'd fix first.</p>
        <div className="cta-actions">
          <button className="btn btn-sun" onClick={() => window.openSol && window.openSol()}>
            Book a strategy call <Arrow/>
          </button>
          <a href="tel:+13032188570" className="btn btn-ghost-dark">Call (303) 218-8570</a>
        </div>
        <span className="cta-note">No pricing games. No pressure. Just a look at the numbers.</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <img src="assets/logo.png" alt="Sun Digital Marketing" style={{ height: 30 }}/>
          <p>The outsourced marketing department for small businesses, built on SunSuite, run by Sol.</p>
          <address className="footer-addr">2225 Walz Dr., Savannah, GA 31404</address>
        </div>
        <div className="footer-cols">
          <div><h5>Platform</h5><a href="#sunsuite">SunSuite</a><a href="#sol">Sol</a><a href="#services">Services</a></div>
          <div><h5>Company</h5><a href="#about">About</a><a href="#results">Results</a><a href="#top">Home</a></div>
          <div><h5>Talk to us</h5><a href="tel:+13032188570">(303) 218-8570</a><a href="mailto:admin@sundigitalmarketing.com">admin@sundigitalmarketing.com</a><a onClick={() => window.openSol && window.openSol()} style={{cursor:"pointer"}}>Chat with Sol</a></div>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Sun Digital Marketing. Marketing small business since 2009.</span>
        <span>Savannah • New Jersey</span>
      </div>
    </footer>
  );
}

window.Services = Services; window.Results = Results;
window.Founders = Founders; window.FinalCTA = FinalCTA; window.Footer = Footer;

// ===== Sol AI chatbot widget =====

const CALENDLY_URL = "https://calendly.com/sundm/discovery-call-w-sundm";

function SolChat() {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([]);
  const [history, setHistory] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [started, setStarted] = React.useState(false);
  const bodyRef = React.useRef(null);

  React.useEffect(() => { window.openSol = () => setOpen(true); }, []);
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, typing]);

  const addSolMsg = (text, showCalendly) => {
    setMsgs(m => [...m, { who: "sol", text, showCalendly: !!showCalendly }]);
  };

  const begin = () => {
    setStarted(true);
    const greeting = "Hey, I'm Sol — the AI behind SunSuite. I can answer questions about what we do, or get a strategy call on your calendar. What's up?";
    addSolMsg(greeting);
    setHistory([{ role: "assistant", content: greeting }]);
  };

  React.useEffect(() => { if (open && !started) setTimeout(begin, 400); }, [open]);

  const send = async () => {
    const v = input.trim();
    if (!v || typing) return;
    setInput("");

    const userMsg = { role: "user", content: v };
    const newHistory = [...history, userMsg];
    setHistory(newHistory);
    setMsgs(m => [...m, { who: "me", text: v }]);
    setTyping(true);

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });

      const data = await res.json();
      const reply = data.reply || data.error || "Something went wrong — call us at (303) 218-8570.";
      const wantsCalendly = /calendly\.com|pick a time|book.*time|schedule.*call/i.test(reply);

      setTyping(false);
      addSolMsg(reply, wantsCalendly);
      setHistory(h => [...h, { role: "assistant", content: reply }]);
    } catch (e) {
      setTyping(false);
      addSolMsg("Network error — call us directly at (303) 218-8570.");
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <div className="solchat">
      {open && (
        <div className="sc-panel">
          <div className="sc-head">
            <div className="sc-id">
              <span className="sc-orb"></span>
              <div><b>Sol</b><small>SunSuite AI &middot; online</small></div>
            </div>
            <button className="sc-x" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="sc-body" ref={bodyRef} role="log" aria-live="polite" aria-label="Conversation with Sol">
            {msgs.map((m, i) => (
              <div key={i} className={"sc-msg sc-" + m.who}>
                {m.text}
                {m.showCalendly && (
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="sc-calendly-btn">
                    Pick a time &rarr;
                  </a>
                )}
              </div>
            ))}
            {typing && (
              <div className="sc-msg sc-sol sc-typing">
                <span></span><span></span><span></span>
              </div>
            )}
          </div>
          <div className="sc-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask Sol anything..."
              aria-label="Message Sol"
              autoFocus
            />
            <button onClick={send} disabled={typing} aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 9l13-6-4 13-3-5-6-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
      <button
        className={"sc-fab" + (open ? " sc-fab-open" : "")}
        onClick={() => setOpen(!open)}
        aria-label="Chat with Sol"
      >
        {open
          ? <svg width="22" height="22" viewBox="0 0 16 16"><path d="M4 4l8 8M12 4l-8 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
          : <><span className="sc-fab-orb"></span><span className="sc-fab-label">Ask Sol</span></>
        }
      </button>
    </div>
  );
}

window.SolChat = SolChat;

// ===== App composition + scroll reveal =====
function useReveal() {
  React.useEffect(() => {
    const check = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add("in");
      });
    };
    // double-rAF so the browser paints the opacity:0 start frame before we flip to .in,
    // otherwise the transition never runs and elements stay hidden.
    requestAnimationFrame(() => requestAnimationFrame(check));
    const t = setTimeout(check, 200);
    // hard fallback: if anything is still hidden later, force it visible
    const fb = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(el => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.5) el.classList.add("reveal-shown");
      });
    }, 1400);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => { clearTimeout(t); clearTimeout(fb); window.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, []);
}

function App() {
  useReveal();
  return (
    <React.Fragment>
      <Nav/>
      <main>
        <Hero/>
        <SunSuite/>
        <Sol/>
        <Services/>
        <Results/>
        <Founders/>
        <FinalCTA/>
      </main>
      <Footer/>
      <SolChat/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
