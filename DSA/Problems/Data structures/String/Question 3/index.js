//* 	Unique Length 3 Palindromic Subsequences

//* Complexity

// Time complexity: O(26 ∗ (n+n+n)) → O(n)
// Space complexity: O(26) -> O(1)

const countPalindromicSubsequence = (s) => {
  let result = 0;
  const uniqueChars = new Set(s); // O(n)

  for (const char of uniqueChars) {
    // O(n)
    const left = s.indexOf(char); // O(n)
    const right = s.lastIndexOf(char); // O(n)

    if (left < right) {
      result += new Set(s.slice(left + 1, right)).size; // O(n)
    }
  }

  return result;
};

// Test Cases
console.log(countPalindromicSubsequence("aabca")); // Output: 3
console.log(countPalindromicSubsequence("")); // Output: 0
console.log(countPalindromicSubsequence("a")); // Output: 0
console.log(countPalindromicSubsequence("aaa")); // Output: 1
console.log(countPalindromicSubsequence("abcabcabc")); // Output: 6
