# ARCHITECTURE.md

# Architecture Overview

Yuli Yoga Landing Page is a single-page, frontend-only application built with React and bundled with Vite. There is no backend, database or API — all content is static and rendered client-side from a single build output. The page is composed of sequential content sections presenting the brand and driving visitors toward a single conversion action.

---

# System Structure

- **Frontend:** A single-page React application, built and bundled with Vite.

No backend, API, database or worker processes exist or are planned within the current scope.

---

# Layer Responsibilities

- **Presentation:** A collection of reusable React components, composed into six page sections — Hero, About, Practice, Classes, Testimonials and Contact — plus a persistent Header and Footer. Layout primitives (`Container`, `Section`) and UI primitives (`Button`, `Card`, `ContactCard`, `TestimonialCard`, `Eyebrow`, `PlaceholderImage`) are shared across sections; a `Reveal` motion primitive provides the site's consistent scroll-in behavior.
- **Assets:** Static image assets (logo, photography, placeholders) are organized under `src/assets/images` and bundled as part of the frontend build.

---

# Repository Organization

- `AI/` — AI development operating manual, project documentation, templates and approved resource catalog. Not part of the deployed application.
- `IMG/` — Original source image assets at the repository root (currently only the logo); mirrored into `src/assets/images` for use by the application.
- `src/` — The Vite/React/TypeScript application (see `PROJECT.md` for its internal structure).
- `.github/workflows/` — CI: lints and builds on every push/PR, deploys to GitHub Pages on push to `main`.

---

# Data Flow

The site has no dynamic data flow. All content is bundled at build time and served as static output. There are no runtime API calls, no user data storage, and (in the current scope) no forms submitting to a backend.

---

# Architectural Decisions

- **React + Vite over plain HTML/CSS/JS or Next.js.** Chosen to allow a component-based structure with fast, modern tooling, while staying lighter than Next.js since the project has no need for multi-page routing, server-side rendering or backend features.
- **Hebrew (RTL) as the sole language.** Matches the target audience and avoids the added architectural complexity of a bilingual/RTL-LTR toggle, which is not required by the current scope.
- **No backend, database, booking or e-commerce system.** The site is explicitly a branding and conversion tool, not a transactional platform.
- **Approved resources from the AI resource catalog are consulted only on demand.** They are used only when they provide clear value for the current task, never by default. External resources remain optional.

---

# Architectural Constraints

- Must remain a static, frontend-only application — no backend or database within the current scope.
- Must render correctly right-to-left (RTL) for Hebrew content.
- Must not introduce booking or e-commerce functionality.
- Only `IMG/Logo.jpeg` currently exists as a real asset; all other imagery must use placeholders until final assets are supplied, organized under `src/assets/images`.
- Mobile-first responsive design.
- Accessibility should be considered throughout the implementation.
- Fast loading and performance should remain first-class requirements.
