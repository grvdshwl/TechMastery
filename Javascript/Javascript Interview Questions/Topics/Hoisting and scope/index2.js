// JavaScript uses lexical scoping, meaning that the scope of variables is determined
// by their location in the source code. Variables are accessible within the block
// or function where they are defined and any inner functions, regardless of where
// those functions are later called.

function outer() {
  const outerVar = "I am from outer!";

  function inner() {
    // `inner` can access `outerVar` because it is lexically within the `outer` function's scope.
    console.log(outerVar); // Output: "I am from outer!"
  }

  inner();
}

outer();
// Output: "I am from outer!"

// Explanation:
// The `inner` function is defined within `outer`, so it has access to `outerVar` due to lexical scoping.
// Lexical scope is determined at the time the code is written, not at runtime.

// -------------------

// Dynamic Scoping (Hypothetical in JavaScript)

// JavaScript does NOT use dynamic scoping, but if it did, a function would be able to access
// variables from its caller's scope, even if those variables were not lexically in its own scope.

function outerDynamic() {
  const outerVar = "I am from outer!";
  innerDynamic(); // If JavaScript had dynamic scoping, `innerDynamic` would access `outerVar` here.
}

function innerDynamic() {
  console.log(outerVar); // In JavaScript, this throws an error: `outerVar` is not defined.
}

outerDynamic();
// Actual Output in JavaScript: Uncaught ReferenceError: outerVar is not defined

// Explanation:
// JavaScript uses lexical scope, so `innerDynamic
