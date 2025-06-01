console.log("🚀 client.js loading...");

window.TrelloPowerUp.initialize({
  'card-buttons': function (t) {
    console.log("🔘 card-buttons initializing...");
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
      text: '📝 Submit a New Design Request',
      callback: openCardForm
    }];
  },

  'board-buttons': function (t) {
    console.log("📌 board-buttons initializing...");
    return [{
      text: 'Submit a New Idea',
      callback: openBoardForm
    }];
  }
});

function openCardForm(t) {
  console.log("🟢 openCardForm triggered");
  return t.modal({
    url: './index.html',
    fullscreen: false,
    title: 'Design Brief Form',
    height: 500
  }).catch(err => {
    console.error("❌ Error opening card modal:", err);
  });
}

function openBoardForm(t) {
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

window.onerror = function (message, source, lineno, colno, error) {
  console.error("🚨 Global error caught:", message, "at", source + ":" + lineno + ":" + colno);
};
