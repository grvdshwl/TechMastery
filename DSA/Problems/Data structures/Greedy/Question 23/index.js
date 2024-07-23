//* Construct K Palindrome Strings

// Input: s = "annabelle", k = 2
// Output: true
// Explanation: You can construct two palindromes using all characters in s.
// Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"

var canConstruct = function (s, k) {
  let n = s.length;
  if (k > n) {
    return false;
  }
  if (k === n) {
    return true;
  }
  let map = {};

  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  arr = Object.values(map);

  cnt = 0;

  for (i = 0; i < arr.length; i++)
    if (arr[i] % 2 !== 0) {
      cnt++;
    }

  if (cnt <= k) {
    return true;
  } else {
    return false;
  }
};
