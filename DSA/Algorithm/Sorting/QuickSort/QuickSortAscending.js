// Quick Sort (Ascending)
// - Worst Time: O(n^2) [Array sorted]
// - Average Time: O(n log n) [Unsorted array]

// Overview: Efficient divide-and-conquer sorting.
// Details: Less efficient on sorted arrays due to pivot selection.

const quickSort = (array) => {
  const length = array.length;

  if (length <= 1) {
    return array;
  }
  const pivot = array[length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < length - 1; i++) {
    let element = array[i];
    if (element < pivot) {
      leftArray.push(element);
    } else {
      rightArray.push(element);
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

const arr = [-6, 20, 8, -2, 4];
const result = quickSort(arr);

console.log(result);
