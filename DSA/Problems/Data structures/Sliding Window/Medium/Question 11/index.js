//* Maximum Number of Vowels in a Substring of Given Length
//* Time complexity - O(n) ---done
var maxVowels = function (s, k) {
  let vowels = ["a", "e", "i", "o", "u"];
  let maxCount = 0;
  let count = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (vowels.includes(s[right])) {
      count += 1;
    }

    if (right - left + 1 > k) {
      if (vowels.includes(s[left])) {
        count -= 1;
      }
      left++;
    }

    maxCount = Math.max(maxCount, count);
    right++;
  }

  return maxCount;
};
let result = maxVowels("abciiidef", 3);
console.log(result);
