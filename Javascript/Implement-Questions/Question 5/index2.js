//* https://medium.com/@ruchivora16/javascript-promise-chaining-18c222ffeae2
function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("Promises must be an array");
    }

    const results = [];
    let settledPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(
          (value) => {
            results[index] = { status: "fulfilled", value };
          },
          (reason) => {
            results[index] = { status: "rejected", reason };
          }
        )
        .finally(() => {
          settledPromises++;
          if (settledPromises === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

// Example usage:
const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

promiseAllSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [{ status: 'fulfilled', value: 3 }, { status: 'fulfilled', value: 42 }, { status: 'fulfilled', value: 'foo' }]
  })
  .catch((error) => {
    console.error(error);
  });
