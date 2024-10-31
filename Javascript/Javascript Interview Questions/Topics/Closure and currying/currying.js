//* Currying
//* What is currying
// Currying in JavaScript is a technique where a function with multiple arguments
// is transformed into a sequence of functions, each taking a single argument,
// allowing for partial application and reusability.

//* Why do we need currying
// Currying allows for greater modularity and reusability, enabling the use of
// partial application, where some arguments are fixed in advance, creating new functions
// that can be called with the remaining arguments later. It also helps break down complex
// functions into simpler, single-parameter functions.

//* Currying vs Partial Application
// Currying transforms a function so that it can be called in a chain of single-parameter functions.
// Partial application, however, fixes a subset of a function's parameters, creating a new function
// that requires the remaining parameters.

//* Currying means the number of arguments must equal the number of functions.

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
console.log(sum(20)(1)(2)); // Output: 23

//* Infinite Currying
// The function 'add' demonstrates infinite currying, where it keeps returning functions
// until no argument is passed, at which point it returns the accumulated sum.

function add(a) {
  return function (b) {
    if (b) return add(a + b); // Recursive call for further currying
    return a; // When no argument is passed, return the accumulated sum
  };
}
console.log(add(5)()); // Output: 5
console.log(add(5)(2)()); // Output: 7
console.log(add(5)(2)(10)(24)()); // Output: 41

//* Convert a normal function to a curried function
// The curry function below takes a function 'fn' and returns a curried version of it.
// It keeps returning functions with gathered arguments until the argument count meets 'fn's' arity (expected argument count).

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args); // Execute if all required arguments are gathered
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs); // Gather arguments in sequence
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
