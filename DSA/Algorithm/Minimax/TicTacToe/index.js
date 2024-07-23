const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const EMPTY = " ";
const HUMAN = "X";
const AI = "O";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function createBoard() {
  return Array(9).fill(EMPTY);
}

function printBoard(board) {
  for (let i = 0; i < 9; i += 3) {
    console.log(board.slice(i, i + 3).join(" "));
  }
  console.log("\n");
}

function isBoardFull(board) {
  return !board.includes(EMPTY);
}

function checkWin(board, player) {
  for (const [a, b, c] of winningCombinations) {
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }
  return false;
}

function minimax(board, player) {
  const availableMoves = board.reduce((moves, cell, index) => {
    if (cell === EMPTY) {
      moves.push(index);
    }
    return moves;
  }, []);

  if (checkWin(board, HUMAN)) {
    return { score: -1 };
  } else if (checkWin(board, AI)) {
    return { score: 1 };
  } else if (availableMoves.length === 0) {
    return { score: 0 };
  }

  const moves = [];
  for (let i = 0; i < availableMoves.length; i++) {
    const move = {};
    move.index = availableMoves[i];
    const currentCell = board[availableMoves[i]];

    board[availableMoves[i]] = player;
    if (player === AI) {
      const result = minimax(board, HUMAN);
      move.score = result.score;
    } else {
      const result = minimax(board, AI);
      move.score = result.score;
    }
    board[availableMoves[i]] = currentCell;

    moves.push(move);
  }

  let bestMove;
  if (player === AI) {
    let bestScore = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}

function getHumanMove(board, callback) {
  rl.question("Enter your move (1-9): ", (input) => {
    const move = parseInt(input) - 1;
    if (move >= 0 && move < 9 && board[move] === EMPTY) {
      callback(move);
    } else {
      console.log("Invalid move. Please try again.");
      getHumanMove(board, callback);
    }
  });
}

function playGame() {
  const board = createBoard();
  printBoard(board);

  const isHumanFirst = Math.random() < 0.5;

  if (isHumanFirst) {
    console.log("You go first (X).");
    playTurn(board, HUMAN);
  } else {
    console.log("AI goes first (O).");
    playTurn(board, AI);
  }
}

function playTurn(board, player) {
  if (player === HUMAN) {
    getHumanMove(board, (move) => {
      makeMove(board, move, HUMAN);
      if (checkWin(board, HUMAN)) {
        printBoard(board);
        console.log("You win!");
        rl.close();
      } else if (isBoardFull(board)) {
        printBoard(board);
        console.log("It's a draw!");
        rl.close();
      } else {
        printBoard(board);
        playTurn(board, AI);
      }
    });
  } else {
    const aiMove = minimax(board, AI).index;
    makeMove(board, aiMove, AI);
    if (checkWin(board, AI)) {
      printBoard(board);
      console.log("AI wins!");
      rl.close();
    } else if (isBoardFull(board)) {
      printBoard(board);
      console.log("It's a draw!");
      rl.close();
    } else {
      printBoard(board);
      playTurn(board, HUMAN);
    }
  }
}

function makeMove(board, move, player) {
  board[move] = player;
}

playGame();
