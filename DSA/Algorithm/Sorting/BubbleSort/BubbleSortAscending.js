// ===============================
// * Bubble Sort (Ascending Order)
// ===============================
// - Worst Time Complexity: Quadratic - O(n^2)

// Overview:
// Bubble Sort is a simple yet inefficient sorting algorithm with varying time complexities:

// Time Complexities:
// - Best Case: O(n) (when the input is already sorted)
// - Average Case: O(n^2)
// - Worst Case: O(n^2)

// Details:
// - Best-case time complexity occurs when input data is already sorted or nearly sorted.
// - In such cases, Bubble Sort detects no swaps needed, resulting in linear time complexity (O(n)).

const bubbleSort = (array) => {
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

function bubbleSort2(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const arr = [-6, 20, 8, -2];
let result = bubbleSort2(arr);

console.log(arr);
