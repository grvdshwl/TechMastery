//* Rotate Array --done
//* Given an integer array nums,
//* rotate the array to the right by k steps, where k is non-negative.
//* Time Complexity - O(n)
//* Space complexity - O(1)

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n;
  reverse(nums, 0, n - 1);

  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  return nums;
};

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

const result = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);
