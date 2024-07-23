//* Longest Common Prefix -done
// Function to find the longest common prefix among an array of strings
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    prefix = commonPrefix(prefix, strs[i]);
    if (prefix === "") break; // If no common prefix, exit loop
  }

  return prefix;
}

// Function to compare two substrings and get the common prefix
function commonPrefix(str1, str2) {
  let prefix = "";
  let minLength = Math.min(str1.length, str2.length);

  for (let i = 0; i < minLength; i++) {
    if (str1[i] !== str2[i]) break;
    prefix += str1[i];
  }

  return prefix;
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
