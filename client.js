console.log("🚀 client.js loaded");

if (typeof window.TrelloPowerUp === 'undefined') {
  console.error("❌ TrelloPowerUp is undefined! Check script load order.");
} else {
  console.log("✅ TrelloPowerUp is available, initializing...");

  window.TrelloPowerUp.initialize({
    'card-buttons': function(t) {
      console.log("🔘 Card button initialized");
      return [{
        icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
        text: '📝 Submit a New Design Request',
        callback: 'openCardForm' // Calls manifest entryPoint!
      }];
    },
    'board-buttons': function(t) {
      console.log("📌 Board button initialized");
      return [{
        text: 'Submit a New Idea',
        callback: 'openBoardForm' // Calls manifest entryPoint!
      }];
    }
  });
}

