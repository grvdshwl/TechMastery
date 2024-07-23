function generatePermutations(arr) {
  const result = [];

  function generate(n, array) {
    if (n === 1) {
      result.push(array.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      generate(n - 1, array);
      if (n % 2 === 0) {
        [array[i], array[n - 1]] = [array[n - 1], array[i]];
      } else {
        [array[0], array[n - 1]] = [array[n - 1], array[0]];
      }
    }
  }

  generate(arr.length, arr);
  return result;
}

// Example usage:
const array = [1, 2, 3];
const permutations = generatePermutations(array);
console.log(permutations);
