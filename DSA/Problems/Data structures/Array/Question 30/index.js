//* Find whether an array is subset of another array ---done
//* Time complexity ---> O(n)
function isSubset(arr1, arr2) {
  const set = new Set(arr1);

  for (let i = 0; i < arr2.length; i++) {
    if (!set.has(arr2[i])) {
      return false;
    }
  }

  return true;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [2, 4, 6];
const array3 = [7, 8, 9];

console.log(isSubset(array2, array1)); // Output: true
console.log(isSubset(array3, array1)); // Output: false
