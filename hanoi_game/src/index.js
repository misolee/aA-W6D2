const HanoiGame = require('./game.js');
const HanoiView = require('./toh-view.js');
console.log("we are in main!");

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});