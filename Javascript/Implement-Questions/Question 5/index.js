//* Promise.all poly fill
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("Promises must be an array"));
      return;
    }

    const results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// Example usage:
const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

promiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, 42, 'foo']
  })
  .catch((error) => {
    console.error(error);
  });
