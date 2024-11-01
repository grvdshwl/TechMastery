//* https://roadsidecoder.hashnode.dev/javascript-interview-questions-promises-and-its-polyfills

//* What are promises in javascript ?
//* A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//* It allows handling asynchronous operations in a more readable manner compared to callbacks.
//* Example:
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed!");
  }
});

myPromise
  .then((result) => console.log(result)) // Output: Operation was successful!
  .catch((error) => console.error(error));

//* How promises work in javascript ?
//* Promises work by using the .then() and .catch() methods to handle the result of asynchronous code.
//* They can be in one of three states: pending, fulfilled, or rejected. Once settled, they cannot change states again.
//* Example:
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data); // Fulfills the promise with data
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data)) // Output: { id: 1, name: 'John Doe' }
  .catch((error) => console.error(error));

//* explain callback in javascript ?
//* A callback is a function passed into another function as an argument to be executed later.
//* It's commonly used in asynchronous code to perform actions once an operation completes.
//* Example:
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = { id: 2, name: "Jane Doe" };
    callback(data); // Execute callback with data
  }, 1000);
}

fetchDataWithCallback((data) => {
  console.log(data); // Output: { id: 2, name: 'Jane Doe' }
});

//* explain callback hell in javascript ?
//* Callback hell is a phenomenon in which callbacks are nested within other callbacks several levels deep, making code difficult to read and maintain.
//* It often occurs in complex asynchronous code, leading to deeply nested callbacks.
//* Example:
function firstFunction(callback) {
  setTimeout(() => {
    console.log("First function complete");
    callback();
  }, 1000);
}

function secondFunction(callback) {
  setTimeout(() => {
    console.log("Second function complete");
    callback();
  }, 1000);
}

function thirdFunction(callback) {
  setTimeout(() => {
    console.log("Third function complete");
    callback();
  }, 1000);
}

// Callback hell
firstFunction(() => {
  secondFunction(() => {
    thirdFunction(() => {
      console.log("All functions complete");
    });
  });
});

//* Explain Promise chaining
//* Promise chaining is a technique where .then() is used in sequence, allowing for a series of asynchronous tasks to be handled in a readable order.
//* Each .then() receives the result from the previous promise, allowing easy flow of data between asynchronous calls.
//* Example:
const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
};

const fetchPosts = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ postId: 1, userId, title: "Post 1" }]);
    }, 1000);
  });
};

fetchUser()
  .then((user) => {
    console.log(user); // Output: { id: 1, name: 'Alice' }
    return fetchPosts(user.id);
  })
  .then((posts) => console.log(posts)); // Output: [{ postId: 1, userId: 1, title: 'Post 1' }]

//* Explain async await
//* async and await are keywords in JavaScript that make it easier to work with promises.
//* async functions always return a promise, and await pauses the function execution until the promise resolves, making asynchronous code look synchronous.
//* Example:
const fetchDataAsync = async () => {
  const user = await fetchUser();
  console.log(user); // Output: { id: 1, name: 'Alice' }

  const posts = await fetchPosts(user.id);
  console.log(posts); // Output: [{ postId: 1, userId: 1, title: 'Post 1' }]
};

fetchDataAsync();
