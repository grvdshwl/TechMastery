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

// Throttle vs Debounce: Comparison Table

/*
| Feature           | Throttle                                        | Debounce                                         |
|-------------------|-------------------------------------------------|--------------------------------------------------|
| Purpose           | Ensures a function is called at most once every | Ensures a function is called only after a period |
|                   | specified time interval, regardless of how      | of inactivity, meaning the function will be      |
|                   | many times the event is triggered.              | delayed until the user stops triggering events.  |
|-------------------|-------------------------------------------------|--------------------------------------------------|
| Execution         | Executes the function periodically, once in     | Executes the function only after the user stops  |
| Behavior          | the given time frame.                           | triggering the event for a specified time.       |
|-------------------|-------------------------------------------------|--------------------------------------------------|
| Use Cases         | Useful for scenarios like scrolling, resizing   | Useful for scenarios like search input fields,   |
|                   | windows, or handling button clicks where        | form validation, or window resizing where you    |
|                   | continuous calls are needed, but at a limited   | want the function to be triggered only after the |
|                   | rate (e.g., every 100ms).                       | user has stopped typing or resizing.             |
|-------------------|-------------------------------------------------|--------------------------------------------------|
| Example           | Throttle is used to limit the number of API     | Debounce is used to delay the API call until     |
|                   | requests made as the user scrolls down a        | the user finishes typing in a search input field.|
|                   | page, preventing an overload of requests.       |                                                  |
|-------------------|-------------------------------------------------|--------------------------------------------------|
| Implementation    | Executes immediately or after a fixed interval, | Executes only after the user has stopped         |
| Timing            | regardless of additional triggers.              | triggering the event for a certain amount of time|
*/
