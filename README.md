# Discord Digest AI: Privacy-First Discord Message Summarizer

[![Build Status](https://img.shields.io/github/actions/workflow/user/your-username/your-repo/main.yml?style=flat-square&logo=githubactions)](https://github.com/your-username/your-repo/actions)
[![Code Coverage](https://img.shields.io/codecov/c/github/your-username/your-repo.svg?style=flat-square&logo=codecov)](https://codecov.io/gh/your-username/your-repo)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6449FF.svg?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Biome](https://img.shields.io/badge/Lint%20&%20Format-Biome.svg?style=flat-square&logo=biome)](https://biomejs.dev/)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-orange.svg?style=flat-square)](http://creativecommons.org/licenses/by-nc/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/your-username/your-repo.svg?style=flat-square&logo=github)](https://github.com/your-username/your-repo/stargazers "Star this repo")

**Discord Digest AI** is a cutting-edge, privacy-first Chrome Extension that leverages **client-side Google Gemini AI** to intelligently summarize unread Discord messages. It provides concise digests, boosting your productivity without ever sending your data to a backend server.

Experience **multi-mode summaries** (Brief, Detailed, Key Takeaways) with a **zero-backend architecture**, ensuring absolute user data privacy and security.

<details>
<summary><strong>🤖 AI Agent Directives & Tech Stack</strong></summary>

## 🤖 AI Agent Directives & Tech Stack (December 2025 Standard)

### 1. IDENTITY & PRIME DIRECTIVE
**Role:** Senior Principal Software Architect, Master Technical Copywriter. **40+ years elite experience**.
**Context:** December 2025. Building for 2026 standards.
**Output Standard:** **EXECUTION-ONLY**. No plans; only executed code, updated docs, applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

### 2. AI ORCHESTRATION & GEMINI PROTOCOL
**Models:** Strictly adheres to the fallback cascade: `gemini-3-pro-preview` -> `gemini-2.5-pro` -> `gemini-2.5-flash` -> `gemini-2.5-flash-lite-preview-09-2025`.
**Settings:** All models are selectable in user configuration.

### 3. CONTEXT-AWARE APEX TECH STACKS (DECEMBER 2025 STANDARDS)
*   **PROJECT TYPE:** WEB / APP / EXTENSION (TypeScript)
*   **Stack:**
    *   **Language:** TypeScript 6.x (Strict)
    *   **Build/Bundle:** Vite 7 (Rolldown)
    *   **Extension Framework:** WXT (Web Extension Tooling)
    *   **State Management:** Signals (Standardized)
    *   **UI Framework (Implied):** React/Vue/Svelte (adaptable, with Vite integration)
*   **Lint/Test:**
    *   **Formatter/Linter:** Biome (Speed & Consistency)
    *   **Unit Testing:** Vitest (Fast, Vite-native)
    *   **E2E Testing:** Playwright (Robust browser automation)

### 4. RECURSIVE PERFECTION LOOP
**Mandate:** Continuous improvement via Analyze -> Fix -> Lint/Format -> Test -> **DECISION GATE** loop. **DO NOT STOP** until the build is perfectly clean.

### 5. CORE ARCHITECTURAL PRINCIPLES
*   **SOLID MANDATE:** SRP, OCP, LSP, ISP, DIP.
*   **MODULARITY:** Feature-First Structure (`features/auth`).
*   **CQS:** Methods are Commands (Action) or Queries (Data), never both.
*   **12-Factor App:** Config in environment; backing services as attached resources.

### 6. CODE HYGIENE & STANDARDS
*   **SEMANTIC NAMING:** Descriptive verbs, `camelCase` (TS), `snake_case` (Python), `PascalCase` (Classes).
*   **CLEAN CODE:** Verticality, Guard Clauses, DRY, KISS. **Zero Comments** (only for "Why").

### 7. RELIABILITY, SECURITY & SUSTAINABILITY
*   **DEVSECOPS:** Zero Trust (OWASP 2025), SBOMs, Fail Fast, Encryption.
*   **EXCEPTION HANDLING:** App never crashes; `try-catch-finally` on I/O; retry logic.
*   **GREEN SOFTWARE:** Rule of Least Power, Efficiency, Lazy Loading.

### 8. COMPREHENSIVE TESTING STRATEGY
*   **FOLDER STRUCTURE:** `src/` for code, `tests/` for tests.
*   **TESTING PYRAMID:** Fast, Isolated, Repeatable (F.I.R.S.T.).
*   **COVERAGE MANDATE:** 1:1 file mapping, Success/Failure/Edge cases. **Zero console errors**.

### 9. UI/UX AESTHETIC SINGULARITY (2026 STANDARD)
*   **VISUAL LANGUAGE:** Liquid Glass + Neo-Brutalist + Material You 3.0. Fluid animations.
*   **PERFORMANCE UX:** INP < 200ms. Optimistic UI.
*   **INTERACTION DESIGN:** Hyper-personalization, Micro-interactions.
*   **HYPER-CONFIGURABILITY:** All features/colors user-configurable.

### 10. DOCUMENTATION & VERSION CONTROL
*   **HERO-TIER README:** BLUF, Live Sync, Visuals, AI Replication Block, **Star ⭐ this Repo**.
*   **ADVANCED GIT:** Context Archaeology, Conventional Commits, Semantic Versioning.

### 11. AUTOMATION SINGULARITY (GITHUB ACTIONS)
*   **CI/CD:** Lint+Test (Push), Audit+SBOM (Security), Release (Versioning+Artifacts), Deps Auto-merge.

### 12. THE ATOMIC EXECUTION CYCLE
**Loop:** Audit -> Research -> Plan -> Act -> Automate -> Docs -> Verify -> **REITERATE** (until clean) -> Commit.

</details>

---

## 🚀 Features

*   **Intelligent Summarization:** Utilizes Google Gemini AI for accurate and context-aware message digests.
*   **Privacy-First, Client-Side:** All AI processing happens directly in your browser. No data leaves your machine.
*   **Multiple Summary Modes:** Choose between Brief, Detailed, or Key Takeaways to suit your needs.
*   **Productivity Boost:** Quickly catch up on unread messages without manual effort.
*   **Seamless Integration:** Works directly within your Discord client via Chrome Extension.
*   **Zero Backend Infrastructure:** Reduces complexity and eliminates privacy risks associated with server-side processing.

---

## 💻 Architecture Overview

```ascii
+---------------------+      +------------------------+
| Chrome Extension    |----->|   Discord DOM          |
| (TypeScript/Vite)   |      |   (Unread Messages)    |
+---------------------+      +-----------+------------+
          |                           |
          | (Client-side API calls)   |
          |                           |
          v                           |
+---------------------+               |
|   Gemini AI (JS)    |               |
| (Local Processing)  |               |
+---------------------+               |
          |                           |
          | (Formatted Summary)       |
          |                           |
          v                           |
+---------------------+               |
| UI Overlay/Injector | <-------------+
| (Highlights/ Digests)|
+---------------------+
```

---

## 🧰 Tech Stack

*   **Language:** TypeScript 6.x
*   **Build Tool:** Vite 7
*   **Extension Framework:** WXT (Web Extension Tooling)
*   **AI Model:** Google Gemini (Client-side JavaScript SDK)
*   **Linting & Formatting:** Biome
*   **Testing:** Vitest (Unit), Playwright (E2E)

---

## 🛠️ Development Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will build the extension in watch mode and provide instructions for loading it into Chrome.

---

## 📜 Scripts

| Script        | Description                                                |
|---------------|------------------------------------------------------------|
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build`| Build the production-ready extension.                      |
| `npm run lint`| Run Biome to lint and format code.                         |
| `npm run test`| Run Vitest for unit and integration tests.                 |
| `npm run test:e2e` | Run Playwright for end-to-end tests.                     |

---

## 💡 Principles

*   **SOLID:** Adherence to Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion principles.
*   **DRY (Don't Repeat Yourself):** Code duplication is minimized through abstraction and reusable components.
*   **KISS (Keep It Simple, Stupid):** Favor straightforward, easily understandable solutions.
*   **YAGNI (You Ain't Gonna Need It):** Avoid adding functionality until it is explicitly required.

---

## 🔒 Security & Privacy

This extension is designed with **privacy as its paramount concern**.

*   **Client-Side AI:** All AI processing, including the interaction with Google Gemini, is performed locally within your browser. Your Discord messages never leave your machine.
*   **No Backend Servers:** We do not operate any backend infrastructure for this extension, eliminating a significant attack surface and privacy risk.
*   **Zero Trust:** All inputs are sanitized, and the extension follows a zero-trust security model.
*   **Dependency Auditing:** Regular security audits of dependencies are performed via CI/CD pipelines.

---

## 🛡️ License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)**. You are free to share and adapt this material for non-commercial purposes, provided you give appropriate credit, provide a link to the license, and indicate if changes were made.

See the [LICENSE](LICENSE) file for more details.

---

## ⭐ Star this Repo!

If you find Discord Digest AI useful, please consider starring this repository on GitHub! Your support helps drive future development and improvements.
