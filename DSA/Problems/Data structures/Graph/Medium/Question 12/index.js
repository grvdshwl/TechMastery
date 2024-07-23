//* Snake & Ladder Problem
function snakesAndLadders(board) {
  const length = board.length;
  board.reverse();

  function intToPos(square) {
    const r = Math.floor((square - 1) / length);
    let c = (square - 1) % length;
    if (r % 2) {
      c = length - 1 - c;
    }
    return [r, c];
  }

  const q = [];
  q.push([1, 0]); // [square, moves]
  const visited = new Set();

  while (q.length > 0) {
    const [square, moves] = q.shift();
    for (let i = 1; i <= 6; i++) {
      let nextSquare = square + i;
      const [r, c] = intToPos(nextSquare);
      if (board[r][c] !== -1) {
        nextSquare = board[r][c];
      }
      if (nextSquare === length * length) {
        return moves + 1;
      }
      if (!visited.has(nextSquare)) {
        visited.add(nextSquare);
        q.push([nextSquare, moves + 1]);
      }
    }
  }

  return -1;
}
