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

const binarySearch = (arr, target) => {
  let targetArray = [...arr];

  let leftIndex = 0;
  let rightIndex = targetArray.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (targetArray[middleIndex] === target) {
      return middleIndex;
    }

    if (target > targetArray[middleIndex]) {
      leftIndex = middleIndex + 1;
    }

    if (target < targetArray[middleIndex]) {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
};

const resultOne = binarySearch(arr, 10);
const resultTwo = binarySearch(arr, 6);
const resultThree = binarySearch(arr, 20);
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
