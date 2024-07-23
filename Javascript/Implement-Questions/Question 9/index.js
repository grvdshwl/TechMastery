//* Implement Debounce and Throttle

//* Debouncing ensures that a function is only executed
//* after a pause in its invocation, ignoring rapid consecutive calls.

const debounce = (cb, delay = 1000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return cb(...args);
    }, delay);
  };
};

//*Throttling limits the number of times a function can be called
//*  within a specific time frame.

const throttle = (cb, delay = 100) => {
  let lastTime = 0;

  return (...args) => {
    let now = new Date.now();
    if (now - lastTime < delay) {
      return;
    }
    lastTime = now;
    return cb(...args);
  };
};
