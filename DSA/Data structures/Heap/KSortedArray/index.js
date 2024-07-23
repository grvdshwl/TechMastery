const MinHeap = require("../MinHeap");

function sortKSortedArray(arr, k) {
  const minHeap = new MinHeap();

  // Insert the first k+1 elements into the min heap
  for (let i = 0; i <= k && i < arr.length; i++) {
    minHeap.add(arr[i]);
  }

  const sortedArray = [];
  let index = 0;

  // Process the remaining elements in the array
  for (let i = k + 1; i < arr.length; i++) {
    sortedArray[index++] = minHeap.poll(); // Extract the minimum element
    minHeap.add(arr[i]); // Insert the next element from the array
  }

  // Extract the remaining elements from the heap
  while (minHeap.peek() !== null) {
    sortedArray[index++] = minHeap.poll();
  }

  return sortedArray;
}

// Example usage:
const array = [6, 5, 3, 2, 8, 10, 9];
const kValue = 3;
const sorted = sortKSortedArray(array, kValue);
console.log("Sorted Array:", sorted);
