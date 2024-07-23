// Flood Fill

var floodFill = function (image, sr, sc, color) {
  let ROWS = image.length;
  let COLS = image[0].length;

  let prevColor = image[sr][sc];

  if (prevColor === color) {
    return image;
  }

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || image[r][c] !== prevColor) {
      return;
    }
    image[r][c] = color;

    dfs(r + 1, c);
    dfs(r, c + 1);
    dfs(r - 1, c);
    dfs(r, c - 1);
  }

  dfs(sr, sc);
  return image;
};
