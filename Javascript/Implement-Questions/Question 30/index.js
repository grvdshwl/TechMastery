//* Deep Flatten I: Using Recursion

function deepFlattenI(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(deepFlattenI(val)) : acc.concat(val),
    [],
  );
}

// Example usage:
const arr = [1, [2, [3, 4], 5], 6];
console.log(deepFlattenI(arr)); // Output: [1, 2, 3, 4, 5, 6]

//* Deep Flatten II: Using Stack (Iterative Approach)

function deepFlattenII(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }

  return result.reverse();
}

// Example usage:
const arr2 = [1, [2, [3, 4], 5], 6];
console.log(deepFlattenII(arr2)); // Output: [1, 2, 3, 4, 5, 6]
