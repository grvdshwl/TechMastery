//* Sliding Subarray Beauty ---done

var getSubarrayBeauty = function (nums, k, x) {
  // Initialize a frequency map to store counts of numbers from -50 to 50
  const frequencyMap = new Array(101).fill(0);
  const result = [];
  const n = nums.length;

  let left = 0;
  let right = 0;

  while (right < n) {
    // Update the frequency map with the current number
    const mapIndex = nums[right] + 50;
    frequencyMap[mapIndex] += 1;

    // Check if the current window size equals k
    if (right - left + 1 === k) {
      let targetCount = 0;
      // Iterate through the frequency map to find the x-th occurrence
      for (let i = 0; i < frequencyMap.length; i++) {
        targetCount += frequencyMap[i];

        if (targetCount >= x) {
          // Determine the beauty value to push into the result
          const beautyValue = i - 50 < 0 ? i - 50 : 0;
          result.push(beautyValue);
          break;
        }
      }

      // Update the frequency map by removing the element at the left pointer
      const leftNumIndex = nums[left] + 50;
      frequencyMap[leftNumIndex] -= 1;
      left++;
    }

    // Move the right pointer to expand the window
    right++;
  }

  return result;
};
