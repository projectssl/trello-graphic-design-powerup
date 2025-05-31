// client.js - Trello Power-Up main logic
window.TrelloPowerUp.initialize({

  // Card-level button (appears on the back of a Trello card)
  'card-buttons': function(t, options) {
    console.log('🟢 card-buttons registered');
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
      text: '📝 Submit a New Design Request',
      callback: openCardForm
    }];
  },

  // Board-level button (top right of board)
  'board-buttons': function(t, options) {
    console.log('🟢 board-buttons registered');
    return [{
      text: 'Submit a New Idea',
      callback: openBoardForm
    }];
  }

});

// Opens the modal from the card button
function openCardForm(t) {
  console.log('🔵 openCardForm triggered');
  return t.modal({
    url: './index.html',
    fullscreen: false,
    title: 'Design Brief Form',
    height: 500
  });
}

// Opens the modal from the board button
function openBoardForm(t) {
  console.log('🔵 openBoardForm triggered');
  return t.modal({
    url: './index.html',
    fullscreen: false,
    title: 'Submit Design Idea',
    height: 500
  });
}

