//* 	Minimum Size Subarray Sum --done

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

var minSubArrayLen = function (target, nums) {
  let min = Infinity;

  let left = 0;
  let right = 0;
  let n = nums.length;
  let total = 0;

  while (right < n) {
    total += nums[right];

    while (total >= target) {
      min = Math.min(min, right - left + 1);
      total -= nums[left];
      left++;
    }

    right++;
  }

  return min === Infinity ? 0 : min;
};
