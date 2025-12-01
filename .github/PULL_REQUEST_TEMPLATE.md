# Pull Request Template

**Important:** Please ensure you have followed the [Contributing Guidelines](/.github/CONTRIBUTING.md).

## ✨ What's Changed?

*(Briefly describe the main purpose of this Pull Request. What problem does it solve? What new feature does it add?)*

*   **Feature:** *(e.g., Implement AI-powered message summarization)*
*   **Fix:** *(e.g., Resolve rendering issue on Discord mobile view)*
*   **Refactor:** *(e.g., Improve state management for user settings)*
*   **Docs:** *(e.g., Update README with new installation steps)*
*   **Chore:** *(e.g., Update dependencies, CI/CD adjustments)*

## 🚀 Motivation & Context

*(Provide context on why these changes are necessary. Link to relevant issues, discussions, or design documents if applicable.)*

**Issue:** #[Issue Number] (if applicable)

## 🧠 Technical Details

*(Provide a high-level overview of the technical approach taken. Mention any new libraries, patterns, or significant architectural changes.)*

*   **Architecture:** *(e.g., Utilized WXT for Chrome Extension architecture, integrated Gemini API client)*
*   **Key Libraries/Tools:** *(e.g., Vite 7, TypeScript 6.x, Vitest, Biome)*
*   **Patterns:** *(e.g., Applied SOLID principles, CQS for UI interactions)*

## 🧪 How to Test

*(Provide clear, step-by-step instructions on how to test these changes. Be specific about any prerequisites or setup required.)*

1.  **Clone the repository:** `git clone [repository_url]`
2.  **Install dependencies:** `npm install` (or `yarn install`, `pnpm install` if applicable)
3.  **Build the extension:** `npm run build` (or `npm run dev` for development mode)
4.  **Load unpacked extension:** Follow Chrome's guide for loading unpacked extensions in developer mode.
5.  **Testing Steps:**
    *   Navigate to Discord.
    *   Verify summarized messages appear correctly.
    *   Test different summarization modes (Brief, Detailed, Key Takeaways).
    *   Check privacy settings and ensure no data is leaked.
    *   Run unit tests: `npm run test:unit`
    *   Run E2E tests: `npm run test:e2e`

## 📝 Checklist

*(Please check off all the applicable items below.)*

*   [ ] My code adheres to the project's coding standards and practices.
*   [ ] I have added/updated relevant unit or integration tests.
*   [ ] All new and existing tests pass successfully.
*   [ ] I have updated the documentation (README, CONTRIBUTING, etc.) as needed.
*   [ ] I have reviewed and addressed any linting or formatting issues.
*   [ ] I have considered security implications and followed DevSecOps protocols.
*   [ ] The changes do not introduce regressions or break existing functionality.
*   [ ] My code is self-documenting and requires minimal inline comments.
*   [ ] I have ensured the AI Agent Directives in the README are up-to-date.

## 📸 Screenshots (Optional)

*(If applicable, please provide screenshots or GIFs demonstrating the changes.)*

## 🐛 Bug Report (If applicable)

*(If this PR is addressing a bug, please provide details.)*

**Bug:** *(Describe the bug)*

**Steps to Reproduce:**
1.  ...
2.  ...
3.  ...

**Expected Behavior:**
...

**Actual Behavior:**
...
