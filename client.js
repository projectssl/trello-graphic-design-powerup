window.TrelloPowerUp.initialize({
  'card-buttons': function (t) {
    return t.card('name').then(function(card) {
      if (card.name.trim().toLowerCase() === 'start here') {
        return [{
          text: '📝 Submit a New Design Request',
          callback: function(t) {
            return t.modal({
              url: './index.html',
              fullscreen: false,
              title: 'Submit New Design Request'
            });
          }
        }];
      }
      return [];
    });
  },
  'board-buttons': function (t) {
    return [{
      text: 'Submit a New Idea',
      callback: function(t) {
        return t.modal({
          url: './index.html',
          fullscreen: false,
          title: 'Submit New Design Idea'
        });
      }
    }];
  }
});
