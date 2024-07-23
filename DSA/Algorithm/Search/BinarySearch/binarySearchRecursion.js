// ===============================
// * Binary Search
// ===============================
// Binary search operates on sorted arrays; if unsorted, sorting is required first.

// -------------------------------------
// Solution - Time Complexity: O(log(n))
// -------------------------------------
// STEPS:
// - If the array is empty, return -1 (element not found).
// - Find the middle element in the array.
// - If the target matches the middle element, return its index.
// - If the target is less than the middle element, binary search the left half.
// - If the target is greater than the middle element, binary search the right half.

const arr = [-5, 2, 4, 6, 10];

const binarySearchRecursion = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

const search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
  if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
};

const resultOne = binarySearchRecursion(arr, 10);
const resultTwo = binarySearchRecursion(arr, 6);
const resultThree = binarySearchRecursion(arr, 20);
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
