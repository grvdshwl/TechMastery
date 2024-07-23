//* 	Number of Closed Islands
var closedIsland = function (grid) {
  let ROWS = grid.length;
  let COLS = grid[0].length;

  let islands = 0;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS) {
      return 0;
    }
    if (grid[r][c] === 1) {
      return 1;
    }

    grid[r][c] = 1;

    return Math.min(dfs(r + 1, c), dfs(r - 1, c), dfs(r, c - 1), dfs(r, c + 1));
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 0) {
        islands += dfs(r, c);
      }
    }
  }

  return islands;
};
