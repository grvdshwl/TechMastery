//* Minimum Swaps to Group All 1's Together II --done

var minSwaps = function (nums) {
  const n = nums.length;
  const oneCount = nums.reduce((sum, num) => sum + num, 0);

  // Edge case: if no swaps are needed (all elements are already 1's)
  if (oneCount === 0 || n === 1) return 0;

  let left = 0,
    right = 0,
    swaps = 0,
    minSwaps = Infinity;

  while (right < n + oneCount - 1) {
    // Add the right element to the window
    if (nums[right % n] === 0) swaps++;

    // If window size exceeds `oneCount`, slide the left pointer
    if (right - left + 1 > oneCount) {
      if (nums[left % n] === 0) swaps--;
      left++;
    }

    // If window size equals `oneCount`, update the minimum swaps
    if (right - left + 1 === oneCount) {
      minSwaps = Math.min(minSwaps, swaps);
    }

    right++;
  }

  return minSwaps;
};
