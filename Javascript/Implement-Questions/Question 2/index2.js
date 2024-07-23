//* setTimeout and clearAllTimeouts

function mySetTimeout(callback, delay) {
  const startTime = Date.now();

  // Loop continuously until the current time exceeds the start time plus the delay
  while (Date.now() - startTime < delay) {}

  // Once the delay is reached, execute the callback
  callback();
}

// Example usage:
mySetTimeout(() => {
  console.log("Custom setTimeout finished!");
}, 2000);

let timeoutIds = [];

function mySetTimeout(callback, delay) {
  const timeoutId = setTimeout(() => {
    callback();
    // Remove the timeout ID from the array after it's executed
    timeoutIds = timeoutIds.filter((id) => id !== timeoutId);
  }, delay);
  // Add the timeout ID to the array
  timeoutIds.push(timeoutId);
  return timeoutId;
}

function clearAllTimeouts() {
  timeoutIds.forEach((id) => clearTimeout(id));
  timeoutIds = [];
}

// Example usage:
const timeout1 = mySetTimeout(() => {
  console.log("Timeout 1 finished!");
}, 2000);

const timeout2 = mySetTimeout(() => {
  console.log("Timeout 2 finished!");
}, 3000);

// Clear all timeouts
clearAllTimeouts();
