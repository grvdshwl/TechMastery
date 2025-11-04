//* Minimum Operations to Reduce X to Zero ---done

// Example 1:

// Input: nums = [1,1,4,2,3], x = 5
// Output: 2
// Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

// Example 2:

// Input: nums = [5,6,7,8,9], x = 4
// Output: -1

var minOperations = function (nums, x) {
  let n = nums.length;
  let left = 0;
  let right = 0;

  let total = nums.reduce((acc, num) => acc + num);
  if (total < x) return -1;

  let minMoves = Infinity;

  while (right < n) {
    total -= nums[right];

    while (total < x) {
      total += nums[left];
      left++;
    }

    if (total === x) {
      minMoves = Math.min(n - (right - left + 1), minMoves);
    }

    right++;
  }

  return minMoves === Infinity ? -1 : minMoves;
};

const result = minOperations([1, 1, 4, 2, 3], 5);
console.log(result);
