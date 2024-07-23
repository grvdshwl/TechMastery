//* Negative indexing in arrays
function getElementByNegativeIndex(array, negativeIndex) {
  // Calculate the positive index corresponding to the negative index
  const positiveIndex = array.length + negativeIndex;

  // Check if the calculated positive index is within bounds
  if (positiveIndex >= 0 && positiveIndex < array.length) {
    return array[positiveIndex];
  } else {
    return undefined; // Return undefined if index is out of bounds
  }
}

// Example usage:
const array = [10, 20, 30, 40, 50];
console.log(getElementByNegativeIndex(array, -1)); // Output: 50
console.log(getElementByNegativeIndex(array, -2)); // Output: 40
console.log(getElementByNegativeIndex(array, -3)); // Output: 30
console.log(getElementByNegativeIndex(array, -4)); // Output: 20
console.log(getElementByNegativeIndex(array, -5)); // Output: 10
console.log(getElementByNegativeIndex(array, -6)); // Output: undefined
