//* Find the "Kth" max and min element of an array

//* Time complexity id n * log k

const MaxHeap = require("../../../../Data structures/Heap/MaxHeap");
const MinHeap = require("../../../../Data structures/Heap/MinHeap");

function findKthMaxMin(arr, k) {
  if (arr.length === 0 || k < 1 || k > arr.length) {
    return null; // If the array is empty or k is out of range, return null
  }

  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();

  // Insert elements into heaps
  for (let i = 0; i < arr.length; i++) {
    minHeap.add(arr[i]);
    maxHeap.add(arr[i]);
    if (minHeap.getLength() > k) {
      minHeap.poll();
    }
    if (maxHeap.getLength() > k) {
      maxHeap.poll();
    }
  }

  const kthMin = maxHeap.peek();
  const kthMax = minHeap.peek();

  return { kthMin, kthMax };
}

// Example array
const myArray = [3, 7, 1, 9, 4, 5, 8];
const k = 3; // Finding the 3rd max and min elements

// Call the function to find Kth max and min
const { kthMin, kthMax } = findKthMaxMin(myArray, k);
console.log(`The ${k}th minimum element is: ${kthMin}`);
console.log(`The ${k}th maximum element is: ${kthMax}`);
