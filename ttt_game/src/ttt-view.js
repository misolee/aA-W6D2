class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // let $square = $('<li>');
    let a = this;
    // while (!this.game.isOver()) {
      a.$el.on('click', 'li', (e) => {
        let $square = $(e.currentTarget);
        a.makeMove($square);
      });
    // }
  }

  makeMove($square) {
    this.game.playMove($square.data('pos'));
    $square.html(`${this.game.currentPlayer}`);
    $square.addClass('marked');
    if (this.game.winner()) {
      $square.addClass('marked');
      alert(`Congratulation! ${this.game.currentPlayer} wins!`);
      location.reload();
      // $($square).click(function(){
      // $("<li>").off("click");
      // });
    }
  }

  setupBoard() {
    
    let $grid = $('<ul>');
    $grid.addClass('ttt-grid');
    for(let i = 0; i < 9; i++) {
      let $square = $('<li>');
      // $square.attr('class', 'square');  // 
      $square.addClass('square');
      $square.data('mark', '');
      $square.data('pos', [Math.floor(i / 3), i % 3]);
      console.log($square.data);
      $grid.append($square);
    }
    this.$el.append($grid);
    // $simonlist.append($el)
  }
}

module.exports = View;
