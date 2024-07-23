//* Reverse Pairs -- Hard
const reversePairs = (nums) => {
  let result = 0;

  const mergeSort = (arr) => {
    const n = arr.length;
    if (n < 2) {
      return arr;
    }

    const mid = Math.floor(n / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  const merge = (left, right) => {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] > 2 * right[j]) {
        result += left.length - i;
        j++;
      } else {
        i++;
      }
    }

    i = 0;
    j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        mergedArray.push(left[i]);
        i++;
      } else {
        mergedArray.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      mergedArray.push(left[i]);
      i++;
    }
    while (j < right.length) {
      mergedArray.push(right[j]);
      j++;
    }

    return mergedArray;
  };

  mergeSort(nums);
  return result;
};

// Example usage:
const nums1 = [1, 3, 2, 3, 1];
console.log(reversePairs(nums1)); // Output: 2

const nums2 = [2, 4, 3, 5, 1];
console.log(reversePairs(nums2)); // Output: 3
