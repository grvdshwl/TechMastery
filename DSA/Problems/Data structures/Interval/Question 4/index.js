// Problem Title: Meeting Rooms II
// Time Complexity: O(n log n)

function minMeetingRooms(intervals) {
  // Sort start times and end times separately
  const start = intervals.map((i) => i[0]).sort((a, b) => a - b);
  const end = intervals.map((i) => i[1]).sort((a, b) => a - b);

  let res = 0;
  let count = 0;
  let s = 0;
  let e = 0;

  while (s < intervals.length) {
    if (start[s] < end[e]) {
      s++;
      count++;
    } else {
      e++;
      count--;
    }

    // Update the maximum number of meeting rooms needed
    res = Math.max(res, count);
  }

  return res;
}

// Test Case
const meetings = [
  [0, 30],
  [5, 10],
  [15, 20],
]; // Should return 2
console.log(minMeetingRooms(meetings));
