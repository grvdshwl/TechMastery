//* Longest Palindromic Substring
const longestPalindrome = function (s) {
  let maxLength = 0;
  let result = "";
  function isPalindrome(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        result = s.slice(left, right + 1);
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }

  return result;
};
