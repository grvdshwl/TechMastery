//* Minimum Swaps to Group All 1's Together II --done

var minSwaps = function (nums) {
  let n = nums.length;
  let count = 0;

  for (let num of nums) {
    if (num === 1) {
      count++;
    }
  }

  let badCount = 0;

  for (let i = 0; i < count; i++) {
    if (nums[i] !== 1) {
      badCount++;
    }
  }

  let minSwaps = badCount;

  let left = 0;
  let right = count;

  while (left < n) {
    if (nums[left] !== 1) {
      badCount--;
    }

    if (nums[right % n] !== 1) {
      badCount++;
    }
    minSwaps = Math.min(minSwaps, badCount);
    right++;
    left++;
  }

  return minSwaps;
};
