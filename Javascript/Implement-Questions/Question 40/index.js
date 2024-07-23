//* implement cutsom promise finally
function customFinally(promise, callback) {
  return promise.then(
    (value) => {
      callback();
      return value;
    },
    (reason) => {
      callback();
      throw reason;
    }
  );
}

// Example usage:
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    // Resolve the promise
    resolve("Success!");
  }, 1000);
});

customFinally(myPromise, () => {
  console.log("Promise has been settled.");
}).then(
  (result) => {
    console.log("Promise resolved with result:", result);
  },
  (error) => {
    console.error("Promise rejected with error:", error);
  }
);
