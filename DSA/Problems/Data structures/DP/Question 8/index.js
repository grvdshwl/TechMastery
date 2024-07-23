//* Unique Paths
//* Time complexity ---> O(n)
//* Space complexity ---> O(1)
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of
//  3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

function uniquePaths(m, n) {
  let row = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    let newRow = new Array(n).fill(1);
    for (let j = n - 2; j >= 0; j--) {
      newRow[j] = newRow[j + 1] + row[j];
    }
    row = newRow;
  }

  return row[0];
}

// Example usage:
const m = 3;
const n = 7;
const result = uniquePaths(m, n);
console.log(`Number of unique paths in a ${m}x${n} grid: ${result}`);
