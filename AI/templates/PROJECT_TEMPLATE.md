# PROJECT_TEMPLATE.md

# Purpose

This template defines how to create `PROJECT.md`.

`PROJECT.md` is the permanent source of truth for the current project.

Its purpose is to provide the minimum project context required for efficient development while avoiding unnecessary repository exploration.

The document should be concise, factual and easy to maintain.

Only include information that is confirmed.

If important information is missing, ask the developer instead of making assumptions.

Do not duplicate information that belongs in other documentation.

---

# Responsibilities

`PROJECT.md` should describe:

- What the project is.
- Why it exists.
- What it does.
- The technologies it uses.
- The current state of the project.
- Important project constraints.

It should **not** describe:

- System architecture.
- Engineering standards.
- Testing strategy.
- Code review rules.
- Implementation details.

Those belong in their respective documents.

---

# Required Structure

Generate `PROJECT.md` using the following structure.

## Project Overview

Provide a short description of the project.

Explain its purpose in one or two paragraphs.

---

## Project Goals

Describe the primary goals of the project.

Focus on long-term objectives rather than implementation details.

---

## Technology Stack

List the technologies currently used.

Include only technologies that are actually part of the project.

Possible categories include:

- Frontend
- Backend
- Database
- Infrastructure
- AI
- Dev Tools

---

## Repository Structure

Briefly describe the repository organization.

Focus only on the major directories and their responsibilities.

Do not document every folder.

---

## Core Features

List the major features currently implemented.

Do not describe planned features.

---

## External Dependencies

List important external services or integrations.

Examples include:

- Authentication providers
- Cloud services
- Payment providers
- Third-party APIs
- AI providers

Skip this section if none exist.

---

## Project Constraints

Document permanent project constraints.

Examples:

- Required technologies
- Budget limitations
- Performance requirements
- Security requirements
- Deployment limitations

Do not include temporary limitations.

---

## Current Status

Provide a short summary of the current development state.

Examples:

- Initial Development
- Active Development
- Feature Complete
- Maintenance
- Production

---

# Writing Guidelines

Always:

- Keep the document concise.
- Use factual information.
- Keep descriptions high level.
- Prefer bullet lists where appropriate.
- Update existing sections instead of creating new ones.

Never:

- Guess missing information.
- Duplicate architecture documentation.
- Duplicate engineering standards.
- Document implementation details.
- Describe future ideas as current functionality.

---

# Maintenance

`PROJECT.md` should evolve with the project.

Update it whenever permanent project knowledge changes.

Do not update it for temporary implementation details.

The objective is to keep `PROJECT.md` as the permanent project context that AI assistants can rely on throughout the project's lifetime.