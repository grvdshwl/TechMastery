/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let left = 0;
  let right = 0;
  let n = nums.length;
  let res = 0;
  let count = 0;
  let localOddCount = 0;
  while (right < n) {
    let num = nums[right];

    if (num % 2 !== 0) {
      count = 0;
      localOddCount++;
    }

    while (localOddCount === k) {
      count++;
      if (nums[left] % 2 !== 0) {
        localOddCount--;
      }
      left++;
    }

    res += count;

    right++;
  }

  return res;
};
