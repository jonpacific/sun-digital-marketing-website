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
          {[
            ["Jon Pacific","Co-founder","assets/jon-pacific.jpg","https://www.linkedin.com/in/jonpacific/","https://calendly.com/sundm/discovery-call-w-sundm"],
            ["Trevor Clendenin","Co-founder","assets/trevor-clendenin.jpg","https://www.linkedin.com/in/trevorclendenin/","https://calendly.com/trevor-28/30min/"],
          ].map(([n, r, src, linkedin, calendly]) => (
            <div className="founder" key={n}>
              <div className="founder-img"><img src={src} alt={n} loading="lazy"/></div>
              <b>{n}</b><small>{r}</small>
              <div className="founder-links">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${n} on LinkedIn`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <defs>
                      <linearGradient id="liGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#FF5247"/><stop offset="0.48" stopColor="#FF8A3D"/><stop offset="1" stopColor="#FFC24B"/>
                      </linearGradient>
                    </defs>
                    <rect x="1" y="1" width="22" height="22" rx="5" fill="url(#liGrad)"/>
                    <path fill="#fff" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
                  </svg>
                </a>
              </div>
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
          <a href="tel:+19122267530" className="btn btn-ghost-dark">Call (912) 226-7530</a>
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
          <div><div className="footer-h">Platform</div><a href="#sunsuite">SunSuite</a><a href="#sol">Sol</a><a href="#services">Services</a></div>
          <div><div className="footer-h">Company</div><a href="#about">About</a><a href="#results">Results</a><a href="#top">Home</a></div>
          <div><div className="footer-h">Talk to us</div><a href="tel:+19122267530">(912) 226-7530</a><a href="mailto:admin@sundigitalmarketing.com">admin@sundigitalmarketing.com</a><a onClick={() => window.openSol && window.openSol()} style={{cursor:"pointer"}}>Chat with Sol</a></div>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Sun Digital Marketing. Marketing small business since 2009. <a href="/privacy-policy.html">Privacy Policy</a></span>
        <span>Savannah • New Jersey</span>
      </div>
    </footer>
  );
}

window.Services = Services; window.Results = Results;
window.Founders = Founders; window.FinalCTA = FinalCTA; window.Footer = Footer;
