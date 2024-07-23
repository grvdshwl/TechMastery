//* Maximum Sum of Distinct Subarrays With Length K ---done
// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

var maximumSubarraySum = function (nums, k) {
  let n = nums.length;
  let left = 0;
  let right = 0;
  let set = new Set();
  let result = 0;
  let total = 0;

  while (right < n) {
    let num = nums[right];
    total += num;
    while (set.has(num) || right - left + 1 > k) {
      total -= nums[left];
      set.delete(nums[left]);
      left++;
    }
    set.add(num);

    if (right - left + 1 === k) {
      result = Math.max(result, total);
    }
    right++;
  }
  return result;
};

const result = maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3);
console.log(result);
