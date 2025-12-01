# Contributing to Discord-Digest-AI-Message-Summarizer-Chrome-Extension

Thank you for your interest in contributing to Discord-Digest-AI-Message-Summarizer-Chrome-Extension! We welcome contributions from everyone.

## 1. Code of Conduct

Please adhere to our [Code of Conduct](https://github.com/YOUR_USERNAME/Discord-Digest-AI-Message-Summarizer-Chrome-Extension/blob/main/.github/CODE_OF_CONDUCT.md).  We are committed to providing a welcoming and inclusive environment for all contributors.

## 2. How to Contribute

We appreciate all contributions, whether they are bug fixes, new features, documentation improvements, or anything else. Here's how you can contribute:

### 2.1. Found a Bug?

*   **Search for existing issues:** Before opening a new issue, please search the existing issues to see if someone else has already reported the problem.
*   **Create a detailed bug report:** If you can't find an existing issue, open a new issue describing the bug.  Include the following:
    *   A clear and concise description of the bug.
    *   Steps to reproduce the bug.
    *   Expected behavior.
    *   Actual behavior.
    *   Screenshots or screen recordings (if applicable).
    *   Your environment (OS, browser, extension version).

### 2.2. Want to Suggest a Feature?

*   **Search for existing feature requests:** Check the existing issues to see if your feature idea has already been suggested.
*   **Create a detailed feature request:** If your feature idea is new, open a new issue describing the feature.  Include the following:
    *   A clear and concise description of the feature.
    *   Why the feature is valuable.
    *   How the feature might work (if possible).
    *   Screenshots or mockups (if applicable).

### 2.3. Ready to Contribute Code?

1.  **Fork the repository:** Click the "Fork" button on the repository's GitHub page.
2.  **Clone your fork:** `git clone https://github.com/YOUR_USERNAME/Discord-Digest-AI-Message-Summarizer-Chrome-Extension.git`
3.  **Create a new branch:** `git checkout -b feature/your-feature-name` or `git checkout -b fix/your-bug-fix-name`
4.  **Make your changes:**  Write your code, add tests, and update documentation as needed.
5.  **Commit your changes:** Use descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.
    *   `feat: add new feature`
    *   `fix: correct a bug`
    *   `docs: update documentation`
    *   `refactor: code cleanup`
    *   `test: add unit tests`
6.  **Push your changes:** `git push origin your-branch-name`
7.  **Create a pull request:**  Go to the repository's GitHub page and create a pull request from your branch to the `main` branch.  Provide a clear and concise description of your changes in the pull request.

## 3. Development Setup

### Prerequisites

*   Node.js and npm (or yarn/pnpm)
*   A code editor (VS Code recommended) with TypeScript support.

### Installation

1.  Clone the repository: `git clone https://github.com/YOUR_USERNAME/Discord-Digest-AI-Message-Summarizer-Chrome-Extension.git`
2.  Install dependencies: `npm install`

### Running the Extension

1.  Build the extension: `npm run build`
2.  Load the extension in Chrome:
    *   Go to `chrome://extensions/`.
    *   Enable "Developer mode" in the top right corner.
    *   Click "Load unpacked".
    *   Select the `dist` directory in your project.

### Testing

*   Run unit tests: `npm run test`
*   Run E2E tests: `npm run test:e2e` (requires setting up Playwright)

## 4. Code Style & Conventions

*   **TypeScript:** We use TypeScript for all code.
*   **Linting:** We use Biome for linting.  Make sure your code passes the linter before submitting a pull request.  Run `npm run lint`.
*   **Formatting:** We use Biome for formatting. Run `npm run format`.
*   **Commit Messages:** Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

## 5. Branching Model

We use a feature-branch workflow. All changes should be made on a new branch created from `main`.

## 6. Pull Request Guidelines

*   **Keep pull requests focused:** Each pull request should address a single issue or feature.
*   **Write clear and concise descriptions:** Explain what your changes do and why.
*   **Include tests:** Add tests to cover your changes.
*   **Update documentation:** Update any relevant documentation.
*   **Get your code reviewed:** Request a review from other contributors.

## 7. License

By contributing to this project, you agree that your contributions will be licensed under the [CC BY-NC](https://creativecommons.org/licenses/by-nc/4.0/) license.

## 8. Questions?

If you have any questions, please open an issue or contact us.

Thank you for your contributions!  We appreciate your help in making this project better.
