// tic tac toe

var Board = function () {
	this.board = '1|2|3\n4|5|6\n7|8|9\n';
	console.log(this.board);
};

Board.prototype.selectSpot = function(selected) {
  // var input = prompt ('Select spot on board you would like to place your piece');
  var player1 = 1; 
  var player2 = 2;
 	
  // toggle player to see who plays next;
  var input = String(selected);
  	this.board = this.board.replace(input, 'x');
    // run find win function
  console.log(this.board);
  return this.findWin();
};

Board.prototype.findWin = function() {
	// console.log(this.board[0], this.board[8], this.board[16]);
	if (this.board[0] === 'x' && this.board[6] === 'x' && this.board[12] === 'x') {
		console.log('WINNER!');
		return 'x wins!';
	} else if (this.board[1] === 'x' && this.board[7] === 'x' && this.board[13] === 'x') {
		console.log('WINNER!');
		return 'x wins!';
	} else if (this.board[2] === 'x' && this.board[8] === 'x' && this.board[14] === 'x') {
		console.log('WINNER!');
		return 'x wins!';
	} else if (this.board[0] === 'x' && this.board[2] === 'x' && this.board[4] === 'x') {
		console.log('WINNER!');
		return 'x wins!';
	} else if (this.board[6] === 'x' && this.board[8] === 'x' && this.board[10] === 'x') {
		console.log('WINNER!');
		return 'x wins!';
	} else if (this.board[12] === 'x' && this.board[14] === 'x' && this.board[16] === 'x') {
		console.log('WINNER!');
		return 'x wins!';
	} else if (this.board[0] === 'x' && this.board[8] === 'x' && this.board[16] === 'x') {
		console.log('WINNER!');
		return 'x wins!';
	} else if (this.board[4] === 'x' && this.board[8] === 'x' && this.board[12] === 'x') {
		console.log('WINNER!');
		return 'x wins!';
	}
	console.log('No Win yet');
};

var jt = new Board();
jt.selectSpot(2);
jt.selectSpot(5);
jt.selectSpot(8);

// start with empty board
// x always starts (first person)
  // prompt x to select a space
    // click a square which will change the square to an X
    // run the win function to determine a 3 in a row
  // prompt o to select a space
    // click a square which will change the square to an o
    // run the win function to determine a 3 in a row



