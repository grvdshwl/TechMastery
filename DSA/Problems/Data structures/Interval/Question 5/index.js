//*  Remove Covered Intervals
var removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  const stack = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [startOne, endOne] = stack[stack.length - 1];
    const [startTwo, endTwo] = intervals[i];

    if (startTwo >= startOne && endTwo <= endOne) {
      continue;
    } else {
      stack.push(intervals[i]);
    }
  }

  return stack.length;
};
