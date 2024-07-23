//* 	Zero sum subrray -done

//* Example 1:

// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6
// Explanation:
// There are 4 occurrences of [0] as a subarray.
// There are 2 occurrences of [0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 2 filled with 0.
// Therefore, we return 6.

var zeroFilledSubarray = function (nums) {
  let result = 0;
  let prefix = 1;

  for (let num of nums) {
    if (num !== 0) {
      prefix = 1;
      continue;
    } else {
      result += prefix;
      prefix++;
    }
  }

  return result;
};
