//* Minimum Deletions to Make Character Frequencies Unique

var minDeletions = function (s) {
  const map = {};

  // Step 1: Calculate character frequencies
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = (map[char] || 0) + 1;
  }

  const countSet = new Set();

  let res = 0;

  // Step 2: Calculate the minimum deletions required
  for (const key in map) {
    let count = map[key];

    while (count > 0 && countSet.has(count)) {
      // If the current frequency is already used, decrement it
      count--;
      res++;
    }

    // Mark the current frequency as used
    countSet.add(count);
  }

  return res;
};
