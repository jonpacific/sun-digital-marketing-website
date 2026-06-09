// ===== Nav, Hero, Proof strip =====
const {
  useState,
  useEffect
} = React;
function Logo({
  h = 26
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.png",
    alt: "Sun Digital Marketing",
    style: {
      height: h,
      width: "auto"
    }
  });
}
function Arrow() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "arr",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h9M8 4l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", f, {
      passive: true
    });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [["SunSuite", "#sunsuite"], ["Sol", "#sol"], ["Services", "#services"], ["Results", "#results"]];
  return /*#__PURE__*/React.createElement("header", {
    className: "nav" + (scrolled ? " nav-on" : ""),
    role: "banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "nav-logo",
    "aria-label": "Sun Digital Marketing \u2014 home"
  }, /*#__PURE__*/React.createElement(Logo, {
    h: 42
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    "aria-label": "Main navigation"
  }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+13032188570",
    className: "nav-phone",
    "aria-label": "Call Sun Digital Marketing at (303) 218-8570"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 2.5 7 5 5.5 6.5a8 8 0 0 0 4 4L11 9l2.5 1.5v2a1.5 1.5 0 0 1-1.7 1.5C6.6 13.4 2.6 9.4 2 4.2A1.5 1.5 0 0 1 3.5 2.5h2Z",
    stroke: "currentColor",
    strokeWidth: "1.3",
    strokeLinejoin: "round"
  })), "(303) 218-8570"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sun nav-book",
    onClick: () => window.openSol && window.openSol()
  }, "Book a call")), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    "aria-label": open ? "Close menu" : "Open menu",
    "aria-expanded": open,
    "aria-controls": "nav-mobile-menu",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), open && /*#__PURE__*/React.createElement("div", {
    id: "nav-mobile-menu",
    className: "nav-mobile",
    role: "navigation",
    "aria-label": "Mobile navigation"
  }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    onClick: () => setOpen(false)
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "tel:+13032188570"
  }, "(303) 218-8570"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sun",
    onClick: () => {
      setOpen(false);
      window.openSol && window.openSol();
    }
  }, "Book a call")));
}

// orbiting sun dots, scaled small for accents
function SunGlyph({
  size = 120
}) {
  const dots = [];
  // a spiral-ish arc of dots, echoing the logo mark
  const rings = [{
    r: 7,
    items: [[0.45, 1.0]]
  }, {
    r: 16,
    n: 5,
    a0: 200,
    a1: 320,
    s: [3, 3.6, 4, 3.6, 3]
  }, {
    r: 27,
    n: 6,
    a0: 190,
    a1: 340,
    s: [2, 2.6, 3.2, 3.2, 2.6, 2]
  }, {
    r: 38,
    n: 6,
    a0: 200,
    a1: 330,
    s: [1.6, 2, 2.6, 2.6, 2, 1.6]
  }];
  let k = 0;
  rings.forEach(ring => {
    if (ring.items) {
      ring.items.forEach(() => dots.push(/*#__PURE__*/React.createElement("circle", {
        key: k++,
        cx: size / 2 - 6,
        cy: size / 2,
        r: ring.r,
        fill: "url(#sg)"
      })));
      return;
    }
    for (let i = 0; i < ring.n; i++) {
      const t = ring.n === 1 ? 0 : i / (ring.n - 1);
      const ang = (ring.a0 + (ring.a1 - ring.a0) * t) * Math.PI / 180;
      const cx = size / 2 + Math.cos(ang) * ring.r;
      const cy = size / 2 + Math.sin(ang) * ring.r;
      dots.push(/*#__PURE__*/React.createElement("circle", {
        key: k++,
        cx: cx,
        cy: cy,
        r: ring.s[i],
        fill: "url(#sg)"
      }));
    }
  });
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "sg",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FF5247"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.5",
    stopColor: "#FF8A3D"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#FFC24B"
  }))), dots);
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "main-content",
    className: "hero hero-bleed"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/hero-team.jpg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-scrim"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow reveal"
  }, "Digital Marketing \xB7 Savannah \u2022 NJ \xB7 Since 2009"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1 reveal"
  }, "Building ", /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "proprietary AI"), /*#__PURE__*/React.createElement("br", null), "digital marketing tools customized for our clients."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub reveal"
  }, "Sun Digital is the outsourced marketing department for small businesses that have outgrown doing it themselves. It runs on ", /*#__PURE__*/React.createElement("strong", null, "SunSuite"), ", our 38-tool platform, and is orchestrated by ", /*#__PURE__*/React.createElement("strong", null, "Sol"), ", an AI layer that works the overnight shift so your morning starts with answers, not surprises."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions reveal"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sun",
    onClick: () => window.openSol && window.openSol()
  }, "Book a strategy call ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "#sunsuite",
    className: "btn btn-ghost"
  }, "See SunSuite")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "70%+"), /*#__PURE__*/React.createElement("span", null, "of clients stay 5+ years")), /*#__PURE__*/React.createElement("div", {
    className: "vr"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "27 yrs"), /*#__PURE__*/React.createElement("span", null, "marketing small business")), /*#__PURE__*/React.createElement("div", {
    className: "vr"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "38 tools"), /*#__PURE__*/React.createElement("span", null, "built in-house"))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hc-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hc-dot"
  }), " Sol \xB7 overnight sweep"), /*#__PURE__*/React.createElement("div", {
    className: "hc-body"
  }, /*#__PURE__*/React.createElement("b", null, "3 items"), " flagged before 6:00 AM"), /*#__PURE__*/React.createElement("div", {
    className: "hc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pip pip-red"
  }), "Google rank slip: \"emergency plumber savannah\""), /*#__PURE__*/React.createElement("div", {
    className: "hc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pip pip-amber"
  }), "Meta CPA up 18% on Retargeting set"), /*#__PURE__*/React.createElement("div", {
    className: "hc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pip pip-green"
  }), "New 5\u2605 review: auto-requested 2 more")));
}
window.Logo = Logo;
window.Arrow = Arrow;
window.SunGlyph = SunGlyph;
window.Nav = Nav;
window.Hero = Hero;

// ===== SunSuite platform showcase (dark) =====

function Sparkline({
  points,
  color = "#FF8A3D",
  w = 220,
  h = 56,
  fill = true
}) {
  const max = Math.max(...points),
    min = Math.min(...points);
  const nx = i => i / (points.length - 1) * w;
  const ny = v => h - (v - min) / (max - min || 1) * (h - 8) - 4;
  const d = points.map((v, i) => `${i ? "L" : "M"}${nx(i).toFixed(1)} ${ny(v).toFixed(1)}`).join(" ");
  const area = `${d} L${w} ${h} L0 ${h} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: h,
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "sp" + color.replace("#", ""),
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: color,
    stopOpacity: "0.28"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: color,
    stopOpacity: "0"
  }))), fill && /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#sp" + color.replace("#", "") + ")"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function AIBar({
  label,
  pct,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "aibar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aibar-top"
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("b", null, pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "aibar-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aibar-fill",
    style: {
      width: pct + "%",
      background: color
    }
  })));
}
function Dashboard() {
  const nav = [["Overview", true], ["Rankings", false], ["AI Visibility", false], ["Paid Media", false], ["Social", false], ["Reviews", false], ["Reports", false]];
  return /*#__PURE__*/React.createElement("div", {
    className: "dash"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "dash-rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-brand"
  }, /*#__PURE__*/React.createElement(SunGlyph, {
    size: 26
  }), " ", /*#__PURE__*/React.createElement("span", null, "SunSuite")), /*#__PURE__*/React.createElement("nav", null, nav.map(([l, on]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    className: on ? "on" : ""
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "dash-sol"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hc-dot"
  }), " Sol is awake")), /*#__PURE__*/React.createElement("div", {
    className: "dash-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-client"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash-ava"
  }, "LP"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Lowcountry Plumbing Co."), /*#__PURE__*/React.createElement("small", null, "Savannah, GA \xB7 updated 5:58 AM"))), /*#__PURE__*/React.createElement("div", {
    className: "dash-date"
  }, "Tue, Jun 8")), /*#__PURE__*/React.createElement("div", {
    className: "dash-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcard dcard-wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcard-h"
  }, /*#__PURE__*/React.createElement("span", null, "AI Search Visibility"), /*#__PURE__*/React.createElement("small", null, "share of answers")), /*#__PURE__*/React.createElement("div", {
    className: "aibars"
  }, /*#__PURE__*/React.createElement(AIBar, {
    label: "ChatGPT",
    pct: 72,
    color: "#FF8A3D"
  }), /*#__PURE__*/React.createElement(AIBar, {
    label: "Claude",
    pct: 64,
    color: "#FF6F45"
  }), /*#__PURE__*/React.createElement(AIBar, {
    label: "Gemini",
    pct: 48,
    color: "#FFB14B"
  }), /*#__PURE__*/React.createElement(AIBar, {
    label: "Perplexity",
    pct: 55,
    color: "#FFC24B"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcard-h"
  }, /*#__PURE__*/React.createElement("span", null, "Organic rankings"), /*#__PURE__*/React.createElement("small", {
    className: "up"
  }, "\u25B2 6")), /*#__PURE__*/React.createElement("div", {
    className: "dcard-big"
  }, "Top\xA03 ", /*#__PURE__*/React.createElement("em", null, "\xB7 41 kw")), /*#__PURE__*/React.createElement(Sparkline, {
    points: [28, 30, 29, 33, 34, 32, 37, 39, 38, 41]
  })), /*#__PURE__*/React.createElement("div", {
    className: "dcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcard-h"
  }, /*#__PURE__*/React.createElement("span", null, "Ad spend \xB7 ROAS"), /*#__PURE__*/React.createElement("small", {
    className: "up"
  }, "4.8\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "dcard-big"
  }, "$12,480 ", /*#__PURE__*/React.createElement("em", null, "\xB7 MTD")), /*#__PURE__*/React.createElement(Sparkline, {
    points: [3.1, 3.4, 3.2, 3.9, 4.0, 4.3, 4.1, 4.6, 4.5, 4.8],
    color: "#FFC24B"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dcard dcard-wide dcard-sol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcard-h"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "hc-dot"
  }), " Sol \xB7 this morning"), /*#__PURE__*/React.createElement("small", null, "3 flagged")), /*#__PURE__*/React.createElement("div", {
    className: "hc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pip pip-red"
  }), "Rank slip on \"emergency plumber savannah\": draft fix ready"), /*#__PURE__*/React.createElement("div", {
    className: "hc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pip pip-amber"
  }), "Meta CPA up 18%: paused worst ad, awaiting your OK"), /*#__PURE__*/React.createElement("div", {
    className: "hc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pip pip-green"
  }), "2 review requests sent after yesterday's 5\u2605")))));
}
const TOOL_GROUPS = [["Rankings & Audit", 7, ["SunRank — daily keyword position tracking", "SunVerify — citation accuracy audit", "SunScan — live citation checker", "SunLocal — Google Business Profile performance", "SunMap — sitemap health & coverage audit", "SunTag — Google Tag Manager audit", "SunRival — competitor ranking watch"]], ["AI & Intelligence", 6, ["SunSignal — AI search visibility tracker", "SunEcho — AI mention monitoring across ChatGPT, Claude, Gemini & Perplexity", "SunGround — local market context research", "SunSeed — brand knowledge initialization", "SunFeed — ongoing knowledge ingestion", "SunLoop — optimization loop engine"]], ["Paid Media", 3, ["SunBid — Google Ads management", "SunReach — Meta & Instagram ads", "SunEdge — Microsoft & Bing ads"]], ["Social & Content", 6, ["SunCast — multi-platform social publishing", "SunReel — video content pipeline", "SunForge — campaign planning", "SunCal — campaign calendar", "SunTruth — offering catalog & content validation", "SunList — email list & broadcast"]], ["Email & CRM", 7, ["SunSort — Gmail triage & prioritization", "SunDraft — AI-assisted email drafting", "SunSweep — email lifecycle automation", "SunThread — contact thread archiving", "SunContact — contact context editing", "SunOpen — new contact creation", "SunClose — client exit interview trigger"]], ["Client Management", 3, ["SunOnboard — new client setup", "SunRoster — client account directory", "SunRepute — review request automation"]], ["Reporting", 4, ["SunPulse — weekly performance report", "SunLedger — monthly analytics report", "SunDepth — GA4 historical analysis", "SunTide — market trend analysis"]]];
function SunSuite() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sunsuite",
    className: "dark sec-pad sunsuite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sun-haze",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--night-muted)"
    }
  }, "The Platform"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title"
  }, "SunSuite is the nervous system", /*#__PURE__*/React.createElement("br", null), "behind every account we run."), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead"
  }, "Thirty-eight tools we wrote ourselves, not a rebadged stack of someone else's software. They watch rankings, paid media, AI search, social, reviews and reporting in one place, so nothing slips through the cracks between logins.")), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Dashboard, null)), /*#__PURE__*/React.createElement("div", {
    className: "tool-head reveal"
  }, /*#__PURE__*/React.createElement("h3", null, "38 tools, working as one"), /*#__PURE__*/React.createElement("span", {
    className: "tool-count"
  }, /*#__PURE__*/React.createElement("b", null, "38"), " proprietary tools")), /*#__PURE__*/React.createElement("div", {
    className: "tool-grid"
  }, TOOL_GROUPS.map(([name, n, tools]) => /*#__PURE__*/React.createElement("div", {
    className: "tool-card reveal",
    key: name
  }, /*#__PURE__*/React.createElement("div", {
    className: "tool-card-h"
  }, /*#__PURE__*/React.createElement("h4", null, name), /*#__PURE__*/React.createElement("span", null, n)), /*#__PURE__*/React.createElement("ul", null, tools.map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, t))))))));
}
window.SunSuite = SunSuite;
window.Sparkline = Sparkline;

// ===== Sol - AI morning briefing (animated) =====

const SOL_SCRIPT = [{
  t: "line",
  who: "sol",
  text: "Good morning. I ran the overnight sweep across all 14 of your channels at 5:42 AM."
}, {
  t: "line",
  who: "sol",
  text: "Three things want your attention. Everything else is on track."
}, {
  t: "item",
  sev: "red",
  title: "Rankings",
  body: "\"emergency plumber savannah\" fell from #2 to #6 overnight; a competitor refreshed their page. I drafted updated copy; one tap to approve."
}, {
  t: "item",
  sev: "amber",
  title: "Paid Media",
  body: "Meta retargeting CPA is up 18% this week. I paused the worst-performing ad and shifted $40/day to the set converting at 4.8× ROAS."
}, {
  t: "item",
  sev: "green",
  title: "Reputation",
  body: "You earned a 5★ review yesterday. I automatically requested two more from recent happy customers."
}, {
  t: "line",
  who: "sol",
  text: "That's it. I'll keep watching and ping the team if anything moves. Talk soon, Sol."
}];
function Sol() {
  const [shown, setShown] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const ref = React.useRef(null);
  const timers = React.useRef([]);
  const play = React.useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setShown(0);
    setPlaying(true);
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
      if (r.top < window.innerHeight * 0.7 && r.bottom > 60) {
        done = true;
        play();
        return true;
      }
      return false;
    };
    const poll = setInterval(() => {
      if (tryPlay()) clearInterval(poll);
    }, 350);
    window.addEventListener("scroll", tryPlay, {
      passive: true
    });
    return () => {
      clearInterval(poll);
      window.removeEventListener("scroll", tryPlay);
      timers.current.forEach(clearTimeout);
    };
  }, [play]);
  const caps = [["Watches", "Rankings, ad spend, AI-search mentions, reviews and site health, every night, every account."], ["Decides", "Triages what actually matters and drafts the fix, so a slip becomes a one-tap approval, not a fire drill."], ["Reports", "Lands a plain-English briefing in your inbox by 6 AM, with no dashboards to dig through."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "sol",
    className: "dark sec-pad sol-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap sol-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-copy reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--night-muted)"
    }
  }, "Meet Sol"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title"
  }, "Sol works the", /*#__PURE__*/React.createElement("br", null), "overnight shift."), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead",
    style: {
      marginLeft: 0
    }
  }, "Sol is the AI layer that orchestrates all 38 SunSuite tools. While you're closed, it sweeps every account, separates noise from signal, and has the answer ready before you've had coffee."), /*#__PURE__*/React.createElement("div", {
    className: "sol-caps"
  }, caps.map(([h, b]) => /*#__PURE__*/React.createElement("div", {
    className: "sol-cap",
    key: h
  }, /*#__PURE__*/React.createElement("span", {
    className: "sol-cap-dot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, h, "."), " ", b))))), /*#__PURE__*/React.createElement("div", {
    className: "sol-demo reveal",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-win"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-win-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sol-orb"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sol-win-title"
  }, "Sol \xB7 Morning Briefing"), /*#__PURE__*/React.createElement("div", {
    className: "sol-time"
  }, "5:58 AM")), /*#__PURE__*/React.createElement("div", {
    className: "sol-stream"
  }, SOL_SCRIPT.slice(0, shown).map((s, i) => s.t === "line" ? /*#__PURE__*/React.createElement("div", {
    className: "sol-msg",
    key: i
  }, s.text) : /*#__PURE__*/React.createElement("div", {
    className: "sol-item sol-" + s.sev,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-item-h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pip pip-" + s.sev
  }), s.title), /*#__PURE__*/React.createElement("p", null, s.body), s.sev !== "green" && /*#__PURE__*/React.createElement("div", {
    className: "sol-item-act",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sol-approve",
    tabIndex: "-1"
  }, "Approve fix"), /*#__PURE__*/React.createElement("button", {
    className: "sol-view",
    tabIndex: "-1"
  }, "View")))), playing && /*#__PURE__*/React.createElement("div", {
    className: "sol-typing"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("div", {
    className: "sol-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sol-replay",
    onClick: play
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 8a5 5 0 1 1-1.5-3.5M13 2v3h-3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Replay briefing"), /*#__PURE__*/React.createElement("span", {
    className: "sol-foot-note"
  }, "Live demo \xB7 real briefings are tailored to your business"))))));
}
window.Sol = Sol;

// ===== Services · Results · Founders · CTA · Footer =====

function SvcIcon({
  name
}) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const icons = {
    ppc: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
      d: "M3 14V8M9 14V4M15 14V10M21 14V6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 18h18"
    })),
    seo: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("circle", {
      cx: "10",
      cy: "10",
      r: "6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.5 14.5 20 20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.5 10.5 9.5 12.5 13 8.5"
    })),
    web: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "15",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 8h18M7 6h.01M10 6h.01"
    })),
    email: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m4 7 8 6 8-6"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24"
  }, icons[name]);
}
const SERVICES = [["ppc", "PPC Advertising", "Campaigns that pay for themselves, managed daily, not set-and-forget.", ["Google", "Meta", "Instagram", "YouTube", "Bing", "Pinterest"]], ["seo", "Local SEO & AI Search", "Rank in Google's map pack and get cited by the AI engines people now ask first.", ["Local SEO", "ChatGPT", "Claude", "Gemini", "Perplexity"]], ["web", "Web Design", "Fast, conversion-built sites we keep healthy long after launch.", ["WordPress", "Shopify", "Core Web Vitals", "CRO"]], ["email", "Email Marketing", "Flows and campaigns that turn one-time buyers into regulars.", ["Klaviyo", "Constant Contact", "Automations"]]];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "sec-pad services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head light reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What We Run"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title dark-title"
  }, "Your whole marketing", /*#__PURE__*/React.createElement("br", null), "department, outsourced."), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead dark-lead"
  }, "Big enough to need serious marketing, too small to staff it in-house? That's exactly who we're built for. You get a full team and a platform for less than one hire.")), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, SERVICES.map(([icon, title, desc, tags]) => /*#__PURE__*/React.createElement("div", {
    className: "svc-card reveal",
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-icon"
  }, /*#__PURE__*/React.createElement(SvcIcon, {
    name: icon
  })), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, desc), /*#__PURE__*/React.createElement("div", {
    className: "svc-tags"
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t))))))));
}
function Results() {
  const stats = [["70%+", "of clients have stayed with us 5+ years"], ["2009", "the year we started, long before AI was a buzzword"], ["38", "tools we built ourselves, used on every account"], ["1", "AI layer, Sol, watching while you sleep"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "results",
    className: "sec-pad results"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "results-stats"
  }, stats.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    className: "stat reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-n grad-text"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "stat-l"
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "quote-wrap reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote-mark grad-text"
  }, "\""), /*#__PURE__*/React.createElement("blockquote", null, "Jon and Trevor are incredibly professional, responsive, and knowledgeable. They take the time to explain strategy, answer questions, and make sure everything is running smoothly. It's clear they genuinely care about their clients' success."), /*#__PURE__*/React.createElement("div", {
    className: "quote-by"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote-ava",
    "aria-hidden": "true"
  }, "MA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Marc Alhanaty"), /*#__PURE__*/React.createElement("small", null, "Google Review \u2605\u2605\u2605\u2605\u2605"))))));
}
function Founders() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "sec-pad founders"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap founders-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "founders-photos reveal"
  }, [["Jon Pacific", "Co-founder", "assets/jon-pacific.jpg"], ["Trevor Clendenin", "Co-founder", "assets/trevor-clendenin.jpg"]].map(([n, r, src]) => /*#__PURE__*/React.createElement("div", {
    className: "founder",
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    className: "founder-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: n
  })), /*#__PURE__*/React.createElement("b", null, n), /*#__PURE__*/React.createElement("small", null, r)))), /*#__PURE__*/React.createElement("div", {
    className: "founders-copy reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Savannah \u2022 New Jersey"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title dark-title"
  }, "Built by two people who got tired of the tools."), /*#__PURE__*/React.createElement("p", {
    className: "founders-p"
  }, "Jon Pacific and Trevor Clendenin started Sun Digital in 2009. After more than fifteen years of stitching together other people's software to serve small businesses, they did the thing most agencies only talk about: they built their own platform."), /*#__PURE__*/React.createElement("p", {
    className: "founders-p"
  }, "SunSuite and Sol are the result, and the reason most of our clients have been with us for more than five years. We're not the biggest agency. We're the one that built the thing."))));
}
function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-haze",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap cta-inner"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/sun-mark.png",
    alt: "",
    className: "cta-mark"
  }), /*#__PURE__*/React.createElement("h2", null, "See what Sol finds", /*#__PURE__*/React.createElement("br", null), "in your marketing."), /*#__PURE__*/React.createElement("p", null, "Book a 30-minute strategy call. We'll run your business through SunSuite live and show you exactly what's working, what's leaking, and what we'd fix first."), /*#__PURE__*/React.createElement("div", {
    className: "cta-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sun",
    onClick: () => window.openSol && window.openSol()
  }, "Book a strategy call ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "tel:+13032188570",
    className: "btn btn-ghost-dark"
  }, "Call (303) 218-8570")), /*#__PURE__*/React.createElement("span", {
    className: "cta-note"
  }, "No pricing games. No pressure. Just a look at the numbers.")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.png",
    alt: "Sun Digital Marketing",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("p", null, "The outsourced marketing department for small businesses, built on SunSuite, run by Sol."), /*#__PURE__*/React.createElement("address", {
    className: "footer-addr"
  }, "2225 Walz Dr., Savannah, GA 31404")), /*#__PURE__*/React.createElement("div", {
    className: "footer-cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Platform"), /*#__PURE__*/React.createElement("a", {
    href: "#sunsuite"
  }, "SunSuite"), /*#__PURE__*/React.createElement("a", {
    href: "#sol"
  }, "Sol"), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Services")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#results"
  }, "Results"), /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, "Home")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Talk to us"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+13032188570"
  }, "(303) 218-8570"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:admin@sundigitalmarketing.com"
  }, "admin@sundigitalmarketing.com"), /*#__PURE__*/React.createElement("a", {
    onClick: () => window.openSol && window.openSol(),
    style: {
      cursor: "pointer"
    }
  }, "Chat with Sol")))), /*#__PURE__*/React.createElement("div", {
    className: "wrap footer-base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Sun Digital Marketing. Marketing small business since 2009."), /*#__PURE__*/React.createElement("span", null, "Savannah \u2022 New Jersey")));
}
window.Services = Services;
window.Results = Results;
window.Founders = Founders;
window.FinalCTA = FinalCTA;
window.Footer = Footer;

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
  React.useEffect(() => {
    window.openSol = () => setOpen(true);
  }, []);
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, typing]);
  const addSolMsg = (text, showCalendly) => {
    setMsgs(m => [...m, {
      who: "sol",
      text,
      showCalendly: !!showCalendly
    }]);
  };
  const begin = () => {
    setStarted(true);
    const greeting = "Hey, I'm Sol — the AI behind SunSuite. I can answer questions about what we do, or get a strategy call on your calendar. What's up?";
    addSolMsg(greeting);
    setHistory([{
      role: "assistant",
      content: greeting
    }]);
  };
  React.useEffect(() => {
    if (open && !started) setTimeout(begin, 400);
  }, [open]);
  const send = async () => {
    const v = input.trim();
    if (!v || typing) return;
    setInput("");
    const userMsg = {
      role: "user",
      content: v
    };
    const newHistory = [...history, userMsg];
    setHistory(newHistory);
    setMsgs(m => [...m, {
      who: "me",
      text: v
    }]);
    setTyping(true);
    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: newHistory
        })
      });
      const data = await res.json();
      const reply = data.reply || data.error || "Something went wrong — call us at (303) 218-8570.";
      const wantsCalendly = /calendly\.com|pick a time|book.*time|schedule.*call/i.test(reply);
      setTyping(false);
      addSolMsg(reply, wantsCalendly);
      setHistory(h => [...h, {
        role: "assistant",
        content: reply
      }]);
    } catch (e) {
      setTyping(false);
      addSolMsg("Network error — call us directly at (303) 218-8570.");
    }
  };
  const handleKey = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "solchat"
  }, open && /*#__PURE__*/React.createElement("div", {
    className: "sc-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-id"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-orb"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Sol"), /*#__PURE__*/React.createElement("small", null, "SunSuite AI \xB7 online"))), /*#__PURE__*/React.createElement("button", {
    className: "sc-x",
    onClick: () => setOpen(false),
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "sc-body",
    ref: bodyRef,
    role: "log",
    "aria-live": "polite",
    "aria-label": "Conversation with Sol"
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sc-msg sc-" + m.who
  }, m.text, m.showCalendly && /*#__PURE__*/React.createElement("a", {
    href: CALENDLY_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "sc-calendly-btn"
  }, "Pick a time \u2192"))), typing && /*#__PURE__*/React.createElement("div", {
    className: "sc-msg sc-sol sc-typing"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("div", {
    className: "sc-input"
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: handleKey,
    placeholder: "Ask Sol anything...",
    "aria-label": "Message Sol",
    autoFocus: true
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    disabled: typing,
    "aria-label": "Send"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 9l13-6-4 13-3-5-6-2z",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("button", {
    className: "sc-fab" + (open ? " sc-fab-open" : ""),
    onClick: () => setOpen(!open),
    "aria-label": "Chat with Sol"
  }, open ? /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sc-fab-orb"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sc-fab-label"
  }, "Ask Sol"))));
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
    window.addEventListener("scroll", check, {
      passive: true
    });
    window.addEventListener("resize", check);
    return () => {
      clearTimeout(t);
      clearTimeout(fb);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);
}
function App() {
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(SunSuite, null), /*#__PURE__*/React.createElement(Sol, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Results, null), /*#__PURE__*/React.createElement(Founders, null), /*#__PURE__*/React.createElement(FinalCTA, null)), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(SolChat, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
