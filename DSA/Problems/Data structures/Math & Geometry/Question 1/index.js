// 	Rotate Image
var rotate = function (arr) {
  //* Transpose of matrix is converting rows to colums and columsn to rows
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr[i].length; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].reverse();
  }
  return arr;
};
