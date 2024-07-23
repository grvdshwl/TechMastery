// Surrounded Regions
var solve = function (board) {
  let ROWS = board.length;
  let COLS = board[0].length;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (
        board[r][c] === "O" &&
        (r === 0 || c === 0 || r === ROWS - 1 || c === COLS - 1)
      ) {
        dfs(board, r, c);
      }
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === "T") {
        board[r][c] = "O";
      } else {
        board[r][c] = "X";
      }
    }
  }

  return board;
};

function dfs(board, r, c) {
  if (
    r < 0 ||
    c < 0 ||
    r >= board.length ||
    c >= board[0].length ||
    board[r][c] !== "O"
  ) {
    return;
  }

  board[r][c] = "T";
  dfs(board, r + 1, c);
  dfs(board, r - 1, c);
  dfs(board, r, c - 1);
  dfs(board, r, c + 1);
}
