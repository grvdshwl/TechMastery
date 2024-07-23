//* 	Extra Characters in a String

//* DP Solution

var minExtraChar = function (s, dictionary) {
  const words = new Set(dictionary);

  const dp = {};

  function dfs(i) {
    if (i === s.length) {
      return 0;
    }
    if (i in dp) {
      return dp[i];
    }

    let res = 1 + dfs(i + 1); // skip current char

    for (let j = i; j < s.length; j++) {
      if (words.has(s.substring(i, j + 1))) {
        res = Math.min(res, dfs(j + 1));
      }
    }
    dp[i] = res;
    return res;
  }

  return dfs(0);
};
