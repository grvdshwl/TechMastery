// Title: Find Majority Element in an Array ---done
// Time Complexity: O(n)
// Space Complexity: O(1)
/**
 * Finds the majority element in an array.
 * Majority element is the element that appears more than ⌊n/2⌋ times,
 * where n is the length of the array.
 *
 * @param {number[]} nums - The input array of numbers.
 * @return {number} - The majority element.
 */
var majorityElement = function (nums) {
  let count = 1;
  let candidate = nums[0];

  // Iterate through the array to find the majority element
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};
// Test Case 1
const nums1 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(majorityElement(nums1)); // Output: 4
