# AGENTS.md

This file contains concise coding guidelines for automated agents and contributors working in this repository. It collects practical rules we expect code changes to follow so agents can make safe, high-quality edits autonomously.

## Principles (short)

- Be explicit: prefer clear types, explicit interfaces, and self-documenting code.
- Keep things simple: favor small, composable changes over large, risky rewrites.
- Follow repository conventions and documented commands. Don’t invent new scripts without updating package.json and this document.

## TypeScript safety

- Use strict TypeScript types across the codebase.
- Avoid `any`. If a type is genuinely unknown, use `unknown` and narrow it immediately.

- Prefer explicit interfaces and types for:
  - function arguments
  - return values
  - component props

Why: strict types help automated agents make safe edits and reduce runtime surprises.

## React patterns and data flow

- Avoid using `useEffect` for primary data flow or critical side effects unless there is no safer alternative.
- Prefer event-driven updates and explicit handlers triggered by user interactions.
- Strive for predictable, local state management and compose behavior with small hooks or components.

When to use `useEffect`:

- Initialisation side-effects (e.g. subscribing to a well-scoped external API) that are carefully cleaned up.

When to avoid it:

- Replacing explicit event handlers or lifting state just to avoid passing props.

## Code simplicity and maintainability

- If a change grows complex, pause and reconsider the approach.
- Break large features into smaller, reviewable commits.
- Refactor to reduce duplication and improve clarity.
- Prefer composition over inheritance and keep components small and focused.

## Project commands (authoritative)

<!-- Prevent scripts until the hanging commands issue is fixed  -->

Do not run any scripts in the terminal at all. Rely on editor extensions to get compilation information
and to run tests.

<!-- Use the existing project scripts. If you need a new command, update `package.json` and document the change here.

- pnpm check-types — run TypeScript type checks
- pnpm test — run Playwright browser tests
- pnpm lint — run linting and code standard checks
- pnpm format:write — format the codebase

Note: Do not modify build configuration, authentication, or other high-risk settings without explicit approval. -->

## Contact, scope and updates

This file is a living guide for agents and contributors. Small, low-risk edits (component migrations, tests, types, docs) can be made autonomously. Larger or security-sensitive changes (API, build scripts, authentication, architecture) require review and approval.

If you update these guidelines, include a short rationale and date in the commit message so reviewers can see why rules changed.

---

_Last updated: keep the file up to date when repository conventions evolve._
