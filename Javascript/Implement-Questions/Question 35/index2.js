// Implement 'N' async tasks in Parallel - Medium

function asyncTasksInParallel(tasks) {
  const promises = tasks.map((task) => task());
  return Promise.all(promises);
}

// Example usage:
const tasksInParallel = [
  () => asyncTask1(),
  () => asyncTask2(),
  () => asyncTask3(),
];

asyncTasksInParallel(tasksInParallel)
  .then((results) => {
    console.log("Results of tasks executed in parallel:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

