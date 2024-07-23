//  Implement 'N' async tasks in Series - Hard

function asyncTasksInSeries(tasks) {
  return new Promise((resolve, reject) => {
    const results = [];
    let index = 0;

    function runNextTask() {
      if (index < tasks.length) {
        tasks[index]()
          .then((result) => {
            results.push(result);
            index++;
            runNextTask();
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        resolve(results);
      }
    }

    runNextTask();
  });
}

// Example usage:
const tasksInSeries = [
  () => asyncTask1(),
  () => asyncTask2(),
  () => asyncTask3(),
];

asyncTasksInSeries(tasksInSeries)
  .then((results) => {
    console.log("Results of tasks executed in series:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
