//* Minimum Window substring ---done

// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring of s such that every character in t (including duplicates) is included in the window.

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
//* Time Complexity O(n+m)
var minWindow = function (s, t) {
  let n = s.length;
  let map = {};

  for (let char of t) {
    map[char] = (map[char] || 0) + 1;
  }

  let need = Object.keys(map).length;

  let have = 0;
  let window = {};
  let resultLength = Infinity;
  let result = "";

  let left = 0;
  let right = 0;

  while (right < n) {
    let char = s[right];
    window[char] = (window[char] || 0) + 1;

    if (map[char] === window[char]) {
      have++;
    }

    while (have === need) {
      if (right - left + 1 < resultLength) {
        resultLength = right - left + 1;
        result = s.slice(left, right + 1);
      }
      let leftChar = s[left];
      window[leftChar]--;

      if (map[leftChar] && window[leftChar] < map[leftChar]) {
        have--;
      }
      left++;
    }

    right++;
  }
  return result;
};

const s = "cabwefgewcwaefgcf",
  t = "cae";

console.log(minWindow(s, t));
