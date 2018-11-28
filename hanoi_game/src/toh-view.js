class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
    this.render();
    // this.bindEvents();
  }

  render() {
    this.$el.on('click', 'ul', (e) => {
      let $stack1 = $(e.currentTarget);
    });
    this.$el.on('click', 'ul', (e) => {
      let $stack2 = $(e.currentTarget);
    });
    if (this.game.isValidMove($stack1.data('pos'), $stack2.data('pos'))) {
      this.game.move($stack1.data('pos'), $stack2.data('pos'));
    }
  }
  // bindEvents() {
  //   // let $square = $('<li>');
  //   let a = this;
  //   // while (!this.game.isOver()) {
      // a.$el.on('click', 'ul', (e) => {
      //   let $square = $(e.currentTarget);
      //   a.makeMove($square);
  //     });
  //   // }
  // }
// 
//   makeMove($square) {
//     this.game.playMove($square.data('pos'));
//     $square.html(`${this.game.currentPlayer}`);
//     $square.addClass('marked');
//     if (this.game.winner()) {
//       $square.addClass('marked');
//       alert(`Congratulation! ${this.game.currentPlayer} wins!`);
//       location.reload();
//       // $($square).click(function(){
//       // $("<li>").off("click");
//       // });
//     }
//   }
// 
  setupTowers() {
    for(let i = 0; i < 3; i++) {
      let $towers = $('<ul>');
      $towers.addClass('toh-towers' + i);
      
      for(let i = 0; i < 3; i++) {
        let $stackPos = $('<li>');
        $stackPos.addClass('stack');
        $stackPos.data('mark', '');
        $stackPos.data('pos', i);
        $towers.append($stackPos);
      }
      this.$el.append($towers);
      // $simonlist.append($el)
    }
  }
}

module.exports = View;
