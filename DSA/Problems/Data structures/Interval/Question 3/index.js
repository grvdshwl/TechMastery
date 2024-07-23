//* Problem Title: Meeting Rooms
//* Time Complexity: O(n log n)

// Input: intervals = [(0,30),(5,10),(15,20)]

// Output: false

// Explanation:
// (0,30),(5,10) and (0,30),(15,20) will conflict

function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    let intervalOne = intervals[i - 1];
    let intervalTwo = intervals[i];

    if (intervalOne[1] > intervalTwo[0]) {
      return false;
    }
  }

  return true;
}

// Test Case
const meetings1 = [
  [0, 30],
  [5, 10],
  [15, 20],
]; // Should return false
console.log(canAttendMeetings(meetings1));

const meetings2 = [
  [7, 10],
  [2, 4],
]; // Should return true
console.log(canAttendMeetings(meetings2));
