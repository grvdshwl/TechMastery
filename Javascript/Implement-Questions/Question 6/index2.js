function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("promises must be an array"));
      return;
    }

    let rejectedCount = 0;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          rejectedCount++;
          if (rejectedCount === promises.length) {
            reject(new AggregateError("All promises were rejected"));
          }
        });
    });
  });
}

// Example usage:
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "two");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 150, "three");
});

promiseAny([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // Prints "one" because promise1 resolves first
  })
  .catch((error) => {
    console.error(error); // Should catch AggregateError
  });
