console.log("🚀 client.js loaded");

window.TrelloPowerUp.initialize({
  'board-buttons': function(t) {
    return [{
      text: 'Test Button',
      callback: 'showAlert'
    }];
  },
  'showAlert': function(t) {
    console.log("✅ Test button clicked");
    return t.popup({
      title: "Popup Title",
      url: "./index.html"
    });
  }
});

