//* Function in JS
// Functions are fundamental blocks of code designed to perform specific tasks. Functions can be declared or assigned to variables, passed as arguments, and returned from other functions, offering versatility in structuring and reusing code.

//* Function Declaration vs Function Expression
// - Function Declaration: A function defined with the `function` keyword, hoisted to the top of its scope, making it accessible before its definition in the code.
// - Function Expression: Defines a function as part of an expression (e.g., assigning a function to a variable). It is not hoisted, so it is only accessible after the assignment.

//* Callback Function
// A callback function is a function passed as an argument to another function. The outer function can execute the callback function at a later time, enabling asynchronous and event-driven programming.

//* Why Functions Are Called First-Class Citizens
// In JavaScript, functions are treated as first-class citizens, meaning they can be stored in variables, passed as arguments to other functions, returned from functions, and even assigned as properties of objects. This flexibility supports functional programming patterns.

//* IIFE (Immediately Invoked Function Expression)
// IIFE is a function that runs immediately after it is defined, often used for data encapsulation and creating private scopes.
// Syntax: `(function() { ... })();`

//* Function Scope
// Function scope means that variables defined within a function are accessible only within that function. Variables declared with `var` are function-scoped, while `let` and `const` are block-scoped.

//* Function Hoisting with Example
// Function declarations in JavaScript are hoisted, allowing them to be called before they are defined in the code.

function hoistedExample() {
  sayHello(); // Outputs: "Hello!"
  function sayHello() {
    console.log("Hello!");
  }
}

//* Params vs Arguments
// - Parameters: The variables defined in the function definition (e.g., `function add(a, b)`).
// - Arguments: The actual values passed to the function when it is called (e.g., `add(5, 3)`).

//* Spread vs Rest Operator
// - Spread Operator (`...`): Expands elements in an array or object (e.g., `console.log(...[1, 2, 3])`).
// - Rest Operator (`...`): Collects multiple elements into an array (e.g., `function add(...numbers)`).

//* Arrow Function
// Arrow functions provide a shorter syntax for writing functions. They also have a lexical `this` context, meaning they inherit `this` from the surrounding scope.

//* Difference Between Arrow and Regular Function
// - Syntax: Arrow functions use the `=>` symbol (e.g., `const add = (a, b) => a + b`).
// - Implicit Return: Arrow functions with a single expression can omit `{}` and implicitly return that expression.
// - `this` Binding: Arrow functions do not have their own `this`; they inherit it from the outer function or context.
// - `arguments` object: Regular functions have an `arguments` object, while arrow functions do not.

//* Examples:

//* Example 1: Issue with `var` in asynchronous loops
function test1() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i); // Outputs 5 five times due to `var` being function-scoped and shared across loop iterations.
    }, i * 1000);
  }
}

//* Solution 1.1: Passing `i` as a parameter to the callback function
function test2() {
  for (var i = 0; i < 5; i++) {
    setTimeout(
      function (i) {
        console.log(i); // Outputs 0, 1, 2, 3, 4
      },
      i * 1000,
      i // passing `i` as an argument
    );
  }
}

//* Solution 1.2: Using an IIFE to create a closure
function test3() {
  for (var i = 0; i < 5; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i); // Outputs 0, 1, 2, 3, 4
      }, i * 1000);
    })(i);
  }
}

//* Example 2: Using `let` to create block-scoped variable
function test2() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i); // Outputs 0, 1, 2, 3, 4 because `let` is block-scoped.
    }, i * 1000);
  }
}

//* Example 3: Hoisting and `var` in a function scope
var x = 21;
var fun = function () {
  console.log(x); // Outputs undefined due to hoisting of `var x` within the function scope.
  var x = 20;
};

//* Example 4: Spread and Rest syntax errors
// When using rest parameters, they must be the last in the parameter list; otherwise, a syntax error occurs.
/*
     const fn = (a, ...numbers, x, y) => {
       console.log(x, y); // SyntaxError: Rest parameter must be last
     };
     */

//* Example 5: Correct use of rest parameter
const fn2 = (a, ...numbers) => {
  console.log(numbers); // Outputs the remaining arguments as an array
};
