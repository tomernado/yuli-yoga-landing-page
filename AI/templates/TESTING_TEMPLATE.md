# TESTING_TEMPLATE.md

# Purpose

This template defines how to create `TESTING.md`.

`TESTING.md` is the permanent source of truth for the project's testing and validation strategy.

Its purpose is to document how changes should be verified so AI assistants and developers can validate work consistently without guessing the appropriate testing process.

The document should remain concise, practical and focused on long-term testing practices.

Only include verified project-specific testing information.

If important testing information is missing, ask the developer instead of making assumptions.

Do not duplicate information that belongs in other documentation.

---

# Responsibilities

`TESTING.md` should describe:

- The project's testing strategy.
- Available testing tools.
- Validation workflow.
- Build and verification process.
- Manual testing requirements.
- Automated testing capabilities.

It should **not** describe:

- System architecture.
- Engineering standards.
- Business requirements.
- Code review rules.
- Individual test cases.

Those belong in their respective documents.

---

# Required Structure

Generate `TESTING.md` using the following structure.

## Testing Overview

Provide a short overview of how the project is verified.

Explain the overall testing philosophy.

---

## Available Testing Methods

List the testing methods available in the project.

Examples:

- Unit Tests
- Integration Tests
- End-to-End Tests
- Manual Testing
- Visual Verification
- API Testing

Include only methods actually used.

---

## Testing Tools

Document the tools used for validation.

Examples:

- Jest
- Vitest
- Playwright
- Cypress
- Postman
- Bruno
- ESLint
- TypeScript
- Build tools

Only include tools that exist in the project.

---

## Validation Workflow

Describe the normal validation process after implementing a change.

Examples:

- Build project
- Run tests
- Verify affected functionality
- Verify browser behavior
- Check console errors

Keep the workflow practical and project-specific.

---

## Browser Validation

Describe when browser validation is required.

Examples:

- UI changes
- Responsive layout
- Animations
- Navigation
- Forms

If browser automation is used, explain when and why.

---

## Manual Verification

Describe checks that should be performed manually when appropriate.

Examples:

- User flows
- Error handling
- Accessibility
- Responsive behavior
- Performance observations

---

## Testing Constraints

Document important testing limitations.

Examples:

- Missing automated tests
- Environment limitations
- External dependencies
- Third-party services
- API rate limits

---

# Writing Guidelines

Always:

- Keep the document practical.
- Focus on project-specific validation.
- Describe testing workflows.
- Keep the document concise.
- Update existing sections instead of creating new ones.

Never:

- Describe individual test cases.
- Duplicate engineering standards.
- Duplicate architecture.
- Assume testing capabilities that do not exist.
- Recommend tools that are not part of the project.

---

# Maintenance

`TESTING.md` should evolve whenever the project's testing strategy changes.

Do not update it for individual bug fixes or temporary testing procedures.

The objective is to keep `TESTING.md` as the permanent reference for validating changes throughout the project's lifetime.