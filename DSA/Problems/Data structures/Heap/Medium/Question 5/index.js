//Sort a K Sorted Array

function sortKSortedArray(arr, k) {
  const minHeap = new MinHeap();
  const sortedArray = [];

  // Insert the first k+1 elements into the min heap
  for (let i = 0; i <= k; i++) {
    minHeap.add(arr[i]);
  }

  // Iterate through the remaining elements in the array
  for (let i = k + 1; i < arr.length; i++) {
    // Extract the minimum element from the heap
    const min = minHeap.poll();
    sortedArray.push(min);

    // Insert the next element from the array into the heap
    minHeap.add(arr[i]);
  }

  // Extract the remaining elements from the heap
  while (minHeap.size() > 0) {
    const min = minHeap.poll();
    sortedArray.push(min);
  }

  return sortedArray;
}
