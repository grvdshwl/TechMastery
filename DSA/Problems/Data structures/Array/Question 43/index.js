//* Title: Remove Duplicates from Sorted Array

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the
// first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k
// (hence they are underscores).

var removeDuplicates = function (nums) {
  let prev = nums[0];
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    if (num !== prev) {
      nums[k] = num;
      prev = num;
      k++;
    }
  }

  return k;
};
