// 	Island Perimeter
var islandPerimeter = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  function getPerimeter(r, c) {
    if (r < 0 || c < 0 || r > rows - 1 || c > cols - 1 || grid[r][c] === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  let moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let perimeter = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        for (let [dr, dc] of moves) {
          let newRow = dr + r;
          let newCol = dc + c;

          let p = getPerimeter(newRow, newCol);
          perimeter += p;
        }
      }
    }
  }

  return perimeter;
};
