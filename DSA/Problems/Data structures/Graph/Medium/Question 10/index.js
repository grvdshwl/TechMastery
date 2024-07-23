//* As Far from Land as Possible

var maxDistance = function (grid) {
    const N = grid.length;
  
    const queue = [];
    let containsZero = false;
  
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (grid[r][c] === 1) {
          queue.push([r, c, 0]);
        } else {
          containsZero = true;
        }
      }
    }
  
    if (queue.length === 0 || !containsZero) {
      return -1;
    }
  
    let directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    let maxDis = -1;
  
    while (queue.length) {
      const [r, c, distance] = queue.shift();
      for (let [dr, dc] of directions) {
        let newRow = dr + r;
        let newCol = dc + c;
  
        if (
          newRow < 0 ||
          newCol < 0 ||
          newRow >= N ||
          newCol >= N ||
          grid[newRow][newCol] !== 0
        ) {
          continue;
        }
        queue.push([newRow, newCol, distance + 1]);
  
        grid[newRow][newCol] = 1;
        maxDis = Math.max(maxDis, distance + 1);
      }
    }
  
    return maxDis;
  };
  