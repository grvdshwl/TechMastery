//* Deep Flatten III: Using ES6 Generator Function
function* deepFlattenIII(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* deepFlattenIII(item);
    } else {
      yield item;
    }
  }
}

// Example usage:
const arr = [1, [2, [3, 4], 5], 6];
console.log([...deepFlattenIII(arr)]); // Output: [1, 2, 3, 4, 5, 6]

//* Deep Flatten IV: Using Array.flatMap()
function deepFlattenIV(arr) {
  return arr.flatMap((item) =>
    Array.isArray(item) ? deepFlattenIV(item) : item
  );
}

// Example usage:
const arr2 = [1, [2, [3, 4], 5], 6];
console.log(deepFlattenIV(arr2)); // Output: [1, 2, 3, 4, 5, 6]
