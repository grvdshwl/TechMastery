//* Container with most water---done

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array
// [1,8,6,2,5,4,8,3,7]. In this case, the max area of water
//  (blue section) the container can contain is 49.

// Example 2:

// Input: height = [1,1]
// Output: 1

const maxArea = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let maxArea = -Infinity;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(arr[left], arr[right]);
    const area = width * minHeight;
    maxArea = Math.max(area, maxArea);

    if (arr[left] <= arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

// Test cases
const test1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const test2 = [3, 9, 3, 4, 7, 2, 12, 6];

console.log("Max area for test case 1:", maxArea(test1));
console.log("Max area for test case 2:", maxArea(test2));
