//*     Implement a function that recursively flattens an array into a single level deep.

function flattenArray(arr) {
  const flattened = [];

  // Iterate through the array
  arr.forEach((item) => {
    // If the item is an array, recursively flatten it
    if (Array.isArray(item)) {
      flattened.push(...flattenArray(item));
    } else {
      flattened.push(item);
    }
  });

  return flattened;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
