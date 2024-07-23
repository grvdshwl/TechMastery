//* Unique Binary Search Trees
var numTrees = function (n) {
  let dp = new Array(n + 1).fill(1);

  for (let root = 2; root < n + 1; root++) {
    let total = 0;
    for (let j = 1; j <= root; j++) {
      let leftSide = dp[j - 1];
      let rightSide = dp[root - j];

      total += leftSide * rightSide;
    }
    dp[root] = total;
  }

  return dp[n];
};
