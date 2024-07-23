//  Implement 'N' async tasks in Race - Easy

function asyncTasksInRace(tasks) {
  const promises = tasks.map((task) => task());
  return Promise.race(promises);
}

// Example usage:
const tasksInRace = [
  () => asyncTask1(),
  () => asyncTask2(),
  () => asyncTask3(),
];

asyncTasksInRace(tasksInRace)
  .then((result) => {
    console.log("Result of the first task to finish:", result);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
 