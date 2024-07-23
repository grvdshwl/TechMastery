
//* 	Rotting Oranges
var orangesRotting = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let time = 0;
  let fresh = 0;

  let queue = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const orange = grid[r][c];
      if (orange === 1) {
        fresh += 1;
      }
      if (orange === 2) {
        queue.push([r, c]);
      }
    }
  }
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length && fresh > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift();

      for (let [dr, dc] of directions) {
        const newRow = dr + r;
        const newCol = dc + c;

        if (
          newRow < 0 ||
          newCol < 0 ||
          newRow > rows - 1 ||
          newCol > cols - 1 ||
          grid[newRow][newCol] !== 1
        ) {
          continue;
        }
        grid[newRow][newCol] = 2;
        queue.push([newRow, newCol]);
        fresh -= 1;
      }
    }
    time += 1;
  }

  return fresh === 0 ? time : -1;
};
