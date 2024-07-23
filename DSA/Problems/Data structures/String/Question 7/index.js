//* Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of
// the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
const longestPalindrome = function (s) {
  const charCount = {};
  let result = 0;

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] === 2) {
      result += 2;
      charCount[char] = 0;
    }
  }

  if (result < s.length) {
    result++;
  }

  return result;
};

let s = "abccccdd";
const result = longestPalindrome(s);
console.log(result);
