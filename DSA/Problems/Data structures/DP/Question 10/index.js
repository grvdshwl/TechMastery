//* Word break Problem[ Very Imp]

//* Time complexity ---> O(n*m)
// Given a string s and a dictionary of strings wordDict,
//  return true if s can be segmented into a space-separated
//  sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple
// times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

const wordBreak = (string, wordDict) => {
  let dp = new Array(string.length + 1).fill(false);
  dp[string.length] = true;

  for (let i = string.length - 1; i >= 0; i--) {
    for (let word of wordDict) {
      if (
        i + word.length <= string.length &&
        string.slice(i, i + word.length) === word
      ) {
        dp[i] = dp[i + word.length];
      }
      if (dp[i]) {
        break;
      }
    }
  }
  return dp[0];
};

const string = "catsandog";
const wordDictonary = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(string, wordDictonary)); // Output: false
