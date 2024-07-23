class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      return null;
    }

    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

function heapSort(arr) {
  const minHeap = new MinHeap();

  // Add all elements from the array to the heap
  for (let i = 0; i < arr.length; i++) {
    minHeap.add(arr[i]);
  }

  const sortedArray = [];
  // Poll elements from the heap to get them in sorted order
  while (minHeap.peek() !== null) {
    sortedArray.push(minHeap.poll());
  }

  return sortedArray;
}

// Example usage:
const arrayToSort = [12, 3, 5, 7, 19];
console.log("Original Array: ", arrayToSort);
const sortedArray = heapSort(arrayToSort);
console.log("Sorted Array: ", sortedArray);

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
