//* Valid Palindrome ---done

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing
// all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

const validPalindrome = (s) => {
  const cleanPhrase = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleanPhrase.length - 1;

  while (left < right) {
    if (cleanPhrase[left] !== cleanPhrase[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

let s = "A man, a plan, a canal: Panama";
const result = validPalindrome(s);
console.log(result);
