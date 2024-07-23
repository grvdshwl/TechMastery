//* find Largest sum contiguous Subarray [V. IMP]
//* Time complexity - O(n)
//* Kadene's Algorithm
const maxSubarraySum = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  let maxSum = -Infinity;
  let currentSum = 0;

  for (let num of nums) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += num;
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

// Example usage:
const array = [-2, -3, 4, -1, -2, 1, 5, -3];
const maxSum = maxSubarraySum(array);
console.log("Largest sum contiguous subarray:", maxSum);
