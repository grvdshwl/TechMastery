//* Find Minimum in rotated sorted array

//* Suppose an array of length n sorted in ascending order
//*  is rotated between 1 and n times

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] <= nums[right]) {
    return nums[left];
  }
  let min = Infinity;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[left] <= nums[mid]) {
      min = Math.min(nums[left], min);
      left = mid + 1;
    } else {
      min = Math.min(nums[mid], min);
      right = mid - 1;
    }
  }

  return min;
};

// Example usage:
const nums = [17, 11, 13, 15];
console.log(findMin(nums)); // Output: 0
