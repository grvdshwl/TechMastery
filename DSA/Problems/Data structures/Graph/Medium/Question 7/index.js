//* 		Shortest Bridge

function shortestBridge(grid) {
  const N = grid.length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function isInvalid(r, c) {
    return r < 0 || r >= N || c < 0 || c >= N;
  }

  const visit = new Set();
  const island = [];

  function dfs(r, c) {
    if (isInvalid(r, c) || visit.has(`${r},${c}`) || !grid[r][c]) {
      return;
    }
    visit.add(`${r},${c}`);
    island.push([r, c]);
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  function bfs() {
    let flips = 0;
    const queue = [...island];
    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of directions) {
          const newRow = r + dr;
          const newCol = c + dc;
          if (isInvalid(newRow, newCol) || visit.has(`${newRow},${newCol}`)) {
            continue;
          }
          if (grid[newRow][newCol]) {
            return flips;
          }
          queue.push([newRow, newCol]);
          visit.add(`${newRow},${newCol}`);
        }
      }
      flips++;
    }
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[r][c]) {
        dfs(r, c);
        return bfs();
      }
    }
  }
}
