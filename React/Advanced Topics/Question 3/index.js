//* How Throttling and Debounce work in React JS

//* Debouncing ensures that a function is only executed after a pause in its invocation, ignoring rapid consecutive calls.

const debounce = (cb, delay = 1000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

//* Throttling ensures that a function is not executed more than once in a specified time interval,
//* even if it is called multiple times.

//*Throttling limits the number of times a function can be called within a specific time frame.
const throttle = (cb, delay = 1000) => {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    waitingArgs = null;
    setTimeout(timeoutFunc, delay);
  };
};
