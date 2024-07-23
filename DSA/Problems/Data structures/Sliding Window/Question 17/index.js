//* Max Consecutive Ones III --done

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]

var longestOnes = function (nums, k) {
  let n = nums.length;
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let total = 0;

  while (right < n) {
    let num = nums[right];
    if (num === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    total = Math.max(total, right - left + 1);

    right++;
  }
  return total;
};
let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
const result = longestOnes(nums, k);
console.log(result);
