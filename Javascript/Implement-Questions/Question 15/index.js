//* Implement a function to execute N async tasks in series.
async function executeTasksInSeries(tasks) {
  const results = [];
  for (const task of tasks) {
    try {
      const result = await task();
      results.push(result);
    } catch (error) {
      results.push({ error });
    }
  }
  return results;
}

// Example usage:
async function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 completed");
    }, 1000);
  });
}

async function asyncTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 completed");
    }, 1500);
  });
}

async function asyncTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Task 3 failed");
    }, 2000);
  });
}

const tasks = [asyncTask1, asyncTask2, asyncTask3];

executeTasksInSeries(tasks)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
