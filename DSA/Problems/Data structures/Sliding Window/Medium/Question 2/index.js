//* Longest Repeating character replacement ---done
//* Time complexity ---> O(n*26)

function characterReplacement(s, k) {
  const charCount = {};
  let maxCount = 0;
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    charCount[currentChar] = (charCount[currentChar] || 0) + 1;
    maxCount = Math.max(...Object.values(charCount));

    if (end - start + 1 - maxCount > k) {
      charCount[s[start]]--;
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
const inputString = "AABABBA";
const k = 1;
const longestLength = characterReplacement(inputString, k);
console.log(
  "Length of the longest substring with at most k replacements:",
  longestLength,
);
