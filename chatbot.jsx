// ===== Sol chatbot widget =====

function SolChat() {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [chips, setChips] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [started, setStarted] = React.useState(false);
  const bodyRef = React.useRef(null);

  React.useEffect(() => { window.openSol = () => setOpen(true); }, []);
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, typing, chips]);

  const sol = (text, after) => {
    setTyping(true);
    setChips([]);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, { who: "sol", text }]);
      if (after) setTimeout(after, 320);
    }, 700 + Math.min(text.length * 12, 900));
  };

  const begin = () => {
    setStarted(true);
    sol("Morning. I’m Sol, the AI that runs Sunsuite. I can book your strategy call or answer a quick question. What’s up?", () =>
      setChips(["Book a strategy call", "What is Sunsuite?", "Talk to a human"]));
  };

  React.useEffect(() => { if (open && !started) setTimeout(begin, 350); }, [open]);

  const pick = (label) => {
    setMsgs(m => [...m, { who: "me", text: label }]);
    setChips([]);
    if (label === "Book a strategy call") {
      sol("Love it. A strategy call is 30 minutes. We run your business through Sunsuite live and show you what we’d fix first. What’s your name and business?", null);
    } else if (label === "What is Sunsuite?") {
      sol("Sunsuite is our own 34-tool platform: rankings, paid media, AI-search visibility, social, reviews and reporting in one place. I orchestrate it and send a morning briefing. Most agencies resell tools; we built ours.", () =>
        setChips(["Book a strategy call", "Talk to a human"]));
    } else if (label === "Talk to a human") {
      sol("Of course. Reach Jon or Trevor’s team at (303) 218-8570 or admin@sundigitalmarketing.com. Or leave your name and number here and we’ll call you today.", null);
    }
  };

  const send = () => {
    const v = input.trim();
    if (!v) return;
    setMsgs(m => [...m, { who: "me", text: v }]);
    setInput("");
    sol("Got it, thank you. I’ve flagged this for the team and they’ll reach out shortly. In the meantime you can reach us directly at (303) 218-8570. Talk soon. ☀", null);
  };

  return (
    <div className="solchat">
      {open && (
        <div className="sc-panel">
          <div className="sc-head">
            <div className="sc-id"><span className="sc-orb"></span><div><b>Sol</b><small>Sunsuite AI · online</small></div></div>
            <button className="sc-x" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="sc-body" ref={bodyRef}>
            {msgs.map((m, i) => <div key={i} className={"sc-msg sc-" + m.who}>{m.text}</div>)}
            {typing && <div className="sc-msg sc-sol sc-typing"><span></span><span></span><span></span></div>}
            {chips.length > 0 && (
              <div className="sc-chips">
                {chips.map(c => <button key={c} onClick={() => pick(c)}>{c}</button>)}
              </div>
            )}
          </div>
          <div className="sc-input">
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()} placeholder="Type a message…"/>
            <button onClick={send} aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9l13-6-4 13-3-5-6-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      )}
      <button className={"sc-fab" + (open ? " sc-fab-open" : "")} onClick={() => setOpen(!open)} aria-label="Chat with Sol">
        {open
          ? <svg width="22" height="22" viewBox="0 0 16 16"><path d="M4 4l8 8M12 4l-8 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
          : <><span className="sc-fab-orb"></span><span className="sc-fab-label">Ask Sol</span></>}
      </button>
    </div>
  );
}

window.SolChat = SolChat;
