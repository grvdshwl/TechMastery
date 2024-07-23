//* Palindrome Substrings
// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.
// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

//* Time complextity ---> O(n^2) + O(n^2) = 2 O(n^2) = O(n^2)

const countSubstrings = (s) => {
  let result = 0;

  const countPalindromes = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      result++;
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    countPalindromes(i, i); // Odd-length palindromes
    countPalindromes(i, i + 1); // Even-length palindromes
  }

  return result;
};

let input = "aaa";
const result = countSubstrings(input);
console.log(result);
