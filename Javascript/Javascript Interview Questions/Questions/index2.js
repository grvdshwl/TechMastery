// Function to generate all permutations of an array
function findPermutations(array) {
  if (array.length === 0) return [[]]; // Base case: empty array has one permutation (empty array itself)

  const result = [];

  for (let i = 0; i < array.length; i++) {
    // Get the current element
    const currentElement = array[i];

    // Get the remaining elements
    const remainingElements = array.slice(0, i).concat(array.slice(i + 1));

    // Recursively find permutations of the remaining elements
    const permutationsOfRemaining = findPermutations(remainingElements);

    // Combine the current element with each permutation of the remaining elements
    for (const perm of permutationsOfRemaining) {
      result.push([currentElement, ...perm]);
    }
  }

  return result;
}

// Example usage
const array = [1, 2, 3];
const permutations = findPermutations(array);
console.log(permutations);
