// ===== Sol - AI morning briefing (animated) =====

const SOL_SCRIPT = [
  { t: "line", who: "sol", text: "Good morning. I ran the overnight sweep across all 14 of your channels at 5:42 AM." },
  { t: "line", who: "sol", text: "Three things want your attention. Everything else is on track." },
  { t: "item", sev: "red", title: "Rankings", body: "“emergency plumber savannah” fell from #2 to #6 overnight; a competitor refreshed their page. I drafted updated copy; one tap to approve." },
  { t: "item", sev: "amber", title: "Paid Media", body: "Meta retargeting CPA is up 18% this week. I paused the worst-performing ad and shifted $40/day to the set converting at 4.8× ROAS." },
  { t: "item", sev: "green", title: "Reputation", body: "You earned a 5★ review yesterday. I automatically requested two more from recent happy customers." },
  { t: "line", who: "sol", text: "That’s it. I’ll keep watching and ping the team if anything moves. Talk soon, Sol." },
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
            Sol is the AI layer that orchestrates all 34 Sunsuite tools. While you’re closed,
            it sweeps every account, separates noise from signal, and has the answer ready
            before you’ve had coffee.
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
