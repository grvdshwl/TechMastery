//* Candy Problem
//*Time complexity - O(n)

//* Example 1:

//* Input: ratings = [1,2,2]
//*Output: 4

//* Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
//* The third child gets 1 candy because it satisfies the above two conditions.

//* Rules :-
//* Each child must have at least one candy.
//* Children with a higher rating get more candies than their neighbors.

var candy = function (ratings) {
  const n = ratings.length;
  const candy = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candy[i] = Math.max(candy[i], candy[i + 1] + 1);
    }
  }

  const total = candy.reduce((acc, num) => acc + num, 0);

  return total;
};
const ratingsExample = [1, 2, 2];
const result = candy(ratingsExample);
console.log(result);
