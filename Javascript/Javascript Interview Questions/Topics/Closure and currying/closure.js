//* Closures
// Closures in JavaScript are created when an inner function is defined within an outer function,
// and it captures variables from its outer scope. The inner function retains access to these
// captured variables even after the outer function finishes executing.

//* Why do we need closures?
// Closures are useful for data encapsulation, maintaining state, and enabling private variables in JavaScript.
// They allow functions to remember the environment in which they were created, which is useful in scenarios like
// callbacks, currying, and creating private data.

//* Lexical Scope
// Lexical scope is a concept where the scope of a variable is determined by its location within the source code.
// In JavaScript, functions are lexically scoped, meaning inner functions have access to the variables of their outer functions.

//* Dynamic Scope
// Dynamic scope determines variable scope based on the call stack at runtime, not where variables are declared in the code.
// JavaScript does not have dynamic scope by default, but the `this` keyword can behave similarly by referring to the
// object that calls the function.

//* What are Closures with Example
// A closure is formed when an inner function retains access to variables from an outer function's scope even after
// the outer function has completed its execution.
function outer() {
  let name = "Closure Example";
  function inner() {
    return name; // 'inner' can access 'name' from 'outer'
  }
  return inner;
}
const getName = outer();
console.log(getName()); // Output: Closure Example

//* Closure Scope Chain
// The scope chain in closures includes the local scope, outer function scope, and global scope.
// Variables are looked up in this chain when accessed in closures.

//* Difference Between Closure vs Scope
// Scope refers to the region where a variable is defined and accessible. Closures, on the other hand, allow an inner
// function to retain access to variables in its outer scope even after the outer function has completed execution.

//* Currying in JavaScript
// Question 1 - sum(2)(6)(1)
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(2)(6)(1)); // Output: 9

// Question 2: Write a function that allows this
function createBase(num) {
  return function (num2) {
    console.log(num + num2);
  };
}
const addSix = createBase(6);
addSix(10); // Output: 16
addSix(20); // Output: 26

// Question 3: Block Scope and setTimeout
for (var i = 0; i < 3; i++) {
  function inner(index) {
    setTimeout(function () {
      console.log(index);
    }, i * 1000);
  }
  inner(i);
}
// Output:
// 0 (after 0 seconds)
// 1 (after 1 second)
// 2 (after 2 seconds)

// Question 4: What is the Module Pattern?
// The Module Pattern is a design pattern for creating private and public encapsulation in JavaScript.
// It uses an IIFE to create a private scope and returns an object exposing only the public methods.
var Module = (function () {
  function privateMethod() {
    console.log("This is a private method");
  }
  return {
    publicMethod: function () {
      privateMethod(); // Public method calling a private method
      console.log("This is a public method");
    },
  };
})();
Module.publicMethod(); // Output: This is a private method, This is a public method

// Question 5: Time Optimization
function closureFind() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (i) {
    return a[i];
  };
}
const find = closureFind();
console.time("6");
find(6); // Precomputed result, fast lookup
console.timeEnd("6"); // Output: Execution time for finding square of 6
console.time("12");
find(12); // Precomputed result, fast lookup
console.timeEnd("12"); // Output: Execution time for finding square of 12

//* Write a polyfill function that takes a function and runs it only once
function once(func) {
  let executed = false;
  return function (...args) {
    if (!executed) {
      executed = true;
      return func(...args);
    }
  };
}
const logOnce = once(console.log);
logOnce("Hello"); // Output: Hello
logOnce("World"); // No output, as it's already been executed once

//* Write a polyfill function to memoize a callback with the same arguments
function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
}
function slowFunction(num) {
  for (let i = 0; i < 1000000000000; i++); // Simulate time-consuming task
  return num * num;
}
const memoizedSlowFunction = memoize(slowFunction);
console.log(memoizedSlowFunction(5)); // Computed and cached
console.log(memoizedSlowFunction(5)); // Retrieved from cache
