# Contributing to DiscordDigest-AI-Summarizer-Browser-Extension

We are thrilled you're considering contributing to **DiscordDigest-AI-Summarizer-Browser-Extension**! Your efforts help us build a more private, efficient, and intelligent Discord experience. As Apex Technical Authority, we uphold the highest standards for code quality, architectural integrity, and user experience. By contributing, you agree to abide by these principles.

## 🚀 Getting Started

To ensure a smooth contribution process, please familiarize yourself with the following guidelines. We operate on a 'Zero-Defect, High-Velocity, Future-Proof' philosophy.

### 📜 Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/CODE_OF_CONDUCT.md). Please read it carefully.

### 💡 How Can I Contribute?

There are many ways you can contribute to DiscordDigest-AI-Summarizer-Browser-Extension:

*   **Reporting Bugs:** If you find a bug, please open an issue using our [bug report template](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/ISSUE_TEMPLATE/bug_report.md).
*   **Suggesting Enhancements:** Have an idea for a new feature or an improvement? Open an issue to discuss it.
*   **Writing Code:** Implement new features, fix bugs, or improve existing code.
*   **Improving Documentation:** Enhance our `README.md`, contributing guidelines, or other project documentation.

## 🛠️ Development Setup

DiscordDigest is a client-side browser extension built with cutting-edge web technologies.

### Prerequisites

Ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (Node Package Manager) or `uv` (our preferred package manager)

### Installation

1.  **Clone the Repository:**
    bash
    git clone https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension.git
    cd DiscordDigest-AI-Summarizer-Browser-Extension
    

2.  **Install Dependencies:**
    We recommend using `uv` for speed and efficiency, but `npm` also works.
    bash
    # Using uv (recommended)
    uv pip install -r requirements.txt # If any Python backend or tools were present, though primarily JS/TS
    uv requirements.txt # For JS/TS, uv install or npm install
    uv install
    
    # Or using npm
    npm install
    

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add any necessary API keys, especially for Google Gemini AI integration (if client-side keys are used or proxies are involved in development).
    ini
    # Example: Google Gemini API Key (if applicable for direct client-side use or testing)
    VITE_GEMINI_API_KEY=your_gemini_api_key_here
    

### Running the Development Server

This project uses Vite and WXT for rapid development.

bash
# Start the development server (for a browser extension, this usually means watching files and building for a browser extension reload)
npm run dev


Follow the instructions from `npm run dev` to load the unpacked extension into your browser (Chrome, Firefox, etc.).

### Building for Production

bash
npm run build

This will generate the production-ready extension files in the `dist/` directory.

## 💻 Coding Guidelines

We adhere to a strict set of coding standards to maintain consistency, performance, and maintainability.

*   **Language:** TypeScript (Strict)
*   **Frameworks:** React (UI), WXT (Extension Development), Vite (Build Tool)
*   **AI Integration:** Google Gemini API (client-side focused)
*   **Architecture:** Feature-Sliced Design (FSD) for clear separation of concerns, scalability, and modularity.
*   **Linting & Formatting:** We use `Biome` for lightning-fast linting and formatting. Please ensure your code passes Biome checks.
    bash
    npm run lint
    npm run format
    
*   **Testing:**
    *   **Unit Tests:** Written with `Vitest` to cover individual components and utility functions.
    *   **End-to-End (E2E) Tests:** Written with `Playwright` to simulate user interactions within the browser extension environment.
    bash
    # Run unit tests
    npm run test:unit
    # Run E2E tests (requires browser installation)
    npm run test:e2e
    # Run all tests
    npm run test
    

## 📝 Commit Messages

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) for clear and standardized commit history. This aids in automated changelog generation and understanding project evolution.

**Examples:**

*   `feat: add Discord message summarization`
*   `fix(ui): resolve summary display overflow`
*   `docs: update contributing guidelines`
*   `chore(deps): upgrade wxt to latest version`

## 📥 Pull Request Guidelines

When submitting a Pull Request (PR), please keep the following in mind:

1.  **Fork the Repository:** Start by forking `https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension`.
2.  **Create a New Branch:** Base your work on the `main` branch and create a new, descriptively named branch (e.g., `feat/summarizer-button`, `fix/login-bug`).
3.  **Atomic Commits:** Make small, focused commits that each address a single concern.
4.  **Descriptive PR Title:** Use a clear and concise title that summarizes the changes.
5.  **Detailed Description:** Provide a comprehensive description of your changes, including:
    *   What problem does this PR solve?
    *   How was it solved?
    *   Any relevant design decisions or architectural considerations.
    *   Screenshots or GIFs for UI changes.
    *   References to related issues (e.g., `Closes #123`).
6.  **Tests:** Ensure all existing tests pass and add new tests for your features or bug fixes. Code coverage should not decrease.
7.  **Linting & Formatting:** Run `npm run lint` and `npm run format` to ensure your code adheres to our style guidelines.
8.  **Review Process:** Your PR will be reviewed by maintainers. Please be responsive to feedback and make necessary adjustments.

### Pull Request Template

Please use our [Pull Request Template](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/PULL_REQUEST_TEMPLATE.md) when submitting your PR.

## 🛡️ Security Vulnerabilities

If you discover a security vulnerability, please report it responsibly following our [Security Policy](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/SECURITY.md).

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the [CC BY-NC 4.0 License](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/LICENSE).