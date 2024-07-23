//* Pascals Triangle ---> Done
// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:

// Input: numRows = 1
// Output: [[1]]

var generate = function (numRows) {
  let pascalsTriangle = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      let num =
        j === 0 || j === i
          ? 1
          : pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j];
      row.push(num);
    }

    pascalsTriangle.push(row);
  }

  return pascalsTriangle;
};
