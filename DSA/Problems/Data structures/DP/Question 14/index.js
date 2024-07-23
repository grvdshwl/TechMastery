//* Given an m x n matrix board containing 'X' and 'O',

//* Surrounded Regions
//* capture all regions that are 4-directionally surrounded by 'X'.

var solve = function (board) {
  if (board.length === 0) return null;

  const ROWS = board.length;
  const COLS = board[0].length;

  // Step 1: Capture 'O's on the boundaries using DFS
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (
        board[i][j] === "O" &&
        (i === 0 || i === ROWS - 1 || j === 0 || j === COLS - 1)
      ) {
        dfs(board, i, j);
      }
    }
  }

  // Step 2: Update the board based on captured regions
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (board[i][j] === "T") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }

  return board;
};

function dfs(board, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    board[i][j] !== "O"
  ) {
    return;
  }

  board[i][j] = "T";
  dfs(board, i + 1, j);
  dfs(board, i - 1, j);
  dfs(board, i, j + 1);
  dfs(board, i, j - 1);
}

// Example usage:
const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

solve(board);
console.log(board);
