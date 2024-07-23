/**
 * Problem: Non-overlapping Intervals
 *
 * Given a collection of intervals, find the minimum number of intervals
 *  you need to remove to make the rest of the intervals non-overlapping.
 *
 * Time Complexity: O(n log n), where n is the number of intervals (due to sorting)
 */

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let prevEnd = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start < prevEnd) {
      count++;
      prevEnd = Math.min(end, prevEnd);
    } else {
      prevEnd = end;
    }
  }
};
// Test Case
let testIntervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
console.log(eraseOverlapIntervals(testIntervals));
