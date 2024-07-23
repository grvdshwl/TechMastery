//* Implement Custom lodash _partial()
function _partial(func, ...partialArgs) {
  return function (...args) {
    return func(...partialArgs, ...args);
  };
}

// Example usage:
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

const greetHello = _partial(greet, "Hello");
console.log(greetHello("John")); // Output: "Hello, John!"

//* Implement Custom lodash _once()

function _once(func) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = func(...args);
    }
    return result;
  };
}

// Example usage:
const onceFunc = _once(() => {
  console.log("This function will be called only once");
});

onceFunc(); // Output: "This function will be called only once"
onceFunc(); // No output (function not called again)
