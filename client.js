console.log("🎉 THIS IS FROM CLIENT.JS — If you don’t see this, the Power-Up isn’t loading.");

// Confirm TrelloPowerUp is defined
if (typeof window.TrelloPowerUp === 'undefined') {
  console.error("❌ TrelloPowerUp is undefined! Power-Up not loaded.");
} else {
  console.log("✅ TrelloPowerUp is available, initializing Power-Up...");

  window.TrelloPowerUp.initialize({
    // Board-level button
    'board-buttons': function (t, options) {
      console.log("📌 board-buttons initializing...");
      return [{
        text: 'Submit a New Idea',
        callback: function (t) {
          console.log("➡️ Board button clicked — opening board form modal...");
          return t.popup({
            title: 'Submit Design Brief',
            url: './index.html',
            height: 400
          });
        }
      }];
    },

    // Card-level button
    'card-buttons': function (t, options) {
      console.log("📌 card-buttons initializing...");
      return [{
        text: '✏️ Submit a New Design Request',
        callback: function (t) {
          console.log("➡️ Card button clicked — opening card form modal...");
          return t.popup({
            title: 'Design Request',
            url: './index.html',
            height: 400
          });
        }
      }];
    }
  });
}

// Catch any global JS errors
window.onerror = function (message, source, lineno, colno, error) {
  console.error("💥 Global error caught:", message + " at " + source + ":" + lineno, error);
};
