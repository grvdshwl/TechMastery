//* Implement a function that acts like setInterval but returns a function to cancel the Interval do it manuallly

function mySetInterval(callback, interval) {
  let intervalId = null;

  function executeCallback() {
    intervalId = setTimeout(function () {
      callback();
      executeCallback();
    }, interval);
  }

  executeCallback();

  function cancelInterval() {
    clearTimeout(intervalId);
  }

  return cancelInterval;
}

// Example usage:
const cancelInterval = mySetInterval(() => {
  console.log("Interval callback executed ");
}, 1000);

// After some time, cancel the interval
setTimeout(() => {
  cancelInterval(); // This will cancel the interval
  console.log("Interval canceled.");
}, 5000);
