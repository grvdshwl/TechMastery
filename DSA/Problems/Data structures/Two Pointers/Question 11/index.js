//* Merge Strings Alternately --done

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    result += word1[i];
    result += word2[j];
    i++;
    j++;
  }

  while (i < word1.length) {
    result += word1[i];

    i++;
  }

  while (j < word2.length) {
    result += word2[j];

    j++;
  }
  return result;
};
