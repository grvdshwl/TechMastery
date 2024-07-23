//* Currying

// Currying in JavaScript is a technique where a function with multiple arguments
// is transformed into a sequence of functions, each taking a single argument,
// allowing for partial application and reusability.

// Currying in Javascript
// Question 1 - Currying vs Partial Application

// Define a function sum to demonstrate currying
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Assigning the curried function to variable x
const x = sum(10);

// Example usage of the curried function
console.log(x(5)(6)); // Output: 21
console.log(x(3)(2)); // Output: 15

// Alternatively, you can directly call the curried function
console.log(sum(20)(1, 2)); // Output: 23

//* Question 2

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(2)());

//* Question 3

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Example usage:
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6
