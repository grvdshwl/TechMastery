//* Daily Temperature
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;

  const result = new Array(n).fill(0);

  const stack = [];

  for (let i = 0; i < n; i++) {
    const currentTemp = temperatures[i];

    while (stack.length && currentTemp > stack[stack.length - 1][0]) {
      const [stackTemp, stackIndex] = stack.pop();
      let days = i - stackIndex;

      result[stackIndex] = days;
    }

    stack.push([currentTemp, i]);
  }
  return result;
};
