//* Jump Game

//* Time complexity ---> O(n)

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

var canJump = function (nums) {
  let n = nums.length;
  let goal = n - 1;

  for (let i = n - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};

let input = [3, 2, 0, 1, 4];
const result = canJump(input);

console.log(result);
