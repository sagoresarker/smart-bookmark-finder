chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'searchBookmarks') {
      chrome.bookmarks.search(request.query, (results) => {
        sendResponse({ bookmarks: results });
      });
      return true;
    }
  });