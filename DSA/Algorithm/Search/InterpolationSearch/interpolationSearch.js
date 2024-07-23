/**
 * Interpolation Search Algorithm
 * - Used for searching in a sorted array with uniform distribution.
 * - Best-case time complexity: O(1) (sorted and uniformly distributed data).
 * - Worst-case time complexity: O(n).
 *
 * Formula:
 * pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
 */

// Interpolation Search Function
// - Searches for a specific element in a sorted array or list of values.
// - Utilizes interpolation formula for a refined guess of the target's location.

// Parameters:
// - arr: Sorted array or list of values.
// - target: Element to be found within the array.

// Returns:
// - Index of the target element if found, otherwise returns -1.

// Steps:
// - Calculate the probable position using interpolation formula.
// - Narrow down search based on the calculated position.

// Note:
// - Works best when data is sorted and uniformly distributed.
// - Provides better performance for uniformly distributed data compared to binary search.

function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    const pos = Math.floor(
      low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    if (arr[pos] === target) {
      return pos; // Target element found
    }

    if (arr[pos] < target) {
      low = pos + 1; // Search in the right subarray
    } else {
      high = pos - 1; // Search in the left subarray
    }
  }

  return -1;
}

const sortedArray = [1, 3, 5, 14, 21, 25, 26, 27];
const targetElement = 25;

const index = interpolationSearch(sortedArray, targetElement);

if (index !== -1) {
  console.log(`Element ${targetElement} found at index ${index}`);
} else {
  console.log(`Element ${targetElement} not found in the array`);
}
