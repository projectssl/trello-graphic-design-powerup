console.log("🚀 client.js loaded");

// Check if TrelloPowerUp is available
if (typeof window.TrelloPowerUp === 'undefined') {
  console.error("❌ TrelloPowerUp is undefined! Is the script loaded too early?");
} else {
  console.log("✅ TrelloPowerUp is available, initializing Power-Up...");

  window.TrelloPowerUp.initialize({
    'card-buttons': function(t) {
      console.log("🔘 Initializing card-buttons");
      return [{
        icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
        text: '📝 Submit a New Design Request',
        callback: 'openCardForm'
      }];
    },
    'board-buttons': function(t) {
      console.log("📌 Initializing board-buttons");
      return [{
        text: 'Submit a New Idea',
        callback: 'openBoardForm'
      }];
    },
    'openCardForm': function(t) {
      console.log("🟢 openCardForm triggered");
      return t.modal({
        url: './index.html',
        fullscreen: false,
        title: 'Design Brief Form',
        height: 500
      }).catch(err => {
        console.error("❌ Error opening card modal:", err);
      });
    },
    'openBoardForm': function(t) {
      console.log("🟢 openBoardForm triggered");
      return t.modal({
        url: './index.html',
        fullscreen: false,
        title: 'Submit Design Idea',
        height: 500
      }).catch(err => {
        console.error("❌ Error opening board modal:", err);
      });
    }
  });
}
