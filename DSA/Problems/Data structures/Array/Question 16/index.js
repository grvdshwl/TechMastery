//* Count Inversion -->Done

const arr = [2, 4, 1, 3, 5];

// Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted.
// If the array is already sorted then the inversion count is 0.
//* Time complexity Object(n logn)

//* Merge Sort
class Solution {
  constructor() {
    this.count = 0;
  }

  inversionCount(array) {
    this.count = 0;
    this.mergeSort(array);
    return this.count;
  }

  mergeSort(array) {
    if (!array || array.length < 2) {
      return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    const left = this.mergeSort(leftArray);
    const right = this.mergeSort(rightArray);
    return this.merge(left, right);
  }

  merge(left, right) {
    const sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        sorted.push(left[leftIndex]);
        leftIndex++;
      } else {
        this.count += left.length - leftIndex;
        sorted.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < left.length) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < right.length) {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }

    return sorted;
  }
}

// Test cases
const solution = new Solution();

// Test case 1
const array1 = [5, 3, 2, 4, 1];
console.log(solution.inversionCount(array1)); // Output: 8

// Test case 2
const array2 = [5, 4, 3, 2, 1];
console.log(solution.inversionCount(array2)); // Output: 10

// Test case 3
const array3 = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
console.log(solution.inversionCount(array3)); // Output: 15
