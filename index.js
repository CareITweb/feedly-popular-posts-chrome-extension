
document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.executeScript({
    file: 'feedly.js'
  });
});
