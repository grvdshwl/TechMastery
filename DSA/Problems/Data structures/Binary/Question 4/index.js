//* Missing Number

//* Time complexity --> O(n)
//* Space complexity --- O(1)

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are
// in the range [0,3]. 2 is the missing number in the range since it
// does not appear in nums.

var missingNumber = function (nums) {
  let result = nums.length;

  for (let i = 0; i < nums.length; i++) {
    result += i;
    result -= nums[i];
  }
  return result;
};

let input = [3, 0, 1];

const result = missingNumber(input);
console.log(result);
