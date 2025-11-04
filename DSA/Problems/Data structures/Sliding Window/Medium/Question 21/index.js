//*  Find the Longest Semi-Repetitive Substring ---done
var longestSemiRepetitiveSubstring = function (s) {
  let maxCount = 0;

  let left = 0;
  let right = 0;

  let lastRepeatingIndex = null;

  while (right < s.length) {
    if (s[right] === s[right - 1]) {
      if (lastRepeatingIndex) {
        left = lastRepeatingIndex;
      }
      lastRepeatingIndex = right;
    }

    maxCount = Math.max(maxCount, right - left + 1);

    right++;
  }

  return maxCount;
};
