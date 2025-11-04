//* Longest Repeating character replacement
//* Time complexity ---> O(n*26)

var characterReplacement = function (s, k) {
  let map = {};
  let n = s.length;
  let output = 0;
  let left = 0;
  let right = 0;
  let maxFrequency = 0;
  while (right < n) {
    let char = s[right];
    map[char] = (map[char] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, map[char]);
    if (right - left + 1 - maxFrequency > k) {
      map[s[left]] = map[s[left]] - 1;
      left++;
    }
    output = Math.max(output, right - left + 1);
    right++;
  }
  return output;
};

const inputString = "AABABBA";
const k = 1;
const longestLength = characterReplacement(inputString, k);
console.log(
  "Length of the longest substring with at most k replacements:",
  longestLength
);
