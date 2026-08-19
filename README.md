# Playwright JS Automation Framework

A structured, accessible framework for browser automation with [Playwright](https://playwright.dev/) using JavaScript. It's built to be clear enough for anyone to clone, set up, and understand — a solid, well-documented foundation for UI test automation that's designed to grow into a full-featured framework covering API testing, data validation, and Page Object Model architecture.

## Tech Stack

- **Playwright** — cross-browser automation (Chromium, Firefox, WebKit)
- **JavaScript (ES Modules)** — test scripting language
- **Node.js** — JavaScript runtime

## Prerequisites

You'll need **Node.js** and **npm** (npm comes bundled with Node.js) installed before setting up this project. Using a version manager (like `nvm`) is recommended over installing Node directly, since it lets you manage multiple Node versions cleanly.

### macOS

1. Install `nvm` (Node Version Manager):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.6/install.sh | bash
   ```
2. Restart your terminal, or run:
   ```bash
   source ~/.zshrc
   ```
3. Install and set the latest LTS (Long-Term Support) version of Node:
   ```bash
   nvm install --lts
   nvm alias default lts/*
   ```
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Windows

1. Install `nvm-windows` (a separate Windows-specific implementation of nvm):
   - Download the latest installer from the [nvm-windows releases page](https://github.com/coreybutler/nvm-windows/releases) (`nvm-setup.exe`)
   - Run the installer and follow the setup wizard
2. Open a new PowerShell or Command Prompt window and install the latest LTS version of Node:
   ```powershell
   nvm install lts
   nvm use lts
   ```
3. Verify installation:
   ```powershell
   node --version
   npm --version
   ```

### Linux

1. Install `nvm`:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.6/install.sh | bash
   ```
2. Restart your terminal, or run (adjust for your shell if not using bash):
   ```bash
   source ~/.bashrc
   ```
3. Install and set the latest LTS version of Node:
   ```bash
   nvm install --lts
   nvm alias default lts/*
   ```
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

## Project Setup

Once Node.js and npm are installed, set up the project:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samsh444/playwright-js-automation-framework.git
   cd playwright-js-automation-framework
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```
   This reads `package.json` and downloads everything the project needs (including Playwright itself) into a local `node_modules` folder.

3. **Install Playwright's browser binaries:**
   ```bash
   npx playwright install
   ```
   This downloads the actual browser engines (Chromium, Firefox, WebKit) that Playwright drives during tests. This step is separate from `npm install` and is required even after cloning an existing project.

## Running Tests

### Optional: VS Code Extension

If you're using VS Code as your IDE, installing the official [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension is highly recommended. It adds:

- Inline **Run** / **Debug** buttons directly above each test in the editor, letting you run a single test without touching the terminal
- A browser picker to run against Chromium, Firefox, or WebKit individually
- **UI Mode** — a visual test runner with time-travel debugging, DOM snapshots at each step, and a watch mode that reruns tests as you edit
- One-click access to the trace viewer for failed test runs

The CLI commands below work with or without the extension — it's a convenience layer on top of the same Playwright test runner.

**Run all tests (headless — no visible browser window):**
```bash
npx playwright test
```

**Run all tests in headed mode (watch the browser interact live):**
```bash
npx playwright test --headed
```

**Run a specific test file:**
```bash
npx playwright test tests/practice/firstTest.spec.js
```

**View the last HTML test report:**
```bash
npx playwright show-report
```

## Project Structure

```
playwright-js-automation-framework/
├── .claude/                 # Claude Code agents and slash commands
├── agents/                  # Documentation for this repo's AI agents
├── pages/                   # Page Object Model classes (one per app page/component)
├── tests/                   # All test spec files
│   ├── framework/           # Core, reusable framework tests
│   └── practice/            # Tutorial and exercise tests for learning locators/features
├── playwright-report/       # Generated HTML test reports (git-ignored)
├── test-results/            # Generated test run artifacts (git-ignored)
├── playwright.config.js     # Playwright configuration (browsers, timeouts, etc.)
├── package.json             # Project dependencies and metadata
└── .gitignore                # Files/folders excluded from version control
```

## AI Agents

This repo includes a small set of Claude Code agents for repetitive framework tasks — starting with a test-documentation agent that adds consistent, polished comments to test files on request. See [`agents/README.md`](agents/README.md) for details on what's available and how to run them.

## Notes

- Browser projects configured: **Chromium**, **Firefox**, **WebKit** (Safari's engine)
- This project is under active development — structure and conventions will continue to evolve as Page Object Model architecture, API testing, and data validation are introduced.
