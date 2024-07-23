// ===============================
// * Insertion Sort (Ascending Order)
// ===============================
// - Worst Time Complexity: O(n^2)

// Overview:
// Insertion Sort is a simple yet less efficient sorting algorithm suitable for small datasets
//  but less so for larger ones.

// Time Complexities:
// - Best Case: O(n)
// - Average Case: O(n^2)
// - Worst Case: O(n^2)

// Details:
// - Performs well for nearly sorted input data, resulting in a linear best-case time complexity (O(n)).
// - Requires few comparisons and shifts to sort nearly sorted data efficiently.

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    array[j + 1] = numberToInsert;
  }
};

const arr = [-6, 20, 8, -2, 4];
let result = insertionSort(arr);

console.log(arr);
