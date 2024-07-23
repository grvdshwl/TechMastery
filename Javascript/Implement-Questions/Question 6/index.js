//* Promise.race pollyfill
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("promises must be an array"));
      return;
    }

    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

// Example usage:
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});

promiseRace([promise1, promise2])
  .then((value) => {
    console.log(value); // Prints "one" because promise1 resolves first
  })
  .catch((error) => {
    console.error(error);
  });
