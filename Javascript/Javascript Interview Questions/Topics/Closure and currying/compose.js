//* Compose in JavaScript

// Compose is a utility function that allows you to combine multiple functions into a single function.
// It takes multiple functions as arguments and returns a new function.
// When this new function is invoked, it applies each function from right to left on the input provided.

function compose(...funcs) {
  return function (value) {
    return funcs.reduceRight((acc, fn) => fn(acc), value);
  };
}

// Example usage:
const add5 = (x) => x + 5;
const double = (x) => x * 2;
const square = (x) => x * x;

// Combining the functions using compose:
const addDoubleSquare = compose(square, double, add5);

// Execution order: add5 -> double -> square
console.log(addDoubleSquare(2)); // Output: 196
// Explanation:
// 1. add5(2) -> 7
// 2. double(7) -> 14
// 3. square(14) -> 196
