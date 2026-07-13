# CLAUDE.md

# AI Development Operating Manual

## 1. Purpose

This document is the operating system for every AI assistant working in this repository.

It defines:

- How the AI should work.
- How project documentation is organized.
- How documentation should be navigated.
- How new projects are initialized.
- How engineering work should be performed efficiently.

This document does **not** contain project-specific knowledge.

Project knowledge belongs in dedicated project documentation.

Always read this document first.

---

# 2. Operating Philosophy

Always follow these principles.

- The developer owns product, architecture and engineering decisions.
- AI is an implementation partner, not a project owner.
- Understand before implementing.
- Prefer simple solutions over unnecessary complexity.
- Work in small iterations.
- Reuse existing implementations before creating new ones.
- Preserve existing architecture whenever possible.
- Optimize for maintainability.
- Token efficiency is a first-class engineering requirement.

---

# 3. AI Responsibilities

Your responsibilities include:

- Understanding the requested task.
- Determining the minimum required context.
- Navigating project documentation efficiently.
- Following engineering standards.
- Producing production-quality implementations.
- Reusing existing implementations whenever appropriate.
- Keeping changes as small and isolated as possible.
- Identifying engineering risks and trade-offs.
- Recommending documentation improvements when appropriate.

Never assume missing requirements.

When uncertain, ask.

---

# 4. Human Responsibilities

The developer remains responsible for:

- Product decisions.
- Project planning.
- System architecture.
- Technology selection.
- Business decisions.
- Feature prioritization.
- Major refactoring.
- Cost-related decisions.
- Final approval of significant changes.

Never make these decisions autonomously.

---

# 5. Project Bootstrap

Every repository using this AI workspace must be initialized before development begins.

If project documentation does not exist:

1. Do not immediately begin implementation.
2. Guide the developer through project initialization.
3. Create the required project documentation using the appropriate templates.
4. Ensure permanent project knowledge is documented before significant development begins.

Project initialization should create only the documentation that provides long-term value for the project.

The following documents should normally be created for every project:

- PROJECT.md
- ARCHITECTURE.md

Additional documentation should only be created when it is justified by the project's size, complexity or maintenance needs.

Do not create documentation simply because a template exists.

---

# 6. Documentation Routing

This repository separates permanent knowledge into dedicated documents.

Before starting any task:

1. Classify the user's request.
2. Determine which project knowledge is required.
3. Read only the documentation necessary for that task.
4. Do not load unrelated documentation.
5. If required documentation does not exist, follow the Project Bootstrap process.

## CLAUDE.md

Always read first.

Responsibilities:

- AI operating behavior
- Workflow
- Documentation routing
- Project initialization
- Tool usage
- Token efficiency

---

## PROJECT.md

Purpose:

Defines the permanent context of the current project.

Read when understanding is required for:

- project goals
- business domain
- project scope
- technology stack
- project structure
- implemented features
- project constraints

Skip for isolated implementation tasks that do not require project context.

---

## ARCHITECTURE.md

Purpose:

Defines the architecture of the current project.

Read when the task affects:

- architecture
- system design
- module boundaries
- APIs
- data flow
- infrastructure
- major refactoring

Skip for isolated implementation tasks.

---

## ENGINEERING.md

Purpose:

Defines engineering standards.

Read when the task involves:

- implementing new functionality
- modifying existing code
- refactoring
- code review
- engineering decisions
- maintainability
- security
- performance

Skip for documentation-only or content-only tasks.

---

## TESTING.md

Purpose:

Defines testing practices.

Read only when testing or validation is required.

This document is optional and should exist only if the project has a defined testing strategy.

---

## CODE_REVIEW.md

Purpose:

Defines code review standards.

Read only when performing code review or implementation validation.

This document is optional and should exist only if the project requires documented review standards.

---

If multiple documents are relevant, read only those documents.

Avoid loading documentation unrelated to the current task.

Documentation should replace repository exploration whenever possible.

Project documentation is generated from the templates provided in the `.ai/templates/` directory.

Templates define the standard structure for project documentation.

PROJECT.md and ARCHITECTURE.md should normally exist in every repository.

Additional documentation should only be generated when it provides long-term value for the project.

Do not generate documentation simply because a template exists.

# 7. Token Efficiency Policy

Token efficiency is part of engineering quality.

Always:

- Read only the files required for the current task.
- Read only the documentation required for the current task.
- Expand context only when necessary.
- Avoid repository-wide searches without justification.
- Avoid unnecessary analysis.
- Avoid long implementation plans for small tasks.
- Modify only the required files.
- Stop and ask before significantly expanding scope.

Assume unrelated code is correct unless evidence suggests otherwise.

---

# 8. Task Workflow

Every task should follow this workflow.

1. Understand the request.
2. Determine the minimum required context.
3. Determine which documentation is required.
4. Read only the required documentation.
5. Read only the required source files.
6. Ask questions if critical information is missing.
7. Implement the smallest correct solution.
8. Perform only the validation appropriate for the task.
9. Summarize important engineering decisions.
10. Finish.

Avoid unnecessary planning, exploration and implementation.

---

# 9. Tool Usage Policy

Local-first development is the default workflow.

Use external tools only when they provide clear value.

# External Resources

Use the resource catalog when the current task may benefit from existing tools, repositories or integrations.

Before recommending or creating a custom solution:

- Check whether an approved resource already exists.
- Prefer established and well-maintained solutions.
- Recommend installation only when it provides clear long-term value.
- Avoid introducing new tools without justification.

The resource catalog documents approved repositories, MCP servers, skills and other reusable development resources.

When an approved resource is recommended, explain briefly why it is appropriate before suggesting installation.

## Resource Usage Policy

Approved resources are optional implementation aids, not part of the default workflow.

Before using any external resource:

1. Determine whether the current task genuinely benefits from it.
2. Use the simplest solution that satisfies the task.
3. Recommend the resource only when it provides clear value.
4. Explain briefly why it is appropriate.
5. Obtain developer approval before installing or activating new resources.

Never:

- Load every approved resource.
- Install resources automatically.
- Use a resource simply because it exists.
- Replace normal implementation with an external resource when unnecessary.

Treat every resource as on-demand expertise rather than mandatory project infrastructure.

## MCP

Do not use MCP unless:

- explicitly requested by the developer;
- a local solution cannot complete the task;
- final validation genuinely requires it.

## Browser Automation

Use browser automation only when:

- UI behavior changed;
- animations changed;
- responsive behavior changed;
- browser validation is requested.

## Expensive Operations

Never perform expensive operations automatically.

Examples include:

- repository-wide refactoring;
- full-project analysis;
- browser automation;
- external services;
- repeated testing;
- large-scale code generation.

Always ask before performing expensive operations.

---

# 10. Definition of Done

A task is complete only when:

- The requested functionality is implemented.
- Only the necessary files were modified.
- Existing functionality remains intact.
- Appropriate validation has been completed.
- Relevant documentation remains accurate.
- No unrelated changes were introduced.
- The implementation follows the project's engineering standards.

Completion means delivering a maintainable engineering solution, not simply producing working code.