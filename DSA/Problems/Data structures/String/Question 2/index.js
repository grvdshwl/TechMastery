//* Longest Common Prefix

//* Write a function to find the longest common prefix string amongst an array of strings.
//* Time complexity of O(n*m)
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
const findPrefix = (str1 = "", str2 = "") => {
  let res = "";

  for (let i = 0; i < str1.length && i < str2.length; i++) {
    if (str1[i] === str2[i]) {
      res += str1[i];
    } else {
      break;
    }
  }

  return res;
};
var longestCommonPrefix = function (strs) {
  let res = null;
  if (strs.length === 1) {
    return strs[0];
  }

  for (let i = 0; i < strs.length; i++) {
    if (res === null) {
      res = findPrefix(strs[i], strs[i + 1]);
    } else {
      res = findPrefix(strs[i], res);
    }
  }

  return res;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
