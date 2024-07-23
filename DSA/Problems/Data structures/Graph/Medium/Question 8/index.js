// Walls and gates
class Solution {
  /**
   * @param {number[][]} grid
   * @returns {number[][]}
   */
  islandsAndTreasure(grid) {
    const N = grid.length;
    const M = grid[0].length;
    const queue = [];

    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    const visited = new Set();

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < M; c++) {
        if (grid[r][c] === 0) {
          queue.push([r, c, 0]);
        }
      }
    }

    while (queue.length) {
      const [r, c, distance] = queue.shift();

      for (const [dr, dc] of directions) {
        const newRow = r + dr;
        const newCol = c + dc;

        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < N &&
          newCol < M &&
          grid[newRow][newCol] > 0 &&
          !visited.has(`${newRow}-${newCol}`)
        ) {
          queue.push([newRow, newCol, distance + 1]);
          grid[newRow][newCol] = distance + 1;
          visited.add(`${newRow}-${newCol}`);
        }
      }
    }

    return grid;
  }
}
