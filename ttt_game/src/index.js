const View = require("./ttt-view.js"); // require appropriate file
const Game = require("./game.js"); // require appropriate file

  $(() => {
    let rootEl = $('.ttt');
    let game = new Game();
    new View(game, rootEl);
  });
