//* House Robber II

//* Time complexity --->O(n)

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and
//  then rob house 3 (money = 2), because they are adjacent houses.

const houseRobber2 = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const robHouses = (houses) => {
    let previousRob = 0;
    let currentRob = 0;

    for (let house of houses) {
      let temp = Math.max(previousRob + house, currentRob);
      previousRob = currentRob;
      currentRob = temp;
    }
    return currentRob;
  };

  return Math.max(
    robHouses(nums.slice(1)), // Case where the first house is not robbed
    robHouses(nums.slice(0, nums.length - 1)) // Case where the last house is not robbed
  );
};

const input = [1, 2, 3, 1];
const result = houseRobber2(input);
console.log(result);
