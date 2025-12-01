
# Discord Digest – AI-Powered Unread Message Summaries Inside Discord Browser Extension

Discord Digest is a high-performance browser extension that allows users to manually summarize unread messages in any Discord server or channel with precision and zero UI disruption. It intelligently detects messages after the last-read divider and generates clean, actionable summaries directly inside the Discord interface.

Built for flexibility, security, and long-term scalability, Discord Digest features dynamic AI model selection, multiple summarization modes, deep customization controls, and persistent summary history backed by MongoDB.

---

## 🚀 Key Features

- Manual one-click summarization of unread Discord messages  
- Automatic detection of messages after the last-read divider  
- Summaries rendered directly inside the Discord UI  
- Multiple summary modes:
  - Brief
  - Detailed
  - Bullet Points
  - Action Items  
- Dynamic AI model selection via Settings (no hardcoded provider)
- Provider-agnostic AI abstraction layer  
- Persistent summary history stored in MongoDB  
- Zero-impact Discord performance footprint  
- Crash-proof UI and fail-safe execution  
- Secure handling of all user data  

---

## 🧠 AI Model System

Discord Digest is fully **provider-agnostic** and does **not** lock users to any single AI model.

- The default model is selected dynamically from the Settings panel  
- The available model list is fetched dynamically and updated without redeploy  
- New AI providers can be added without modifying core logic  
- Gemini, OpenAI, enterprise LLMs, and future providers are all supported  

This guarantees **zero vendor lock-in** and maximum long-term flexibility.

---

## 🧱 Tech Stack

- TypeScript (Strict Mode)
- Browser Extension (Manifest v3)
- WXT Extension Framework
- Vite Build System
- Biome (Linting & Formatting)
- Vitest (Unit Testing)
- Playwright (End-to-End Testing)
- MongoDB (Persistent Summary Storage)

---

## 🔐 Security & Reliability

- Zero-trust input validation  
- Encrypted secrets and API keys  
- No plaintext credential storage  
- Strict runtime sandboxing  
- Fail-fast error handling  
- Automatic retry with exponential backoff  
- The extension never crashes the Discord UI  

---

## 📂 Core Architecture

```

src/
├── features/
│    ├── summarization/
│    ├── model-selection/
│    ├── history/
│    ├── settings/
│    └── ui-injection/
├── core/
│    ├── ai-engine/
│    ├── message-parser/
│    ├── storage/
│    └── security/
├── background/
├── content/
└── tests/

````

---

## ⚙️ Installation (Development)

```bash
git clone https://github.com/your-username/discord-digest-ai-unread-browser-extension.git
cd discord-digest-ai-unread-browser-extension
npm install
npm run dev
````

Then load the unpacked extension inside your browser.

---

## 🧪 Testing

```bash
npm run test
npm run test:e2e
```

* 1:1 mapping between source files and tests
* 100% branch coverage on core logic
* Zero console warnings allowed

---

## 📦 CI/CD

* Automated lint & test on every push
* Automated semantic versioned releases
* Automated non-breaking dependency updates

---

## 📜 License

MIT License

---

## 🧭 Vision

Discord Digest is built for signal over noise. It transforms high-volume Discord conversations into structured, actionable intelligence—without disrupting your workflow.

---

## ⭐ Support the Project

If this project helps you, consider giving it a star on GitHub. It helps the project grow and stay maintained.

```


    -   **background.js:** Manages extension state and user preferences
    -   **env.js:** Handles environment configuration (development/production)

### Backend (Node.js API)

-   **Technology:** Express.js, MongoDB, Google Generative AI
-   **Key Components:**
    -   **server.js:** Main Express server with API endpoints
    -   **summarizer.js:** Handles interaction with Google Gemini-2.0 Flash
    -   **db/connection.js:** Manages MongoDB connection
    -   **models/Summary.js:** MongoDB schema for storing summaries
    -   **services/summaryService.js:** Business logic for summary operations

## Project Structure

```
/discord-summarizer
│── /extension                # Chrome extension code
│   │── /js                   # JavaScript files
│   │   │── background.js     # Background script
│   │   │── content.js        # Content script for Discord interaction
│   │   │── env.js            # Environment configuration
│   │── /css                  # Stylesheets
│   │   │── styles.css        # Extension styles
│   │── /images               # Extension icons
│   │── manifest.json         # Extension manifest
│   │── README.md             # Extension-specific documentation
│
│── /backend                  # Node.js backend for summarization
│   │── /db                   # Database modules
│   │   │── connection.js     # MongoDB connection
│   │── /models               # MongoDB models
│   │   │── Summary.js        # Summary schema and model
│   │── /services             # Business logic
│   │   │── summaryService.js # Summary operations
│   │── server.js             # Express server
│   │── summarizer.js         # Gemini integration
│   │── .env.example          # Example environment variables
│
│── README.md                 # Project documentation
│── .gitignore                # Git ignore file
│── package.json              # Project metadata
```

## Setup

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn
-   MongoDB (local installation or MongoDB Atlas account)
-   Google Generative AI API key

### Backend

1. Navigate to the `backend` directory
2. Copy `.env.example` to `.env` and add your Google Gemini API key
    - Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
    - Sign in with your Google account
    - Click on "Get API key" or "Create API key"
    - Copy the API key and paste it in your `.env` file
3. Set up MongoDB:
    - For local development: Install MongoDB and set `MONGODB_URI` in `.env`
    - For production: Create a MongoDB Atlas account and set the connection string in `.env`
4. Install dependencies: `npm install`
5. Start the server: `npm start`

### Chrome Extension

1. Navigate to the `extension` directory
2. Add your own icons in the `images` folder (icon16.png, icon48.png, icon128.png)
3. Edit `js/env.js` to point to your backend API URL

#### Detailed Chrome Extension Installation Guide

##### Method 1: Loading the Unpacked Extension (Developer Mode)

1. **Prepare the Extension Files**:

    - Make sure you have the complete `extension` directory with all necessary files
    - Ensure `js/env.js` is configured with the correct backend API URL

2. **Open Chrome Extensions Page**:

    - Open Google Chrome
    - Type `chrome://extensions/` in the address bar and press Enter
    - Or navigate through: Chrome menu (three dots) → More Tools → Extensions

3. **Enable Developer Mode**:

    - Look for the "Developer mode" toggle in the top-right corner
    - Switch it to the ON position
    - You should see additional buttons appear: "Load unpacked", "Pack extension", etc.

4. **Load the Extension**:

    - Click the "Load unpacked" button
    - In the file browser that opens, navigate to and select the `extension` folder
    - Click "Select Folder" (Windows/Linux) or "Open" (macOS)

5. **Verify Installation**:

    - The Discord Summarizer extension should now appear in your extensions list
    - You should see the extension icon in the Chrome toolbar (top-right of browser)
    - If you don't see the icon, click the puzzle piece icon and pin the Discord Summarizer extension

6. **Troubleshooting**:
    - If you see any errors, check the extension's details for specific error messages
    - Ensure all required files are present in the extension directory
    - Verify that `manifest.json` is properly formatted

##### Method 2: Creating and Installing a Packed Extension (.crx file)

1. **Pack the Extension**:

    - On the `chrome://extensions/` page with Developer mode enabled
    - Click the "Pack extension" button
    - In the dialog, browse to the `extension` directory for "Extension root directory"
    - Leave "Private key file" empty (for first-time packing)
    - Click "Pack Extension"
    - Chrome will create two files in the parent directory: a `.crx` file (the packed extension) and a `.pem` file (the private key)

2. **Install the Packed Extension**:
    - Locate the `.crx` file that was created
    - Open Chrome and drag the `.crx` file into the Chrome window
    - Confirm the installation when prompted

##### Method 3: Sharing with Others (Non-Developer Installation)

For sharing with team members or other users who don't need to modify the code:

1. **Create a Shareable Package**:

    - Follow Method 2 to create a `.crx` file
    - Share both the `.crx` file and installation instructions

2. **Installation Instructions for Recipients**:
    - Download the `.crx` file
    - Open Chrome and go to `chrome://extensions/`
    - Enable "Developer mode" (top-right toggle)
    - Drag and drop the `.crx` file onto the extensions page
    - Click "Add extension" when prompted

##### Updating the Extension

1. **For Unpacked Extensions (Method 1)**:

    - Make your changes to the extension files
    - Go to `chrome://extensions/`
    - Find Discord Summarizer and click the refresh icon (↻)
    - Or click the "Update" button if available

2. **For Packed Extensions (Methods 2 & 3)**:
    - Make changes to the extension files
    - Create a new `.crx` file using the same private key (`.pem` file)
    - Install the new version as described above

## Usage

### Summarizing Messages

1. Navigate to Discord in your browser
2. When you see unread messages (indicated by the "New Messages" divider), click the "Summarize" button
3. Choose your preferred summarization mode from the dropdown (Brief, Detailed, or Key Takeaways)
4. The summary will appear directly in the Discord chat

### Viewing Summary History

1. Click the "History" button in the Discord interface
2. A list of your past summaries will appear
3. Click on any summary to expand and view its content

## API Endpoints

-   **POST /summarize** - Generate a summary from Discord messages

    -   Request body: `{ messages, mode, style, userId, serverId, channelId }`
    -   Response: `{ summary, summaryId }`

-   **GET /summaries/:userId** - Get summaries for a specific user

    -   Response: `{ summaries: [...] }`

-   **GET /summaries/channel/:serverId/:channelId** - Get summaries for a specific channel

    -   Response: `{ summaries: [...] }`

-   **DELETE /summaries/:summaryId** - Delete a specific summary
    -   Response: `{ success, message }`

## MongoDB Schema

```javascript
// Summary Schema
{
  userId: String,       // Discord user ID
  serverId: String,     // Discord server ID (optional)
  channelId: String,    // Discord channel ID (optional)
  summary: String,      // Generated summary text
  mode: String,         // Summary mode (brief, detailed, key_takeaways)
  style: String,        // Summary style (bullets, paragraphs)
  messages: [{          // Array of original messages
    author: String,     // Message author
    text: String,       // Message content
    timestamp: Date     // Message timestamp
  }],
  createdAt: Date       // Summary creation timestamp
}
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the LICENSE file for details.

## Troubleshooting

### Common Issues and Solutions

#### "Content script not ready. Please refresh the Discord tab."

This error occurs when the popup tries to communicate with the content script, but the content script isn't properly loaded in the Discord tab.

**Solutions:**

1. **Refresh the Discord Tab**

    - This is the simplest solution and often works
    - Go to your Discord tab and press F5 or click the refresh button
    - After the page reloads, try using the extension again

2. **Make Sure You're on Discord**

    - Ensure you're on a Discord website (discord.com)
    - The extension only works on Discord pages

3. **Check Extension Permissions**

    - Go to `chrome://extensions/`
    - Find Discord Summarizer and click "Details"
    - Make sure "Site access" is set to "On all sites" or at least includes Discord

4. **Restart Chrome**
    - Sometimes a full browser restart is needed
    - Close and reopen Chrome, then try again

#### "Error getting Discord user ID"

This error occurs when the extension can't extract your Discord user ID from the page.

**Solutions:**

1. **Make Sure You're Logged In**

    - Verify you're logged into Discord
    - Try logging out and back in

2. **Refresh the Discord Tab**

    - Refresh the page to ensure all Discord data is properly loaded

3. **Clear Browser Cache**

    - Go to Chrome settings → Privacy and security → Clear browsing data
    - Select "Cached images and files" and clear them

4. **Update to Latest Version**
    - The latest version includes a robust fix for user ID parsing issues
    - The fix handles various token formats and provides fallback mechanisms
    - Even if your Discord token can't be parsed, the extension will generate a temporary ID

**Technical Note:** Recent updates have significantly improved the user ID extraction process with better base64 handling, URL-safe character conversion, and multiple fallback mechanisms.

#### Extension Not Appearing in Discord

**Solutions:**

1. **Check Extension Installation**

    - Go to `chrome://extensions/` and verify the extension is enabled

2. **Verify Content Script Permissions**

    - Check that the extension has permissions for Discord domains

3. **Reinstall the Extension**
    - Remove the extension and install it again following the installation guide

#### Backend Connection Issues

**Solutions:**

1. **Check Backend Server**

    - Verify the backend server is running
    - Check the console for any connection errors

2. **Verify API URL**

    - Make sure the API URL in `js/env.js` is correct
    - Ensure the backend server is accessible from your browser

3. **Check Network Connectivity**
    - Open Chrome DevTools (F12) → Network tab
    - Look for failed requests to your backend API

## Acknowledgements

-   [Google Generative AI](https://ai.google.dev/) for the Gemini-2.0 Flash model
-   [Discord](https://discord.com/) for the messaging platform
-   [MongoDB](https://www.mongodb.com/) for the database
