# Personal AI Agents

A small library of personal Claude Code agents for testing/QA work. This
folder is documentation and history for the agents; the agents themselves
live under `.claude/agents/` (and their slash commands under
`.claude/commands/`) so Claude Code can discover and run them.

## Agents

### test-documenter

Documents Playwright/JavaScript test files with polished, consistent
comments. It never changes test logic — comments only.

For each file it touches, it adds:

- A top-of-file JSDoc-style block summarizing what the test does, its flow
  as numbered steps, and any notable locator strategy decisions.
- Inline comments above each logical section (login, navigation, assertions,
  etc.) explaining *why* that step exists, not just what the code does.
- Explanations for non-obvious locator choices — e.g. XPath vs a built-in
  locator, `.filter()` instead of a direct selector, or `.first()`/
  `:visible` used to resolve a Playwright strict-mode violation.
- `// TODO(test-documenter):` flags on missing assertions or logic gaps it
  notices (a locator that's queried but never used, a test with no
  `expect()` calls, an action with no verified outcome). It flags these —
  it does not fix them.
- A closing "Key concepts" comment block summarizing patterns used in the
  file, for learning purposes.

**How to invoke it:**

```
/document-tests tests/practice/filter.spec.js
/document-tests tests/practice
```

Or invoke it directly by name in a prompt, e.g. "use the test-documenter
agent on tests/framework/loginTest.spec.js".

Definition: [`.claude/agents/test-documenter.md`](../.claude/agents/test-documenter.md)
Command: [`.claude/commands/document-tests.md`](../.claude/commands/document-tests.md)

## Roadmap

This is the first agent in the collection. Future additions will likely
cover other repetitive QA tasks (e.g. flaky-test triage, POM scaffolding,
test-coverage gap analysis) as needs come up.
