//* Wiggle Subsequence

// Input: nums = [1,7,4,9,2,5]
// Output: 6
// Explanation: The entire sequence is a wiggle sequence with differences (6, -3, 5, -7, 3).

var wiggleMaxLength = function (nums) {
  let diffArray = [];

  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    if (diff !== 0) {
      diffArray.push(diff);
    }
  }
  if (diffArray.length === 0) {
    return 1;
  }

  let counter = 2;

  for (let i = 1; i < diffArray.length; i++) {
    if (diffArray[i - 1] > 0 && diffArray[i] < 0) {
      counter += 1;
    }

    if (diffArray[i - 1] < 0 && diffArray[i] > 0) {
      counter += 1;
    }
  }

  return counter;
};
