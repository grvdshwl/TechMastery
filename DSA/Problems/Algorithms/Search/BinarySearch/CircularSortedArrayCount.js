//* Find the number of rotations in a circularly sorted array

//* Given a circularly sorted integer array, find the total number of
//* times the array is rotated.
//* Assume there are no duplicates in the array, and
//* the rotation is in the clockwise direction

export const circularSortedArrayRotationCount = (array, target) => {
  // Get the length of the array.
  const len = array.length;

  // Initialize low and high pointers for binary search.
  let low = 0;
  let high = len - 1;

  // Perform binary search to find the rotation count.
  while (low <= high) {
    // If the array is already sorted, return the low index.
    if (array[low] <= array[high]) {
      return low;
    }

    // Calculate the middle index and get the current element.
    let middleIndex = Math.floor((low + high) / 2);
    let currentElement = array[middleIndex];

    // Calculate the indices for the previous and next elements.
    let prev = (middleIndex - 1 + len) % len;
    let next = (middleIndex + 1) % len;

    // If the current element is less than or equal to its neighbors, it's the pivot.
    if (currentElement <= array[prev] && currentElement <= array[next]) {
      return middleIndex;
    }

    // Adjust low and high pointers based on the current element.
    if (currentElement <= array[high]) {
      high = middleIndex - 1;
    } else if (currentElement >= array[low]) {
      low = middleIndex + 1;
    }
  }

  return -1;
};

// Example usage:
const nums = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let result = circularSortedArrayRotationCount(nums);
console.log(result); // Output should be 3
