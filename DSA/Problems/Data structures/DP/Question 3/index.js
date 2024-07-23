//* Longest Increasing Subsequence

// Given an integer array nums, return the length of the longest strictly increasing
// subsequence

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
//* Time complexity --O(n^2)

function lengthOfLIS(nums) {
  let LIS = new Array(nums.length).fill(1);
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
      }
    }
  }
  return Math.max(...LIS);
}

// Example usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
