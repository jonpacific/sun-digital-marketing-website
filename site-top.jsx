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
          <a href="tel:+19122267530" className="nav-phone" aria-label="Call Sun Digital Marketing at (912) 226-7530">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5.5 2.5 7 5 5.5 6.5a8 8 0 0 0 4 4L11 9l2.5 1.5v2a1.5 1.5 0 0 1-1.7 1.5C6.6 13.4 2.6 9.4 2 4.2A1.5 1.5 0 0 1 3.5 2.5h2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
            (912) 226-7530
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
          <a href="tel:+19122267530">(912) 226-7530</a>
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
            An <span className="grad-text">AI-powered</span>
            <br/>marketing platform built by
            <br/><span className="grad-text">digital marketing experts</span>.
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
