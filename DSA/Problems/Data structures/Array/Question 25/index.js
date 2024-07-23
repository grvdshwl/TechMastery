//* Find longest consecutive subsequence --done
//* Time complexity o(n)

function longestConsecutive(nums) {
  const numSet = {};
  let maxLength = 0;

  // Create a set of all numbers in the array
  for (const num of nums) {
    numSet[num] = true;
  }

  for (const num of nums) {
    if (!numSet[num - 1]) {
      let currentNum = num;
      let currentLength = 1;

      while (numSet[currentNum + 1]) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // Output will be 4 for the sequence 1, 2, 3, 4
