// ===============================
// * Comb Sort Algorithm
// ===============================
// - A relatively efficient comparison-based sorting algorithm.

// Time Complexity:
// - Best Case: O(n log n)
// - Average Case: O(n^2)
// - Worst Case: O(n^2)

function combSort(arr) {
  const n = arr.length;
  let gap = n;
  let swapped;

  do {
    gap = Math.max(1, Math.floor(gap / 1.3));
    swapped = false;
    for (let i = 0; i + gap < n; i++) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        swapped = true;
      }
    }
  } while (gap > 1 || swapped);
}

// Example usage:
const unsortedArray = [4, -2, 8, 1, 3];
combSort(unsortedArray);
console.log(unsortedArray);
