//* Rearrange array in alternating positive & negative items with O(1) extra space -done

//* Given an array of positive and negative numbers, arrange them in an alternate fashion such that every
//* positive number is followed by negative and vice-versa. Order of elements in output doesn’t matter.
//* Extra positive or negative elements should be moved to end.

//* Time complexity ---> O(n)
function rearrangeArray(arr) {
  const n = arr.length;
  let negCount = 0;

  // Partition negative numbers to the left side of the array
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      [arr[i], arr[negCount]] = [arr[negCount], arr[i]];
      negCount++;
    }
  }

  // Rearrange with alternating positive and negative elements
  let posIndex = negCount;
  let negIndex = 1;

  while (negIndex < n && posIndex < n && arr[negIndex] < 0) {
    [arr[negIndex], arr[posIndex]] = [arr[posIndex], arr[negIndex]];
    negIndex += 2;
    posIndex++;
  }

  return arr;
}

// Test the function
const array = [-1, 2, -3, 4, 5, -6, 7, -8];
const result = rearrangeArray(array);
console.log("Rearranged Array:", result); // Output will be an array with alternating positive and negative elements.
