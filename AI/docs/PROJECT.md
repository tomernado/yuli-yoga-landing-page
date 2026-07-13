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
- **Language/Direction:** Hebrew, right-to-left (RTL). This is the site's sole language for the current scope.
- **Backend:** None. The site is fully static/client-rendered; no server, database or API is part of the current scope.

---

# Repository Structure

- `AI/` — AI development operating manual, project documentation, templates and the approved resource catalog.
- `IMG/` — Original source image assets for the project (currently only `Logo.jpeg`).
- `src/` — The Vite/React/TypeScript application: design tokens and global styles (`styles/`), reusable layout and UI components (`components/layout/`, `components/ui/`), the motion primitive and icon set (`components/motion/`, `components/icons/`), the page sections (`components/sections/`), and shared constants (`constants/`).

---

# Core Features

- Full single-page landing experience with five sections: Hero, About (Yuli), Practice, Classes and Contact.
- Reusable design system: design tokens, shared layout primitives (`Container`, `Section`, `Header`, `Footer`), UI primitives (`Button`, `Card`, `ContactCard`, `Eyebrow`, `PlaceholderImage`) and a scroll-reveal motion primitive (`Reveal`) built on Framer Motion.
- Elegant image placeholders (hero, portrait, certification, practice) that preserve final layout until real photography is supplied.
- Contact section wired to real channels: direct WhatsApp chat, WhatsApp community, Instagram and phone.
- Copy is placeholder marketing text reflecting Yuli's philosophy in general terms — it has not been reviewed or confirmed by Yuli and should be revised with her real bio, certification details and voice before launch.

---

# Project Constraints

- Must not include e-commerce functionality (no cart, payments or product catalog).
- Must not include a booking/scheduling system.
- Must render correctly in Hebrew, right-to-left (RTL).
- Visual design must avoid generic/cliché yoga-website aesthetics; it must align with a premium wellness brand tone (Apple / Calm App inspiration).
- Only the logo asset (`IMG/Logo.jpeg`) currently exists. All other imagery must use clearly identifiable placeholders until final assets are supplied.

---

# Current Status

Active Development — the first complete version of the landing page is implemented with placeholder copy and image placeholders. Remaining work: real photography, Yuli's reviewed bio/copy, and content polish before launch.
