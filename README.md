# Smart Bookmark Finder

Smart Bookmark Finder is a Chrome extension that displays relevant bookmarks alongside your Google search results. It helps you quickly access your already added items in your bookmarks related to your current search query.

## Minimal UI (for personal use only)
![Screenshot](/images/minimal-ui.png)
*Minimal UI*

## Features

- **Sidebar Display:** Shows a sidebar with related bookmarks when you perform a Google search.
- **Minimize and Restore:** Easily minimize the bookmark panel and restore it when needed.
- **Responsive Design:** Stylish and user-friendly interface for an optimal experience.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sagoresarker/smart-bookmark-finder.git
   ```
2. **Load the Extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** using the toggle in the top right corner.
   - Click on **Load unpacked** and select the cloned project directory.
3. **Activate the Extension:**
   - Once loaded, the extension will automatically activate on Google search pages.

## Usage

1. **Perform a Google Search:**
   - Enter your query as usual in the Google search bar.
2. **View Bookmarks Sidebar:**
   - A sidebar will appear on the right, displaying bookmarks related to your search query.
3. **Interact with Bookmarks:**
   - Click on any bookmark to navigate directly to the page.
   - Use the minimize button to hide the sidebar and the restore button to show it again.

## Project Structure

- **`manifest.json`**: Configuration file for the Chrome extension.
- **`content.js`**: Injects the bookmark panel into Google search pages and handles interactions.
- **`background.js`**: Manages background tasks such as searching bookmarks.
- **`styles.css`**: Styles for the bookmark sidebar and related UI elements.
- **`popup.html`**: HTML file for the extension's popup interface.

## Notes

- This extension is designed for personal use and is not available on any marketplace.
- Feel free to use and modify it as needed for your personal use.