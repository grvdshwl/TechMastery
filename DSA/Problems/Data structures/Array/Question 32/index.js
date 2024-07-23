//*	Sort Colors --- Done

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function (nums) {
  let start = 0;
  let i = 0;
  let end = nums.length - 1;

  while (i <= end) {
    let num = nums[i];

    if (num === 0) {
      [nums[i], nums[start]] = [nums[start], nums[i]];
      i++;
      start++;
    } else if (num === 1) {
      i++;
    } else {
      [nums[i], nums[end]] = [nums[end], nums[i]];
      end--;
    }
  }
};
