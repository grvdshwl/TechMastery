//* Asynchronous Javascript

// Asynchronous JavaScript allows tasks to be executed without blocking the main thread,
// enabling non-blocking behavior and better performance in web applications.

// Example 1: setTimeout
// This function schedules a task to be executed after a specified amount of time.
setTimeout(() => {
  console.log("This message will be logged after 2 seconds.");
}, 2000);

// Example 2: Promises
// Promises provide a cleaner way to handle asynchronous operations and their results.
// Here, we create a promise that resolves after a certain time and logs a message.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

delay(3000).then(() => {
  console.log("This message will be logged after 3 seconds using promises.");
});

// Example 3: async/await
// async/await is a syntactic sugar built on top of promises, making asynchronous code look synchronous.
// Here, we use async/await to wait for a promise to resolve before logging a message.
const fetchData = async () => {
  await delay(4000);
  console.log("This message will be logged after 4 seconds using async/await.");
};

fetchData();
