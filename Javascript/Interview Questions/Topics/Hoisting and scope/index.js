//* var vs let vs const
// `var`, `let`, and `const` are used to declare variables in JavaScript.
// - `var`: Function-scoped or globally scoped, can be re-declared, and is subject to hoisting.
// - `let`: Block-scoped, cannot be re-declared in the same scope, also hoisted but remains in the Temporal Dead Zone until initialized.
// - `const`: Block-scoped like `let`, but also cannot be reassigned after declaration, requiring initialization upon declaration.

//* Explain Scope
// Scope defines the accessibility of variables and functions in JavaScript.
// - `Global scope`: Variables declared outside functions, accessible throughout the script.
// - `Block scope`: Variables declared inside a block (`{}`) using `let` or `const`, accessible only within the block.
// - `Function scope`: Variables declared inside a function (using `var`, `let`, or `const`) are accessible only within that function.

//* Global vs block scope vs functional scope
// - Global scope: Accessible everywhere in the script (outside of any function or block).
// - Block scope: Accessible only within the block it is defined, typically using `let` or `const`.
// - Functional scope: Created with `function` keyword; variables declared within a function are not accessible outside it.

//* Explain Hoisting
// Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.
// - `var` declarations are hoisted to the top of their functional or global scope.
// - `let` and `const` declarations are hoisted too but are placed in a Temporal Dead Zone until the actual line of code where they are declared.

//* Explain Shadowing
// Shadowing occurs when a variable declared in a nested scope has the same name as a variable in an outer scope.
// - The inner variable "shadows" or hides the outer variable, making the outer variable inaccessible within the inner scope.

//* Explain Declaration
// Declaration is the process of defining a variable name with `var`, `let`, or `const`, allowing it to store a value.

//* Illegal Shadowing
// Illegal shadowing occurs when a `let` variable is declared with the same name as a `var` variable in the same scope.
// - This results in an error as `let` and `const` must respect the block scope, while `var` does not, causing conflicts.

//* Temporal Dead Zone and why it is needed
// Temporal Dead Zone (TDZ) is the time between entering a scope and the point at which a variable is declared.
// - This helps catch errors by preventing the use of variables before they are declared and initialized, enforcing predictable variable usage.

//* Example of `var`, `let`, `const`, scope, and shadowing:

function test() {
  let a = "Hello";
  if (true) {
    let a = "Hi"; // This `a` shadows the outer `a`
    console.log(a); // "Hi"
  }
  console.log(a); // "Hello"
}

// Example of illegal shadowing
/*
  function test() {
    var a = "Hello";
    let a = "Hi"; // Illegal shadowing (error in JavaScript)
  }
  */

//* Example of Hoisting with var, let, and const
function testHoisting() {
  console.log(a); // undefined (due to hoisting of `var a`)
  console.log(b); // ReferenceError (in the TDZ for `let b`)
  console.log(c); // ReferenceError (in the TDZ for `const c`)

  var a = 5;
  let b = 6;
  const c = 8;
}

testHoisting();
