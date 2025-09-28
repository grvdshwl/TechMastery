// Search in Rotated Sorted Array
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

function searchInRotatedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // If left half is sorted
    if (nums[left] <= nums[mid]) {
      // Check if target is within the left half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Search left
      } else {
        left = mid + 1; // Search right
      }
    } else {
      // Right half is sorted
      // Check if target is within the right half
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Search right
      } else {
        right = mid - 1; // Search left
      }
    }
  }

  return -1; // Target not found
}

// Example usage:
const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
const targetValue = 0;
const index = searchInRotatedArray(rotatedArray, targetValue);
console.log("Index of target value:", index); // Output: Index of target value: 4
