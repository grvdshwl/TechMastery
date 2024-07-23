//* 	Largest Number ---done

// Example 1:

// Input: nums = [10,2]
// Output: "210"

// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

var largestNumber = function (nums) {
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  return nums[0] === 0 ? "0" : nums.join("");
};

console.log(largestNumber([3, 30, 34, 5, 9]));
