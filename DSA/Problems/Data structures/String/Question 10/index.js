//* Find next greater number with same set of digits. [Very Very IMP]

// Given a positive integer n, find the smallest integer which
// has exactly the same digits existing in the integer n and is greater
// in value than n. If no such positive integer exists, return -1.

// Note that the returned integer should fit in 32-bit integer,
// if there is a valid answer but it does not fit in 32-bit integer, return -1.

// Example 1:

// Input: n = 12
// Output: 21

// Example 2:

// Input: n = 21
// Output: -1
// Constraints:
// 1 <= n <= 2^31 - 1

var nextGreaterElement = function (n) {
  //* Find K
  let nums = String(n).split("");

  let k = nums.length - 2;

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] <= nums[i - 1]) {
      k--;
    } else {
      break;
    }
  }

  //*return -1 if k=-1
  if (k === -1) {
    return -1;
  } else {
    for (let i = nums.length - 1; i > 0; i--) {
      if (nums[i] > nums[k]) {
        [nums[i], nums[k]] = [nums[k], nums[i]];
        break;
      }
    }
    reverse(nums, k + 1, nums.length - 1);
  }

  //*else swap and reverse
  let result = +nums.join("");
  return result > 2 ** 31 - 1 ? -1 : result;
};

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

let input = 24068;

console.log(nextGreaterElement(input));
