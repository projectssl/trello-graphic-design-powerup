window.TrelloPowerUp.initialize({
  'card-buttons': function(t) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
      text: '📝 Submit a New Design Request',
      callback: function(t) {
        return t.modal({
          url: './index.html',
          fullscreen: false,
          title: 'Design Brief Form',
          height: 500
        });
      }
    }];
  },

  'board-buttons': function(t) {
    return [{
      text: 'Submit a New Idea',
      callback: function(t) {
        return t.modal({
          url: './index.html',
          fullscreen: false,
          title: 'Submit Design Idea',
          height: 500
        });
      }
    }];
  }
});
