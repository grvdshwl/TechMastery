//* Example 1

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then((res) => console.log(res));

console.log("end");

//* Output:
//* start
//* 1
//* 3
//* end
//* 2

//* Example 2

console.log("start");

const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  console.log(3);
});

promise2.then((res) => console.log(res));

console.log("end");

//* Output:
//* start
//* 1
//* 3
//* end

//* Example 3
function performTask() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let taskPromise = performTask();

taskPromise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Final Task");
  });

//* Output:
//* Error 1
//* Final Task

//* Example 4
const promise = new Promise((resolve) => {
  resolve(1);
});

promise
  .then((value) => {
    console.log(value);
    return value + 1;
  })
  .then((value) => {
    console.log(value);
    throw new Error("Something went wrong");
  })
  .catch((error) => {
    console.error(error.message);
  });

//* Output:
//* 1
//* 2
//* Something went wrong

//* Example 5

let promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise5
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  });

//* Output (delayed by 1 second):
//* 1
//* 2
//* 4

//* Example 6
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise resolved");
});
console.log("End");

//* Output:
//* Start
//* End
//* Promise resolved
//* Timeout

//* Example 7

let firstTask = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "Task One");
});

let secondTask;

let thirdTask = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1200, "Task Three");
});

let fourthTask = new Promise(function (resolve, reject) {
  setTimeout(reject, 300, "Task Four");
});

let fifthTask = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000, "Task Two");
});

let combinedPromise = Promise.all([
  firstTask,
  secondTask,
  thirdTask,
  fourthTask,
  fifthTask,
]);

combinedPromise
  .then(function (data) {
    data.forEach(function (value) {
      console.log("Result:", value);
    });
  })
  .catch(function (error) {
    console.error("Error:", error);
  });

//* Output:
//* Error: Task Four

//* Example 8

const promiseOne = new Promise((resolve) => setTimeout(resolve, 100, "One"));
const promiseTwo = new Promise((resolve) => setTimeout(resolve, 200, "Two"));

Promise.race([promiseOne, promiseTwo])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));

//* Output:
//* One

//* Example 9

const testPromise = new Promise((resolve) => {
  console.log("promise test");
  setTimeout(() => resolve("test"), 2000);
});
async function logTest() {
  const result = await testPromise;
  console.log("async test ");
  console.log(result);
}

logTest();
console.log("sync test ");

//* Output:
//* promise test
//* sync test
//* async test
//* test

// Ques 10 - Promise Chaining

const firstPromise = new Promise((resolve, reject) => {
  resolve("First!");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => res) // This returns the result from `firstPromise`
  .then((res) => console.log(res));

//* Output:
//* First!

//* Question 11
// Function to process an array of promises sequentially
function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;

  const currPromise = funcPromises.shift();

  currPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    .finally(() => promRecurse(funcPromises));
}

const importantAction = (message) => Promise.resolve(`Action: ${message}`);
const likeTheVideo = (message) => Promise.resolve(`Liked: ${message}`);
const shareTheVideo = (message) => Promise.resolve(`Shared: ${message}`);

promRecurse([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Questions"),
  shareTheVideo("Javascript Interview Questions"),
]);

//* Output:
//* Action: Roadside Coder
//* Liked: Javascript Interview Questions
//* Shared: Javascript Interview Questions
