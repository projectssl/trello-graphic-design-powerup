console.log("🚨🚨🚨 THIS IS FROM CLIENT.JS – If you don’t see this, the Power-Up isn’t loading.");

if (typeof window.TrelloPowerUp === 'undefined') {
  console.error("❌ TrelloPowerUp is undefined! Is the Power-Up SDK loaded?");
} else {
  console.log("✅ TrelloPowerUp is available, initializing...");

  window.TrelloPowerUp.initialize({
    'card-buttons': function(t) {
      console.log("🔘 Card button initialized");
      return [{
        icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
        text: '📝 Submit a New Design Request',
        callback: 'openCardForm'
      }];
    },
    'board-buttons': function(t) {
      console.log("📌 Board button initialized");
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
      });
    },
    'openBoardForm': function(t) {
      console.log("🟢 openBoardForm triggered");
      return t.modal({
        url: './index.html',
        fullscreen: false,
        title: 'Submit Design Idea',
        height: 500
      });
    }
  });
}
