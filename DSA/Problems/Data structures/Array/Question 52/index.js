//* Optimal Partition of String ---done

// Example 1:

// Input: s = "abacaba"
// Output: 4
// Explanation:
// Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
// It can be shown that 4 is the minimum number of substrings needed.
var partitionString = function (s) {
  let seen = new Set();
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (seen.has(char)) {
      result++;
      seen = new Set();
      seen.add(char);
    } else {
      seen.add(char);
    }
  }
  // we return +1 because the last substring present in the map will also be counted as a substring;
  return result + 1;
};
