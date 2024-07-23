// 	Spiral Matrix
var spiralOrder = function (matrix) {
  let rowBegin = 0;
  let colBegin = 0;
  let rowEnd = matrix.length - 1;
  let colEnd = matrix[0].length - 1;

  let result = [];

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    //* Traverse Right

    for (let c = colBegin; c <= colEnd; c++) {
      result.push(matrix[rowBegin][c]);
    }
    rowBegin++;

    //* Traverse Bottom

    if (rowBegin <= rowEnd && colBegin <= colEnd) {
      for (let r = rowBegin; r <= rowEnd; r++) {
        result.push(matrix[r][colEnd]);
      }
    }
    colEnd--;

    //* Traverse Left
    if (rowBegin <= rowEnd && colBegin <= colEnd) {
      for (let c = colEnd; c >= colBegin; c--) {
        result.push(matrix[rowEnd][c]);
      }
    }
    rowEnd--;

    //* Traverse Bottom
    if (rowBegin <= rowEnd && colBegin <= colEnd) {
      for (let r = rowEnd; r >= rowBegin; r--) {
        result.push(matrix[r][colBegin]);
      }
    }
    colBegin++;
  }

  return result;
};
