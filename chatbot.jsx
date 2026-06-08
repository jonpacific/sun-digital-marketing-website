// ===== Sol chatbot widget =====

const CALENDLY_URL = "https://calendly.com/sundm/discovery-call-w-sundm";

function SolChat() {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [chips, setChips] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [started, setStarted] = React.useState(false);
  const [stage, setStage] = React.useState("idle");
  const [userName, setUserName] = React.useState("");
  const bodyRef = React.useRef(null);

  React.useEffect(() => { window.openSol = () => setOpen(true); }, []);
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, typing, chips]);

  const sol = (text, after, delayOverride) => {
    setTyping(true);
    setChips([]);
    const delay = delayOverride !== undefined ? delayOverride : 700 + Math.min(text.length * 11, 900);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, { who: "sol", text }]);
      if (after) setTimeout(after, 320);
    }, delay);
  };

  const showCalendly = (name) => {
    setTyping(true);
    setChips([]);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, {
        who: "sol",
        text: name
          ? `Great, ${name}. Pick a time that works for you and we'll see you on the call.`
          : "Pick a time that works for you and we'll see you on the call.",
        calendly: true
      }]);
      setStage("done");
    }, 800);
  };

  const begin = () => {
    setStarted(true);
    sol(
      "Hey! I'm Sol, the AI behind Sunsuite. I can book your strategy call or answer a quick question. What can I do for you?",
      () => setChips(["Book a strategy call", "What is Sunsuite?", "Talk to a human"])
    );
  };

  React.useEffect(() => { if (open && !started) setTimeout(begin, 350); }, [open]);

  const pick = (label) => {
    setMsgs(m => [...m, { who: "me", text: label }]);
    setChips([]);
    if (label === "Book a strategy call") {
      setStage("booking_name");
      sol("Love it. What's your name?", null);
    } else if (label === "What is Sunsuite?") {
      sol(
        "Sunsuite is our own 34-tool platform: rankings, paid media, AI-search visibility, social, reviews and reporting in one place. I run it and send a morning briefing to every client. Most agencies resell tools — we built ours.",
        () => setChips(["Book a strategy call", "Talk to a human"])
      );
    } else if (label === "Talk to a human") {
      setStage("done");
      sol("Of course. Jon and Trevor are reachable at (303) 218-8570 or admin@sundigitalmarketing.com. You can also book a call below.", () =>
        setChips(["Book a strategy call"])
      );
    } else if (label === "Yes, book it") {
      showCalendly(userName);
    } else if (label === "No thanks") {
      setStage("done");
      sol("No problem. Feel free to reach us anytime at (303) 218-8570. Have a great day! ☀️", null);
    }
  };

  const send = () => {
    const v = input.trim();
    if (!v) return;
    setMsgs(m => [...m, { who: "me", text: v }]);
    setInput("");

    if (stage === "booking_name") {
      const name = v.split(" ")[0];
      setUserName(name);
      setStage("booking_confirm");
      sol(
        `Nice to meet you, ${name}. A strategy call is 30 minutes — we run your business through Sunsuite live and show you exactly what we'd work on first. Ready to pick a time?`,
        () => setChips(["Yes, book it", "No thanks"])
      );
    } else if (stage === "booking_confirm") {
      const lower = v.toLowerCase();
      if (lower.includes("yes") || lower.includes("sure") || lower.includes("ok") || lower.includes("yeah") || lower.includes("book")) {
        showCalendly(userName);
      } else {
        setStage("done");
        sol("No problem. If you change your mind, just say the word. ☀️", null);
      }
    } else {
      // generic fallback — try to route by keywords
      const lower = v.toLowerCase();
      if (lower.includes("book") || lower.includes("call") || lower.includes("schedule") || lower.includes("meet")) {
        setStage("booking_name");
        sol("Happy to get that booked. What's your name?", null);
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("how much") || lower.includes("pricing")) {
        sol(
          "Pricing depends on the mix of services and account size. The strategy call is the right place to get a real number — we run your business through Sunsuite and quote from there. Want to book one?",
          () => setChips(["Book a strategy call", "No thanks"])
        );
      } else if (lower.includes("seo") || lower.includes("google") || lower.includes("ranking") || lower.includes("search")) {
        sol(
          "SEO is one of our core services, including local SEO, Google Business Profile, and AI-search visibility on ChatGPT, Gemini and Perplexity. Want to see what that looks like for your business?",
          () => setChips(["Book a strategy call", "What is Sunsuite?"])
        );
      } else if (lower.includes("sunsuite") || lower.includes("platform") || lower.includes("tool") || lower.includes("ai")) {
        pick("What is Sunsuite?");
        return;
      } else {
        sol(
          "Good question. The best way to get a real answer for your specific business is a 30-minute strategy call — it's free and we run your numbers live. Want to book one?",
          () => setChips(["Book a strategy call", "Talk to a human"])
        );
      }
    }
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
                {m.calendly && (
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sc-calendly-btn"
                  >
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
            {chips.length > 0 && (
              <div className="sc-chips">
                {chips.map(c => <button key={c} onClick={() => pick(c)}>{c}</button>)}
              </div>
            )}
          </div>
          <div className="sc-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Type a message..."
            />
            <button onClick={send} aria-label="Send">
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
