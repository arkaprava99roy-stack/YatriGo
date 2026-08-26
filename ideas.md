# YatriGo Landing Page — Design Brainstorm

## Approach 1
**Theme Name:** Transit Noir

**Very Brief Intro:** A cinematic, editorial interface inspired by night-time city movement, route diagrams, and documentary photography. Deep ink fields, sodium-gold signal accents, and asymmetric composition make YatriGo feel like a serious intelligence layer for the city.

**Probability:** 0.07

## Approach 2
**Theme Name:** Monsoon Modernism

**Very Brief Intro:** A luminous, rain-washed visual system using pale mineral backgrounds, moss, and vermilion, with generous typography and tactile paper textures. It frames public transport as a civic, human, and optimistic experience.

**Probability:** 0.03

## Approach 3
**Theme Name:** Signal Bloom

**Very Brief Intro:** A more expressive kinetic direction where route traces, pulses, and passenger signals become the visual language. A warm black canvas with electric coral and aqua highlights gives the product a more experimental, technology-forward character.

**Probability:** 0.09

## Selected Direction: Transit Noir

### Design Movement
Contemporary editorial design fused with cinematic wayfinding graphics and post-digital cartography. The page should feel closer to a film title sequence or a premium mobility brand campaign than a conventional SaaS landing page.

### Core Principles
1. **Signal over decoration:** Every accent line, marker, and pulse suggests movement, location, or collective intelligence.
2. **Asymmetric confidence:** Composition uses offset columns, oversized type, and quiet negative space rather than centered marketing blocks.
3. **Human-scale intelligence:** Data is presented with warmth and clarity, never as cold dashboards or empty futurism.
4. **Kolkata as the first frame:** The city is a starting point and a living character, while the system hints at a larger network.

### Color Philosophy
Ink-black and blue-charcoal establish the calm, cinematic base of the night city. A signature **sodium saffron** brings the warmth of bus lights and street lamps; restrained mist-blue and muted mint convey trust, live status, and readable data. Accent color is used sparingly so a single CTA or live marker feels consequential.

### Layout Paradigm
A full-bleed cinematic hero with a left-aligned editorial statement and a right-side floating transit intelligence panel. Subsequent sections alternate between wide narrative bands and offset data cards, creating a journey down the page rather than a uniform grid.

### Signature Elements
- A thin animated **route trace** that threads through the page and terminates in circular live markers.
- **Signal capsules** with small labels such as LIVE, 07 MIN, and LOW CROWD, styled like broadcast telemetry rather than generic badges.
- Fine grain, hairline rules, and clipped corner geometry that evoke printed transit maps and film credits.

### Interaction Philosophy
Interactions should feel like receiving a live update: decisive, brief, and directional. Buttons respond with a compact press and a signal sweep; navigation links reveal a saffron underline; cards lift subtly but never become playful or noisy.

### Animation
The hero map trace draws in once on load; live markers breathe with a slow opacity pulse; sections reveal with a restrained upward shift and staggered 40ms delays. Hover states use only transform and opacity, with sub-300ms timing. Reduced-motion users receive the same hierarchy without movement.

### Typography System
Use **Space Grotesk** for display and interface labels, with strong weight contrast and slightly tight tracking. Pair with **DM Sans** for readable body copy. Headlines are large, sentence-case, and editorial; supporting copy stays compact with generous line-height. Avoid all-caps except for tiny metadata labels.

### Brand Essence
YatriGo is the live intelligence layer for everyday public transport, built for people who want to move through the city with less waiting and more certainty. **Precise, grounded, alert.**

### Brand Voice
Headlines should sound observant and quietly assured. CTAs should be direct and action-oriented. Microcopy should explain what the system knows without pretending the prototype is more mature than it is.

Example lines:
- “Know the city before it moves.”
- “Your next bus is already telling us where it is.”

### Wordmark & Logo
The mark is a compact circular route node intersected by a forward-moving diagonal line, suggesting a location becoming a journey. Pair the symbol with a custom wordmark treatment where the “Y” echoes a branching route and the “G” is slightly open like a live signal loop. The icon must work alone at favicon size.

### Signature Brand Color
**Sodium Saffron — #F6B84B.** It is warm enough to feel human and visible enough to read like a live transit signal against ink-black.

## Style Decisions
- Prefer cinematic, low-key imagery with dark text-safe areas and warm point-light sources.
- Use the generated symbol as the primary header/fav-icon mark.
- The app destination is treated as a real launch action, with a configurable `APP_URL` constant so the landing page does not pretend to know an unprovided deployment URL.
