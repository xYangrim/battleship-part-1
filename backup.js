const rs = require('readline-sync');

const boardSize = 3;
let board = [];
let shipsRemaining = 2;

function createBoard() {
  for(let i = 0; i < boardSize; i++) {
    board.push(Array(boardSize).fill(false))
  }
}

function displayBoard() {
  console.log(board.map(row => row.map(cell => (cell ? 'S' : '_')).join(' ')).join('\n'));
}


const startGame = rs.keyInPause('Press any key to start... ');


console.log("Game is starting!");

createBoard();
console.log(board);
displayBoard();