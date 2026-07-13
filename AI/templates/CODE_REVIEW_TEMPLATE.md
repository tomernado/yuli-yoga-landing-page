# CODE_REVIEW_TEMPLATE.md

# Purpose

This template defines how to create `CODE_REVIEW.md`.

`CODE_REVIEW.md` is the permanent source of truth for the project's code review standards.

Its purpose is to define a consistent review process so AI assistants and developers evaluate implementations using the same quality criteria.

The document should remain concise, practical and focused on long-term review standards.

Only include project-specific review practices.

Do not duplicate information that belongs in other documentation.

---

# Responsibilities

`CODE_REVIEW.md` should describe:

- Code review expectations.
- Project-specific review priorities.
- Quality validation checklist.
- Common review focus areas.
- Review completion criteria.

It should **not** describe:

- System architecture.
- Business requirements.
- Engineering principles.
- Testing workflows.
- Individual implementation details.

Those belong in their respective documents.

---

# Required Structure

Generate `CODE_REVIEW.md` using the following structure.

## Code Review Overview

Provide a short overview of the project's review philosophy.

Explain the primary objective of code reviews.

---

## Review Priorities

Describe the order in which implementations should be evaluated.

Typical priorities include:

- Correctness
- Architecture
- Security
- Maintainability
- Readability
- Performance
- Consistency

Adjust priorities if the project requires it.

---

## Review Checklist

Define the questions every implementation should satisfy.

Examples:

- Does the implementation solve the requested problem?
- Is the existing architecture preserved?
- Is the solution understandable?
- Is unnecessary complexity avoided?
- Is duplicate logic avoided?
- Are project conventions respected?
- Are security considerations addressed?
- Is the implementation maintainable?

---

## Project-Specific Review Rules

Document review rules that are unique to the project.

Examples:

- Naming conventions
- Folder organization
- API conventions
- UI consistency
- Logging requirements
- Error handling expectations

Only include rules that are specific to this project.

---

## Common Review Risks

Document recurring issues reviewers should watch for.

Examples:

- Breaking architectural boundaries
- Hidden side effects
- Duplicate implementations
- Unnecessary abstractions
- Performance regressions
- Security weaknesses

Include only risks relevant to the project.

---

## Review Completion

Define when a review is considered complete.

Typical completion criteria include:

- Functionality is correct.
- Architecture is preserved.
- Existing behavior is not broken.
- Project conventions are respected.
- Required validation has been completed.
- The implementation is ready for long-term maintenance.

---

# Writing Guidelines

Always:

- Keep the document practical.
- Focus on review criteria.
- Keep the document concise.
- Update existing sections instead of creating new ones.

Never:

- Duplicate engineering standards.
- Duplicate testing procedures.
- Duplicate architecture documentation.
- Describe implementation details.
- Add temporary review comments.

---

# Maintenance

`CODE_REVIEW.md` should evolve only when the project's review standards change.

Do not update it for individual implementations or temporary review feedback.

The objective is to keep `CODE_REVIEW.md` as the permanent reference for evaluating implementation quality throughout the project's lifetime.