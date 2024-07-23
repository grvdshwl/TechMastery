//* House Robber

//* Time complexity --->O(n)

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2)
//  and then rob house 3 (money = 2), because they are adjacent houses.

const houseRobber = (houses) => {
  let rob1 = 0;
  let rob2 = 0;

  for (let house of houses) {
    let temp = Math.max(rob1 + house, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};

const input = [1, 2, 3, 1];
const result = houseRobber(input);
console.log(result);
