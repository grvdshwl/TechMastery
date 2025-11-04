//* Best time to buy and Sell stock II

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5),
//  profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6),
//  profit = 6-3 = 3. Total profit is 4 + 3 = 7.

//* Time complexity ---> O(n)
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      let currentProfit = prices[i] - prices[i - 1];
      profit += currentProfit;
    }
  }

  return profit;
};
let input = [3, 2, 6, 5, 0, 3];

const result = maxProfit(input);
console.log(result);
