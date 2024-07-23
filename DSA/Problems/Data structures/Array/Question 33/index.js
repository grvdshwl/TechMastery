/**
 * Penality for a shop --- Done
 *
 * Input: customers = "YYNY"
 * Output: 2
 * Explanation:
 * - Closing the shop at the 0th hour incurs in 1+1+0+1 = 3 penalty.
 * - Closing the shop at the 1st hour incurs in 0+1+0+1 = 2 penalty.
 * - Closing the shop at the 2nd hour incurs in 0+0+0+1 = 1 penalty.
 * - Closing the shop at the 3rd hour incurs in 0+0+1+1 = 2 penalty.
 * - Closing the shop at the 4th hour incurs in 0+0+1+0 = 1 penalty.
 * Closing the shop at 2nd or 4th hour gives a minimum penalty. Since 2 is earlier, the optimal closing time is 2.
 */

function bestClosingTime(customers) {
  const n = customers.length;

  let prefix = new Array(n + 1).fill(0);

  let postfix = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1];

    if (customers[i - 1] === "N") {
      prefix[i] += 1;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    postfix[i] = postfix[i + 1];

    if (customers[i] === "Y") {
      postfix[i] += 1;
    }
  }

  let minPenality = Infinity;
  let minIndex = -1;

  for (let i = 0; i <= n; i++) {
    let penality = prefix[i] + postfix[i];

    if (penality < minPenality) {
      minPenality = penality;
      minIndex = i;
    }
  }

  return minIndex;
}

// Test
const customers = "YYNY";
console.log(bestClosingTime(customers)); // Output: 2
