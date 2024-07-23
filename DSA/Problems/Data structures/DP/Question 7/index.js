//* Decode Ways

//* Time complexity --->O(n)

//*Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

function numDecodings(s) {
  if (!s || s[0] === "0") {
    return 0;
  }

  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  //* base case for single digit except 0 like 1,2
  dp[0] = 1;

  //* will always be 1 because any value for second digit 0-9 is ok (10-19)
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (+s[i - 1] > 0) {
      dp[i] += dp[i - 1];
    }

    const twoDigits = +s.slice(i - 2, i);
    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[n];
}

// Test case
const s = "101";
const result = numDecodings(s);
console.log(`Number of ways to decode '${s}': ${result}`);
