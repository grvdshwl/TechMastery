//* Implement Custom memoizeLast() method.

function memoizeLast(func) {
  let lastArgs = null;
  let lastResult = null;

  return function (...args) {
    if (!lastArgs || args.some((arg, index) => arg !== lastArgs[index])) {
      lastArgs = args;
      lastResult = func(...args);
    }
    return lastResult;
  };
}

// Example usage:
const memoizedLastAdd = memoizeLast((a, b) => {
  console.log("Performing expensive calculation...");
  return a + b;
});

console.log(memoizedLastAdd(2, 3)); // Output: "Performing expensive calculation..." and 5
console.log(memoizedLastAdd(2, 3)); // Output: 5 (result retrieved from cache)
console.log(memoizedLastAdd(2, 4)); // Output: "Performing expensive calculation..." and 6
