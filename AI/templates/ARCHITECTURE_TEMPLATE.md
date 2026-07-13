# ARCHITECTURE_TEMPLATE.md

# Purpose

This template defines how to create `ARCHITECTURE.md`.

`ARCHITECTURE.md` is the permanent source of truth for the project's technical architecture.

Its purpose is to document the high-level system design so AI assistants and developers can understand how the project is organized without exploring the entire repository.

The document should remain concise, structured and focused on long-term architectural decisions.

Only include verified architectural information.

If important architectural information is missing, ask the developer instead of making assumptions.

Do not duplicate information that belongs in other documentation.

---

# Responsibilities

`ARCHITECTURE.md` should describe:

- Overall system architecture.
- Major application layers.
- Module responsibilities.
- Data flow.
- Important architectural decisions.
- External integrations.
- Dependency boundaries.

It should **not** describe:

- Business requirements.
- Engineering standards.
- Testing strategy.
- Code review rules.
- Low-level implementation details.

Those belong in their respective documents.

---

# Required Structure

Generate `ARCHITECTURE.md` using the following structure.

## Architecture Overview

Provide a high-level description of the system architecture.

Explain how the major parts of the system work together.

---

## System Structure

Describe the major applications or services.

Examples:

- Frontend
- Backend
- API
- Database
- AI Services
- Worker Processes

Only include components that actually exist.

---

## Layer Responsibilities

Describe the responsibility of each architectural layer.

Examples:

- Presentation
- Application
- Domain
- Infrastructure

Focus on responsibilities rather than implementation.

---

## Repository Organization

Describe the main project structure.

Document only the major directories and their responsibilities.

Do not document every folder.

---

## Data Flow

Describe how information flows through the system.

Examples include:

- User requests
- API communication
- Database interactions
- External services

Keep the explanation high level.

---

## External Integrations

Document important external systems.

Examples:

- Authentication providers
- Cloud platforms
- Payment providers
- AI services
- Third-party APIs

Skip this section if none exist.

---

## Architectural Decisions

Document important long-term architectural decisions.

Explain:

- the decision;
- why it was made;
- when relevant, the trade-offs.

Do not document temporary implementation decisions.

---

## Architectural Constraints

Document permanent architectural constraints.

Examples:

- Required frameworks
- Deployment limitations
- Infrastructure requirements
- Performance constraints
- Security constraints

---

# Writing Guidelines

Always:

- Keep the document high level.
- Focus on long-term architecture.
- Explain responsibilities instead of implementation.
- Keep descriptions concise.
- Update existing sections instead of creating new ones.

Never:

- Document individual classes or functions.
- Duplicate information from `PROJECT.md`.
- Duplicate engineering standards.
- Document temporary implementation details.
- Describe planned architecture as current architecture.

---

# Maintenance

`ARCHITECTURE.md` should evolve only when the system architecture changes.

Do not update it for routine implementation work.

The objective is to keep `ARCHITECTURE.md` as the permanent architectural reference for the project.