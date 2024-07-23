/**
 * Title: Maximum Number of Non-overlapping Meetings
 *
 * Problem:
 * Given start and end times of N meetings, find the maximum number of meetings
 * that can be scheduled without overlapping. Each meeting is represented by a
 * start time and an end time.
 *
 * Time Complexity: O(N log N) - Sorting the meetings based on end times.
 *
 * @param {number[]} start - Array of start times for each meeting.
 * @param {number[]} end - Array of end times for each meeting.
 * @param {number} n - Number of meetings.
 * @returns {number} - Maximum number of non-overlapping meetings.
 */
function maxMeetings(start, end, n) {
  let meetings = [];

  // Create a list of meetings
  for (let i = 0; i < n; i++) {
    let meet = [start[i], end[i]];
    meetings.push(meet);
  }

  // Sort the meetings based on their end times
  meetings.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let prevEnd = meetings[0][1];

  // Iterate through the sorted meetings and select non-overlapping meetings
  for (let i = 1; i < n; i++) {
    if (meetings[i][0] > prevEnd) {
      prevEnd = meetings[i][1];
      count++;
    }
  }

  return count;
}

// Test case
const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];
const n = 6;

console.log("Maximum number of meetings:", maxMeetings(start, end, n)); // Output: 4
