const longestCommonSubstring = (S1, S2) => {
  const n = S1.length;
  const m = S2.length;

  let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
  let max = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (S1[i] === S2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
        max = Math.max(max, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return max;
};

// Example
const exampleS1 = "abcdefc";
const exampleS2 = "abefcd";
const result = longestCommonSubstring(exampleS1, exampleS2);
console.log(result); // Output: 3 (for the common substring "efc")
