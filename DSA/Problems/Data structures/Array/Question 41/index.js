//* Valid suduko ---done
//* Time complexity O(9*9)

function isValidSudoku(board) {
  const rows = {};
  const cols = {};
  const squares = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        continue;
      }

      if (
        (rows[r] && rows[r].has(board[r][c])) ||
        (cols[c] && cols[c].has(board[r][c])) ||
        (squares[`${Math.floor(r / 3)}-${Math.floor(c / 3)}`] &&
          squares[`${Math.floor(r / 3)}-${Math.floor(c / 3)}`].has(board[r][c]))
      ) {
        return false;
      }

      if (!rows[r]) {
        rows[r] = new Set();
      }
      if (!cols[c]) {
        cols[c] = new Set();
      }
      if (!squares[`${Math.floor(r / 3)}-${Math.floor(c / 3)}`]) {
        squares[`${Math.floor(r / 3)}-${Math.floor(c / 3)}`] = new Set();
      }

      rows[r].add(board[r][c]);
      cols[c].add(board[r][c]);
      squares[`${Math.floor(r / 3)}-${Math.floor(c / 3)}`].add(board[r][c]);
    }
  }

  return true;
}
