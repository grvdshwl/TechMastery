//* Single Element in a Sorted Array

var singleNonDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i = i + 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};
