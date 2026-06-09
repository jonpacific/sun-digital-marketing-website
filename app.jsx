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
