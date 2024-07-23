// Pacific Atlantic Water Flow
function pacificAtlantic(heights) {
  let ROWS = heights.length;
  let COLS = heights[0].length;

  let pacificSet = new Set();
  let atlanticSet = new Set();
  let result = [];

  const dfsPacific = (r, c, prev) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= ROWS ||
      c >= COLS ||
      heights[r][c] < prev ||
      pacificSet.has(`${r}-${c}`)
    ) {
      return;
    }

    pacificSet.add(`${r}-${c}`);
    dfsPacific(r + 1, c, heights[r][c]);
    dfsPacific(r - 1, c, heights[r][c]);
    dfsPacific(r, c + 1, heights[r][c]);
    dfsPacific(r, c - 1, heights[r][c]);
  };

  const dfsAtlantic = (r, c, prev) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= ROWS ||
      c >= COLS ||
      heights[r][c] < prev ||
      atlanticSet.has(`${r}-${c}`)
    ) {
      return;
    }

    atlanticSet.add(`${r}-${c}`);
    dfsAtlantic(r + 1, c, heights[r][c]);
    dfsAtlantic(r - 1, c, heights[r][c]);
    dfsAtlantic(r, c + 1, heights[r][c]);
    dfsAtlantic(r, c - 1, heights[r][c]);
  };

  for (let r = 0; r < ROWS; r++) {
    dfsPacific(r, 0, -1);
    dfsAtlantic(r, COLS - 1, -1);
  }

  for (let c = 0; c < COLS; c++) {
    dfsPacific(0, c, -1);
    dfsAtlantic(ROWS - 1, c, -1);
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (pacificSet.has(`${r}-${c}`) && atlanticSet.has(`${r}-${c}`)) {
        result.push([r, c]);
      }
    }
  }

  return result;
}
