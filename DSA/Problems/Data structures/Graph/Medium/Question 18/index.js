//* Word Search
var exist = function (board, word) {
  let ROWS = board.length;
  let COLS = board[0].length;

  let visited = new Set();

  function dfs(r, c, i) {
    if (i === word.length) {
      return true;
    }
    if (
      r < 0 ||
      c < 0 ||
      r >= ROWS ||
      c >= COLS ||
      board[r][c] !== word[i] ||
      visited.has(`${r}-${c}`)
    ) {
      return false;
    }

    visited.add(`${r}-${c}`);

    let result =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    visited.delete(`${r}-${c}`);

    return result;
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};
