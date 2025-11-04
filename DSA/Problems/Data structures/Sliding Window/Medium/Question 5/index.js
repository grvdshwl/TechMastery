//* Frequency of The Most Frequent Element

// Example 1:

// Input: nums = [1,2,4], k = 5
// Output: 3
// Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
// 4 has a frequency of 3.

var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = 0;
  let left = 0;
  let right = 0;
  let total = 0;

  while (right < n) {
    total += nums[right];

    while (nums[right] * (right - left + 1) > total + k) {
      total -= nums[left];
      left++;
    }

    res = Math.max(res, right - left + 1);

    right += 1;
  }

  return res;
};

const result = maxFrequency([1, 2, 4], 2);
console.log(result);
