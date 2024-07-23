//* Valid Palindrome

var isPalindrome = function (s) {
  s = s
    .trim()
    .replace(/[^0-9a-zA-Z]/g, "")
    .toLowerCase();

  // Reverse the string using built-in methods
  let rev_s = s.split("").reverse().join("");

  // Check if the reversed string is equal to the original string
  return rev_s === s;
};
