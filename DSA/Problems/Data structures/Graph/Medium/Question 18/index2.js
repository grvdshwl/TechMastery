//* Word Search II
//* Brute Force

var findWords = function (board, words) {
  let ROWS = board.length;
  let COLS = board[0].length;

  let visited = new Set();

  function dfs(r, c, i, word) {
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
      dfs(r + 1, c, i + 1, word) ||
      dfs(r - 1, c, i + 1, word) ||
      dfs(r, c + 1, i + 1, word) ||
      dfs(r, c - 1, i + 1, word);

    visited.delete(`${r}-${c}`);

    return result;
  }

  let result = [];

  for (let word of words) {
    outer: for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (dfs(r, c, 0, word)) {
          result.push(word);
          break outer;
        }
      }
    }
  }

  return result;
};
