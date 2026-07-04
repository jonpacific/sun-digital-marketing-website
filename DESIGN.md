---
name: Sun Digital Marketing
description: Warm AI-powered marketing platform site — sunburst gradients on paper and night surfaces
colors:
  coral-flare: "#FF5247"
  sun-orange: "#FF8A3D"
  gold-ray: "#FFC24B"
  warm-paper: "#FAF7F3"
  pure-white: "#FFFFFF"
  espresso-ink: "#1A1512"
  cocoa-ink: "#4A423B"
  driftwood-muted: "#877D73"
  midnight-roast: "#0C0908"
  night-surface: "#15100E"
  night-surface-raised: "#1E1815"
  moonlit-ink: "#F4EEE8"
  night-driftwood: "#9A8E83"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Hanken Grotesk, system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    letterSpacing: "0.22em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "26px"
  pill: "100px"
spacing:
  section: "120px"
  section-mobile: "80px"
  wrap-pad: "32px"
components:
  button-sun:
    backgroundColor: "{colors.sun-orange}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost:
    textColor: "{colors.espresso-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost-dark:
    textColor: "{colors.moonlit-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
---

# Design System: Sun Digital Marketing

## 1. Overview

**Creative North Star: "Warm Machine"**

AI precision wrapped in human warmth. The site sells proprietary AI tooling (SunSuite, Sol) without ever feeling like an AI startup: no purple, no neon, no glassmorphism, no sci-fi. Instead, everything glows in a sunrise ramp — coral through orange to gold — laid over warm paper by day and a near-black roasted brown by night. The dark sections aren't "dark mode tech"; they're the overnight shift where Sol works, and the sun gradient is the light left on.

The system alternates warm-light and warm-dark full-width bands to pace the scroll: paper hero → night platform demo → night Sol briefing → paper services → paper results. Product UI mockups (the SunSuite dashboard, Sol's morning briefing) are rendered in-page as working set pieces — the demo IS the pitch.

**Key Characteristics:**
- Sunrise gradient (115deg, coral → orange → gold) as the single brand accent, used sparingly but confidently
- Warm-tinted everything: even the blacks (#0C0908) and grays lean brown, never cool
- Pill buttons that lift 2px on hover with a warm glow shadow
- Mono eyebrows with a 26px sun-orange dash prefix
- In-page product demos as the centerpiece imagery

## 2. Colors

A committed two-world palette: one sun ramp shared across a warm-paper day world and a roasted-brown night world.

### Primary
- **Sun Orange** (#FF8A3D): The brand's center of gravity. Focus rings, selection highlight, eyebrow dashes, gradient midpoint. When one solid accent is needed, it's this.
- **Coral Flare** (#FF5247) and **Gold Ray** (#FFC24B): The gradient endpoints. Almost never used solo — they exist to feed `--sun-grad: linear-gradient(115deg, coral 0%, orange 48%, gold 100%)`, which paints CTA buttons, the `.grad-text` sunburst on key headline words, and stat numbers.

### Neutral
- **Warm Paper** (#FAF7F3): Body background for light sections. Warm-tinted, never stark white.
- **Pure White** (#FFFFFF): Cards and raised surfaces on paper.
- **Espresso Ink** (#1A1512) / **Cocoa Ink** (#4A423B): Heading and body text on light. Both warm browns, not gray-blacks.
- **Driftwood Muted** (#877D73): Secondary text on light. Check contrast when used on tinted surfaces.
- **Midnight Roast** (#0C0908): Night-section background. A roasted brown-black, not #000.
- **Night Surface** (#15100E) / **Raised** (#1E1815): Cards and dashboard panels on dark.
- **Moonlit Ink** (#F4EEE8) / **Night Driftwood** (#9A8E83): Text hierarchy on dark.
- **Hairlines**: rgba(26,21,18,.10)/(.06) on light; rgba(255,255,255,.09)/(.05) on dark. Borders are whispers, never gray lines.

### Named Rules
**The One Sun Rule.** The gradient is the only saturated color in the system. No secondary hue, ever. Blue, purple, green appear only inside data-viz pips (red/amber/green status dots in Sol demos) — never as UI chrome.

**The Warm Black Rule.** No pure black, no cool gray anywhere. Every neutral carries a brown undertone. If a hex starts with equal RGB values, it's wrong.

## 3. Typography

**Display Font:** Plus Jakarta Sans (with Hanken Grotesk, system-ui fallback)
**Body Font:** Hanken Grotesk (with system-ui fallback)
**Label/Mono Font:** Space Mono

**Character:** A geometric-friendly display sans with generous roundness set tight (-0.025em, 1.04 line-height) for confident, dense headlines; a humanist body for warmth; a typewriter mono reserved exclusively for eyebrow labels and dashboard chrome.

### Hierarchy
- **Display** (700, fluid to ~5rem in hero, 1.04): Hero H1 with `.grad-text` sunburst on 1–2 key phrases. Manual `<br/>` breaks are hand-balanced — no orphaned words, ever.
- **Headline** (700, ~2.5–3rem, 1.04): `.sec-title` section headings, usually two hand-broken lines.
- **Body** (400, 16–18px): Section leads (`.sec-lead`) and paragraphs.
- **Label** (400, 12.5px, 0.22em tracking, uppercase, mono): `.eyebrow` kickers with the 26px orange dash. This is the one deliberate, named kicker system.

### Named Rules
**The Hand-Set Rule.** Headline line breaks are set manually per breakpoint intent. A single word alone on a line is a bug to fix, not an outcome to accept.

## 4. Elevation

Flat by default; depth appears only as warm glow in response to prominence or hover. Dark sections layer tonally (night → surface → raised) instead of using shadows.

### Shadow Vocabulary
- **Sun glow** (`box-shadow: 0 8px 24px -8px rgba(255,90,60,.55)`): Rest state of `.btn-sun` CTAs only.
- **Sun glow lifted** (`0 14px 34px -8px rgba(255,90,60,.65)` + `translateY(-2px)`): Hover state of the same.

### Named Rules
**The Glow-Not-Shadow Rule.** Shadows are warm and tinted with the sun ramp (rgba(255,90,60,…)), never neutral black drop shadows. If an element needs separation on dark, use a lighter surface tone, not a shadow.

## 5. Components

Confident and tactile: pills that lift, arrows that slide, panels that feel like real product.

### Buttons
- **Shape:** Full pill (100px radius), 14px 24px padding, 15px/600 display font
- **Primary (`.btn-sun`):** Sun gradient fill, white text, warm glow shadow; hover lifts -2px and deepens the glow
- **Ghost (`.btn-ghost` / `.btn-ghost-dark`):** 1px hairline border, inherits surface ink; hover darkens border and lifts -2px
- **Arrow affordance:** Inline SVG arrow slides +3px on hover (`.btn .arr`)

### Cards / Containers
- **Corner Style:** 16px (`--r`) standard, 26px (`--r-lg`) for large panels
- **Background:** Pure white on paper sections; night-surface/raised on dark
- **Border:** Hairline only
- **Internal Padding:** Generous, ~24–32px

### Navigation
- Fixed header, transparent at top, gains background after 24px scroll (`.nav-on`). Display-font links, phone number with icon, sun-pill "Book a call" CTA. Mobile: burger with `aria-expanded` toggling a stacked panel.

### Eyebrow (signature)
- Mono, uppercase, 0.22em tracked, preceded by a 26px × 1px sun-orange dash. The system's one deliberate kicker; appears above section titles.

### Product demo panels (signature)
- The SunSuite dashboard mock (`.dash`) and Sol morning-briefing window (`.sol-win`) are full working in-page mockups with sparklines, status pips (red/amber/green), and scripted typing animation. These are the site's imagery — treat them as first-class brand assets, not decoration.

## 6. Do's and Don'ts

### Do:
- **Do** use the sun gradient (115deg, #FF5247 → #FF8A3D → #FFC24B) for every primary CTA and for `.grad-text` on 1–2 headline phrases per section, max.
- **Do** keep all neutrals warm-brown-tinted (The Warm Black Rule).
- **Do** hand-balance headline line breaks at every change — check for orphans on desktop and mobile.
- **Do** hold WCAG 2.1 AA: 4.5:1 body text, 3:1 large text; verify Driftwood Muted (#877D73) against its actual background before using.
- **Do** keep the reduced-motion block current — every new animation needs a `prefers-reduced-motion: reduce` alternative.
- **Do** use middots (·) as inline separators — it's the site's native separator (never em dashes in UI lists).

### Don't:
- **Don't** look like a "generic AI startup": no purple gradients, no neon, no glassmorphism, no sci-fi visuals (PRODUCT.md anti-reference, verbatim).
- **Don't** look like a "cheap local agency": no stock photos of handshakes, no template clutter (PRODUCT.md).
- **Don't** go "corporate enterprise": no jargon walls, no stiff gray palettes (PRODUCT.md).
- **Don't** be "salesy/pushy": no popups, no countdown timers, one conversion path only (PRODUCT.md).
- **Don't** introduce a second saturated hue (The One Sun Rule).
- **Don't** use neutral black drop shadows — glow warm or layer tonally.
- **Don't** use `.grad-text` on body copy or more than ~2 phrases per viewport; its rarity is the point.
