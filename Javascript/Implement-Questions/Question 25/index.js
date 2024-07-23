//* Implement a promisify function that allows the original function to
//* override the return value.

function promisify(originalFunction) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      // Call the original function with provided arguments and callback
      const returnValue = originalFunction.apply(this, [...args, callback]);

      // If the original function returns a value, resolve the promise with that value
      if (returnValue !== undefined && returnValue !== null) {
        resolve(returnValue);
      }
    });
  };
}

// Example usage:
// Suppose we have an asynchronous function called doSomethingAsync
function doSomethingAsync(arg1, arg2, callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    // Assume some processing is done here
    const result = arg1 + arg2;
    // Call the callback with the result
    callback(null, result);
  }, 1000);
}

// We promisify the doSomethingAsync function
const promisifiedFunction = promisify(doSomethingAsync);

// Now we can use promisifiedFunction as a Promise
promisifiedFunction(2, 3)
  .then((result) => {
    console.log("Result:", result); // Output: Result: 5
  })
  .catch((error) => {
    console.error("Error:", error);
  });
