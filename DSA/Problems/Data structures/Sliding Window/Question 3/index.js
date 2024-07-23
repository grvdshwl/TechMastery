//* Longest substring without reapeating characters ---done
//* Time complexity ---> O(n)
function longestSubstringWithoutRepeatingCharacters(s) {
  const n = s.length;
  let maxLength = 0;
  let start = 0;
  let end = 0;
  const charSet = new Set();

  while (end < n) {
    const currentChar = s[end];

    if (!charSet.has(currentChar)) {
      charSet.add(currentChar);
      maxLength = Math.max(maxLength, end - start + 1);
      end++;
    } else {
      charSet.delete(s[start]);
      start++;
    }
  }

  return maxLength;
}

// Example usage:
const inputString = "abcabcbb";
const longestLength = longestSubstringWithoutRepeatingCharacters(inputString);
console.log(
  "Length of the longest substring without repeating characters:",
  longestLength,
);
