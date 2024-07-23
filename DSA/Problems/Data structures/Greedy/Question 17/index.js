//* Maximum Sum Circular Subarray

var maxSubarraySumCircular = function (nums) {
  let curMin = 0,
    curMax = 0,
    total = 0,
    minSum = nums[0],
    maxSum = nums[0];
  for (let num of nums) {
    if (curMax < 0) {
      curMax = 0;
    }

    if (curMin > 0) {
      curMin = 0;
    }

    curMax += num;

    curMin += num;

    maxSum = Math.max(curMax, maxSum);

    minSum = Math.min(curMin, minSum);

    total += num;
  }

  return total === minSum ? maxSum : Math.max(total - minSum, maxSum);
};
