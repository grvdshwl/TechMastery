//*	Max Area of Island
var maxAreaOfIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r > rows - 1 || c > cols - 1 || grid[r][c] !== 1) {
      return 0;
    }
    grid[r][c] = 0;
    return dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1) + 1;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        let area = dfs(r, c);
        maxArea = Math.max(area, maxArea);
      }
    }
  }

  return maxArea;
};
