---
description: Add polished, consistent documentation comments to Playwright test file(s) via the test-documenter agent
argument-hint: [file-or-folder-path]
---

Invoke the `test-documenter` subagent to document the following target:
`$ARGUMENTS`

If no target was given, ask which file or folder to document rather than
guessing. If a folder is given, the agent should document every test spec
file in it, one at a time.

Remind the agent of its constraints before it starts: comments only, never
change test logic or behavior, and flag (don't fix) any missing assertions
or logic gaps it finds along the way.
