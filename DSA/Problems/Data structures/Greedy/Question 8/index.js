//* Candy

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length;
  let candies = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = 1 + candies[i - 1];
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], 1 + candies[i + 1]);
    }
  }

  return candies.reduce((acc, candy) => acc + candy, 0);
};
