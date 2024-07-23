function longestPalindromicSubstring(s) {
  const n = s.length;
  if (n === 0) {
    return "";
  }

  // Create a table to store whether substrings are palindromes or not
  const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));

  // Initialize variables to keep track of longest palindrome substring
  let start = 0;
  let maxLength = 1;

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check for substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for substrings of length greater than 2
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i < n - length + 1; i++) {
      const j = i + length - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = length;
      }
    }
  }

  return s.substring(start, start + maxLength);
}

// Test cases
console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd")); // Output: "bb"
