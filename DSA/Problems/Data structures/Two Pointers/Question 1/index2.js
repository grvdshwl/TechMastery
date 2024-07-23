//* Valid Palindrome II --done

//* Given a string s, return true if the s can be palindrome after
//* deleting at most one character from it.

function canBePalindromeWithOneDeletion(s) {
  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Try removing either left or right character and check if resulting string is palindrome
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true; // If no mismatch found, the string is already palindrome
}

// Example usage:
console.log(canBePalindromeWithOneDeletion("aba")); // Output: true
console.log(canBePalindromeWithOneDeletion("abca")); // Output: true
console.log(canBePalindromeWithOneDeletion("abc")); // Output: false
