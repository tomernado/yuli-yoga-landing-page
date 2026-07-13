# PROJECT.md

# Project Overview

Yuli Yoga Landing Page is a single-page marketing website for Yuli's yoga practice.

The site's purpose is to present a premium, elegant and calming brand experience that encourages visitors to join Yuli's yoga practice. It is a branding and conversion website — not an e-commerce store and not a booking system.

---

# Project Goals

- Communicate a premium, calm and trustworthy brand identity.
- Convert visitors into leads/participants through a clear, low-friction call to action.
- Speak to the target audience: people looking for relaxation, beginners, people interested in yoga, and people looking for breathing, movement and mindfulness.
- Reflect the brand values: calm, simplicity, nature, trust, softness, personal connection, premium quality.
- Feel modern, clean and emotional — inspired by brands like Apple and Calm App — rather than spiritual or cliché "yoga website" aesthetics.
- Create an emotional digital experience that reflects the atmosphere of Yuli's yoga practice, rather than simply presenting information.

---

# Technology Stack

- **Frontend:** React, built with Vite.
- **Language:** TypeScript.
- **Styling:** CSS Modules.
- **Animation:** Framer Motion.
- **Typography:** Frank Ruhl Libre (display) paired with Heebo (body/UI) — both self-hosted, Hebrew + Latin subsets only.
- **Language/Direction:** Hebrew, right-to-left (RTL). This is the site's sole language for the current scope.
- **Backend:** None. The site is fully static/client-rendered; no server, database or API is part of the current scope.

---

# Repository Structure

- `AI/` — AI development operating manual, project documentation, templates and the approved resource catalog.
- `IMG/` — Original source image assets for the project: `Logo.jpeg`, plus real photos of Yuli and her yoga-teacher certification (`YuliWithDoc.jpeg`, `documentary.jpeg`).
- `src/` — The Vite/React/TypeScript application: design tokens and global styles (`styles/`), reusable layout and UI components (`components/layout/`, `components/ui/`), the motion primitive and icon set (`components/motion/`, `components/icons/`), the page sections (`components/sections/`), and shared constants (`constants/`).

---

# Core Features

- Full single-page landing experience with six sections: Hero, About (Yuli), Practice, Classes, Testimonials and Contact.
- Premium visual system: an enriched natural palette (sage/stone/clay-gold plus low-saturation lavender, dusty rose, warm peach and gold used only as ambient gradients and tinted shadows), a larger and more deliberate type scale, and per-section ambient lighting for visual rhythm.
- Reusable design system: design tokens, shared layout primitives (`Container`, `Section`, `Header`, `Footer`), UI primitives (`Button`, `Card`, `ContactCard`, `TestimonialCard`, `Eyebrow`, `PlaceholderImage`) and a scroll-reveal motion primitive (`Reveal`) built on Framer Motion.
- The About section uses real photos of Yuli and her yoga-teacher certification. Hero, Practice and Classes still use elegant image placeholders that preserve final layout until further real photography is supplied.
- Testimonials section presenting real visitor feedback (text preserved exactly as provided) as native, screenshot-free cards; built to accept more entries later.
- Contact section wired to real channels: direct WhatsApp chat, WhatsApp community, Instagram and phone; arranges as a compact 2x2 grid on mobile.
- Copy is placeholder marketing text reflecting Yuli's philosophy in general terms (testimonials excepted, which are real) — it has not been reviewed or confirmed by Yuli and should be revised with her real bio, certification details and voice before launch.

---

# Project Constraints

- Must not include e-commerce functionality (no cart, payments or product catalog).
- Must not include a booking/scheduling system.
- Must render correctly in Hebrew, right-to-left (RTL).
- Visual design must avoid generic/cliché yoga-website aesthetics; it must align with a premium wellness brand tone (Apple / Calm App inspiration).
- Only the logo and the About-section photos currently exist as real assets. All other imagery must use clearly identifiable placeholders until final assets are supplied.

---

# Current Status

Active Development — the first complete version of the landing page is implemented with placeholder copy and image placeholders. Remaining work: real photography, Yuli's reviewed bio/copy, and content polish before launch.
