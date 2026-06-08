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
    const greeting = "Hey, I'm Sol — the AI behind Sunsuite. I can answer questions about what we do, or get a strategy call on your calendar. What's up?";
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
              <div><b>Sol</b><small>Sunsuite AI &middot; online</small></div>
            </div>
            <button className="sc-x" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="sc-body" ref={bodyRef}>
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
