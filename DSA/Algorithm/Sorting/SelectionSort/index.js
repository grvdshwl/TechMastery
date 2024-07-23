// ===============================
// * Selection Sort (Ascending Order)
// ===============================
// - Worst Time Complexity: O(n^2) [If array is already sorted]
// - Average Time Complexity: O(n^2) [If array is not sorted]
// - Best Time Complexity: O(n^2) [If array is not sorted]

// Overview:
// Selection Sort is a simple comparison-based sorting algorithm known for its simplicity but relatively inefficient performance on larger datasets.

// Details:
// - Worst Time Complexity: O(n^2) occurs when the array is already sorted,
//   as it continues to perform unnecessary swaps.
// - Average Time Complexity: O(n^2) showcases the algorithm's inefficiency in sorting
//    unsorted arrays due to its basic selection approach.
// - Best Time Complexity: O(n^2) occurs when the array is unsorted, yet the algorithm
//   still performs multiple comparisons and swaps.

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
const sortedArr = selectionSort(arr);
console.log(sortedArr);
