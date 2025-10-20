//* Squares of a Sorted Array

//* Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function (nums) {
  let left = 0,
    right = nums.length - 1,
    i = nums.length - 1;
  let output = new Array(nums.length);
  while (left <= right) {
    let value;
    if (nums[left] * nums[left] >= nums[right] * nums[right]) {
      value = nums[left] * nums[left];
      left++;
    } else {
      value = nums[right] * nums[right];
      right--;
    }
    output[i] = value;
    i--;
  }
  return output;
};
