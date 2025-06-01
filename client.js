console.log("🚨🚨🚨 THIS IS FROM CLIENT.JS – If you don’t see this, the Power-Up isn’t loading.");

// Confirm TrelloPowerUp is defined
if (typeof window.TrelloPowerUp === 'undefined') {
  console.error("❌ TrelloPowerUp is undefined! Power-Up not loaded.");
} else {
  console.log("✅ TrelloPowerUp is available, initializing Power-Up...");

  window.TrelloPowerUp.initialize({
    'board-buttons': function (t) {
      console.log("📌 board-buttons initializing...");
      return [{
        text: 'Test Button',
        callback: function(t) {
          console.log("✅ Test Button clicked, opening modal...");
          return t.modal({
            url: './index.html',
            fullscreen: false,
            title: 'Test Modal',
            height: 300
          }).catch(err => {
            console.error("❌ Failed to open modal:", err);
          });
        }
      }];
    }
  });
}

// Catch any global JS errors
window.onerror = function (message, source, lineno, colno, error) {
  console.error("🚨 Global error caught:", message, "at", source + ":" + lineno + ":" + colno, error);
};
