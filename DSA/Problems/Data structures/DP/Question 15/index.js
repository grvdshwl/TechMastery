/**
 * Shortest Distance in a Binary Maze
 * *Time: O(N2)
 */

function shortestPathBinaryMatrix(grid) {
  const N = grid.length;
  const q = [[0, 0, 1]]; // [r, c, length]
  const visit = new Set(["0,0"]);
  const direct = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  while (q.length) {
    const [r, c, length] = q.shift();
    if (Math.min(r, c) < 0 || Math.max(r, c) >= N || grid[r][c] === 1) {
      continue;
    }

    if (r === N - 1 && c === N - 1) {
      return length;
    }

    for (const [dr, dc] of direct) {
      const newRow = r + dr;
      const newCol = c + dc;
      const newPosition = `${newRow},${newCol}`;

      if (!visit.has(newPosition)) {
        q.push([newRow, newCol, length + 1]);
        visit.add(newPosition);
      }
    }
  }

  return -1;
}

// Example usage:
const grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
const result = shortestPathBinaryMatrix(grid);
console.log(result);
