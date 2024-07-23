function heapifyDown(array, index, heapSize) {
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;
  let smallest = index;

  if (leftChildIndex < heapSize && array[leftChildIndex] < array[smallest]) {
    smallest = leftChildIndex;
  }

  if (rightChildIndex < heapSize && array[rightChildIndex] < array[smallest]) {
    smallest = rightChildIndex;
  }

  if (smallest !== index) {
    [array[index], array[smallest]] = [array[smallest], array[index]];
    heapifyDown(array, smallest, heapSize);
  }
}

function buildHeap(array) {
  const heapSize = array.length;

  // Start from the last non-leaf node and heapify down
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    heapifyDown(array, i, heapSize);
  }
}

// Example usage:
const arr = [3, 2, 5, 1, 7, 8, 4];
buildHeap(arr);
console.log(arr); // The array now represents a heap
