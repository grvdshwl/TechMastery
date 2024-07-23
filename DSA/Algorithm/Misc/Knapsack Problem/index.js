// The Knapsack problem is a classic optimization problem in computer science and mathematics
// that involves selecting items from a set to maximize the total value, subject to a constraint
// on the total weight that can be carried.

// The Knapsack problem is a classic optimization problem in computer science and mathematics that
//  involves selecting items from a set to maximize the total value, subject to a constraint on
//  the total weight that can be carried.

// Problem Statement:

// Given a set of items, each with a weight and a value, determine the maximum value that can
// be obtained by selecting a subset of the items without exceeding a given weight capacity.

// There are two main variations of the Knapsack problem:

// 0/1 Knapsack Problem: In this variation, each item can either be included or excluded entirely;
//  there is no possibility of using a fraction of an item.

// Fractional Knapsack Problem: Here, fractions of items can be taken to maximize the total value.
//  This variation allows for using parts of items rather than requiring them to be taken as whole
//  units.

// 0/1 Knapsack Problem:
// Approach:

// The most common approach to solving the 0/1 Knapsack Problem is using dynamic programming.
// It involves constructing a matrix (or a table) to store the solutions of subproblems.
// Steps:

//     Initialization: Create a matrix, typically called a DP table, to store solutions for
//     subproblems. Initialize it with appropriate values.

//     Dynamic Programming Solution:
//         Start iterating through each item and each possible weight capacity.
//         At each step, consider two options:
//             If the current item's weight exceeds the current capacity, inherit the value
//             from the previous row.
//             If the current weight can be accommodated, choose the maximum value between:
//                 Not including the current item (value from the previous row)
//                 Including the current item and adding its value to the value of the remaining
//                 capacity.

//     Backtracking: After filling the DP table, trace back to determine the items selected
//     that contributed to the maximum value.

//     Output: Return the maximum value that can be achieved and the selected items.

// Time Complexity:

//     Time complexity of the dynamic programming solution for the 0/1 Knapsack Problem is
//     typically O(n * W), where 'n' is the number of items and 'W' is the capacity of the knapsack.
//     Space complexity is also O(n * W) because of the DP table.

function knapsack(weights, values, capacity) {
  // Get the number of items
  const n = values.length;

  // Initialize a 2D array (dp table) to store subproblem solutions
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  // Iterate through each item
  for (let i = 1; i <= n; i++) {
    // Consider each possible weight from 1 to the total capacity
    for (let w = 1; w <= capacity; w++) {
      // Check if the current item's weight exceeds the current capacity
      if (weights[i - 1] > w) {
        // If it does, the current item cannot be included, so inherit the value from the previous row
        dp[i][w] = dp[i - 1][w];
      } else {
        // If the current weight can be accommodated, choose the maximum value between
        // - Not including the current item (inherit the value from the previous row)
        // - Including the current item and adding its value to the value of the remaining capacity
        dp[i][w] = Math.max(
          dp[i - 1][w],
          values[i - 1] + dp[i - 1][w - weights[i - 1]]
        );
      }
    }
  }

  // Reconstruct the selected items by backtracking through the filled dp table
  const selectedItems = [];
  let i = n,
    j = capacity;
  while (i > 0 && j > 0) {
    if (dp[i][j] !== dp[i - 1][j]) {
      // If the current cell's value is different from the one above, the item was included
      selectedItems.push(i - 1); // Add the index of the selected item
      j -= weights[i - 1]; // Move to the previous weight
      i--; // Move to the previous item
    } else {
      i--; // Move to the previous item without changing the weight
    }
  }

  // Return the maximum value that can be achieved and the indices of the selected items
  return {
    maxValue: dp[n][capacity],
    selectedItems: selectedItems.reverse(), // Reverse the array to display in the correct order
  };
}

// Example usage:
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;

// Call the knapsack function with the given weights, values, and capacity
const result = knapsack(weights, values, capacity);

// Display the maximum value that can be achieved and the indices of the selected items
console.log("Max value:", result.maxValue);
console.log(
  "Selected items:",
  result.selectedItems.map((item) => `Item ${item + 1}`)
);
