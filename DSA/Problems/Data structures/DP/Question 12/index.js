//* Longest common Subsequence
//* Time complexity O(n*m)
function longestCommonSubsequence(text1, text2) {
  const dp = new Array(text1.length + 1)
    .fill(0)
    .map(() => new Array(text2.length + 1).fill(0));

  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][0];
}

// Example usage:
const text1 = "abcde";
const text2 = "ace";
const result = longestCommonSubsequence(text1, text2);
console.log(result); // Output the length of the longest common subsequence
