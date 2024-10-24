let panel = null;
let isMinimized = false;

function createSidePanel() {
  if (panel) {
    panel.remove();
  }

  panel = document.createElement('div');
  panel.id = 'bookmark-panel';
  panel.className = 'bookmark-sidebar';
  document.body.appendChild(panel);

  // Create restore button
  const restoreBtn = document.createElement('button');
  restoreBtn.id = 'restore-button';
  restoreBtn.innerText = '📑';
  restoreBtn.style.display = 'none';
  document.body.appendChild(restoreBtn);

  restoreBtn.addEventListener('click', () => {
    panel.style.display = 'block';
    restoreBtn.style.display = 'none';
  });

  return panel;
}

function getSearchQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('q');
}

function displayBookmarks(bookmarks, panel) {
  panel.innerHTML = `
    <div class="bookmark-header">
      <div class="header-title">
        <h2>Related Bookmarks (${bookmarks.length})</h2>
      </div>
      <div class="header-controls">
        <button id="minimize-btn" title="Minimize">_</button>
        <button id="close-btn" title="Close">×</button>
      </div>
    </div>
    <div class="bookmarks-list">
      ${bookmarks.length > 0 ?
        `<ul>${bookmarks.map(bookmark => `
          <li class="bookmark-item">
            <a href="${bookmark.url}" target="_blank">
              ${bookmark.title || bookmark.url}
            </a>
          </li>
        `).join('')}</ul>` :
        '<p class="no-bookmarks">No related bookmarks found</p>'
      }
    </div>
  `;

  // Add event listeners for controls
  const minimizeBtn = panel.querySelector('#minimize-btn');
  const closeBtn = panel.querySelector('#close-btn');
  const restoreBtn = document.getElementById('restore-button');

  minimizeBtn.addEventListener('click', () => {
    isMinimized = !isMinimized;
    panel.style.transform = isMinimized ? 'translateX(290px)' : 'translateX(0)';
  });

  closeBtn.addEventListener('click', () => {
    panel.style.display = 'none';
    restoreBtn.style.display = 'block';
  });
}

async function searchAndDisplayBookmarks(query) {
  try {
    const response = await new Promise((resolve) => {
      chrome.runtime.sendMessage(
        { action: 'searchBookmarks', query: query },
        (response) => resolve(response)
      );
    });

    if (response && response.bookmarks) {
      displayBookmarks(response.bookmarks, panel);
    }
  } catch (error) {
    console.error('Error:', error);
    panel.innerHTML = '<p class="error">Error loading bookmarks</p>';
  }
}

function init() {
  panel = createSidePanel();
  panel.innerHTML = '<p>Loading bookmarks...</p>';

  const query = getSearchQuery();
  if (query) {
    searchAndDisplayBookmarks(query);
  } else {
    panel.innerHTML = '<p class="error">No search query found</p>';
  }
}

// Initialize when page loads
init();