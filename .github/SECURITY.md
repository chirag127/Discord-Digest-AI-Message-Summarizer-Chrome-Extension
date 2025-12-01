# Security Policy

At `Discord-Digest-AI-Message-Summarizer-Chrome-Extension`, we prioritize the security and privacy of our users. This document outlines our security policy and guidelines for reporting vulnerabilities.

## 🛡️ Reporting a Vulnerability

We are committed to resolving security vulnerabilities promptly. If you discover a security issue, we encourage you to report it to us responsibly.

**Please DO NOT open a public GitHub issue.**

### How to Report:

1.  **Email:** Send an email to `security@discorddigest.com` (placeholder, replace with actual email).
2.  **Subject Line:** Use a clear subject line, e.g., "Security Vulnerability Report: [Brief Description]".
3.  **Content:** Include the following information in your report:
    *   **Vulnerability Description:** A detailed explanation of the vulnerability, its potential impact, and classification (e.g., XSS, CSRF, sensitive data exposure).
    *   **Reproduction Steps:** Clear, step-by-step instructions to reproduce the vulnerability. Include screenshots or videos if helpful.
    *   **Affected Version(s):** Specify the extension version(s) where the vulnerability was found.
    *   **Impact:** Describe the potential consequences of the vulnerability.
    *   **Suggested Fix (Optional):** If you have any suggestions for remediation, please include them.
    *   **Your Name/Handle (Optional):** Let us know how you'd like to be credited if the vulnerability is confirmed and fixed.

### Our Commitment:

*   We will acknowledge receipt of your report within 48 hours.
*   We will provide regular updates on the remediation process.
*   We will notify you once the vulnerability is resolved.
*   We commit to timely patching and releasing updates for confirmed vulnerabilities.

## 🔒 Our Security Practices

As a **privacy-first, client-side Chrome Extension**, the `Discord-Digest-AI-Message-Summarizer-Chrome-Extension` is designed with the following security principles:

*   **Zero-Backend Architecture:** User data, including Discord messages and summarization prompts, never leaves the user's browser or our control. All processing, including AI summarization, occurs locally within the browser context using client-side API calls.
*   **Google Gemini API Integration:** Users provide their own Google Gemini API keys, which are stored securely (e.g., in Chrome's `chrome.storage.local` with appropriate encryption where feasible by the browser). The extension **DOES NOT** store, transmit, or have access to your Gemini API key on any external server.
*   **Minimal Permissions:** The extension requests only the necessary Chrome permissions (`activeTab`, `scripting`, `storage`) to function, adhering to the Principle of Least Privilege.
*   **OWASP Top 10 2025:** Our development practices include rigorous input sanitization and validation to mitigate common web application vulnerabilities (e.g., XSS, injection flaws).
*   **Dependency Audits:** We regularly audit our project dependencies for known vulnerabilities using tools like `npm audit` and ensure that all third-party libraries are up-to-date.
*   **Code Review:** All code changes undergo thorough peer review to identify and address potential security flaws.
*   **SBOM Generation:** For every build, a Software Bill of Materials (SBOM) is generated to provide transparency into our supply chain and facilitate rapid response to any newly discovered dependency vulnerabilities.
*   **Error Handling & Resilience:** The extension employs robust error handling mechanisms, including `try-catch-finally` blocks for critical I/O operations, to prevent crashes and ensure a stable user experience even in unexpected scenarios.
*   **Data Protection:** While data is client-side, where applicable, we enforce secure coding practices to protect data at rest within the browser's storage and during any client-side transmission.

## ✅ Best Practices for Users

To further enhance your security when using the extension:

*   **Keep Your Browser Updated:** Ensure your Chrome browser is always running the latest version to benefit from the most recent security patches.
*   **Keep the Extension Updated:** Enable automatic updates for the `Discord-Digest-AI-Message-Summarizer-Chrome-Extension` to receive critical security fixes and new features promptly.
*   **Verify Permissions:** Always review the permissions requested by any Chrome extension before installation.
*   **Protect Your Gemini API Key:** Treat your Google Gemini API key as sensitive information. Do not share it or expose it publicly.

## 📝 License

This project is licensed under the `Creative Commons Attribution-NonCommercial (CC BY-NC)` license. Please refer to the `LICENSE` file for full details.

Your security is our paramount concern. Thank you for helping us maintain a secure environment.