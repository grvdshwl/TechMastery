// Promises in JavaScript provide a way to handle asynchronous operations and their results.
// They represent a value which might be available now, or in the future, or never.

// Example 1: Parallel Promises
// You can execute multiple asynchronous operations simultaneously using Promise.all.
// This example demonstrates fetching data from two different APIs in parallel.
const fetchData1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from API 1");
    }, 2000);
  });
};

const fetchData2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from API 2");
    }, 3000);
  });
};

Promise.all([fetchData1(), fetchData2()]).then((data) => {
  console.log("Parallel Promises:", data);
});

// Example 2: Race Promises
// Promise.race returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
// This example demonstrates racing between two promises, whichever resolves first will be returned.
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 rejected");
  }, 1000);
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log("Race Result:", result);
  })
  .catch((error) => {
    console.error("Race Error:", error);
  });

// Example 3: Promise.allSettled
// Promise.allSettled returns a promise that resolves after all of the given promises have either resolved or rejected.
// Unlike Promise.all, it doesn't short-circuit when any of the promises reject.
// This example demonstrates handling the results of multiple promises whether they resolve or reject.
const promises = [
  Promise.resolve("Resolved Promise"),
  Promise.reject("Rejected Promise"),
  new Promise((resolve) => setTimeout(resolve, 1000, "Delayed Promise")),
];

Promise.allSettled(promises).then((results) => {
  console.log("All Settled Results:", results);
});

// Example 4: Promise.any (Introduced in ES2021)
// Promise.any returns a promise as soon as one of the promises in the iterable fulfills, with the value of that promise.
// This example demonstrates using Promise.any to handle the first fulfilled promise.
const promiseA = new Promise((resolve, reject) =>
  setTimeout(reject, 2000, "Rejected A")
);
const promiseB = new Promise((resolve) =>
  setTimeout(resolve, 1000, "Resolved B")
);
const promiseC = new Promise((resolve, reject) =>
  setTimeout(reject, 3000, "Rejected C")
);

Promise.any([promiseA, promiseB, promiseC])
  .then((value) => {
    console.log("Promise.any Result:", value);
  })
  .catch((error) => {
    console.error("Promise.any Error:", error);
  });
