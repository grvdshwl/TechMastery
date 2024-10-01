//* Maximum Product subarray
var maxProduct = function (nums) {
  let prefix = 1,
    suffix = 1,
    max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;

    prefix *= nums[i];
    suffix *= nums[nums.length - 1 - i];
    max = Math.max(max, prefix, suffix);
  }

  return max;
};
