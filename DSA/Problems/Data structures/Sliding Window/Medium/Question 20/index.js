//* Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold --done

// Given an array of integers arr and two integers k and threshold,
//  return the number of sub-arrays of size k and average greater than or equal to threshold.

// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively.
// All other sub-arrays of size 3 have averages less than 4 (the threshold).

var numOfSubarrays = function (arr, k, threshold) {
  let n = arr.length;

  let total = 0;
  let left = 0;
  let right = 0;

  let result = 0;

  while (right < n) {
    total += arr[right];
    if (right - left + 1 > k) {
      total -= arr[left];
      left++;
    }

    if (right - left + 1 === k && total / k >= threshold) {
      result++;
    }
    right++;
  }
  return result;
};
const result = numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4);

console.log(result);
