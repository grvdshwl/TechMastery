// Gas Station

// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

var canCompleteCircuit = function (gas, cost) {
  let sumCost = cost.reduce((acc, a) => acc + a, 0);
  let sumGas = gas.reduce((acc, a) => acc + a, 0);

  if (sumCost > sumGas) {
    return -1;
  }

  let currentGas = 0;
  let startingIndex = 0;

  for (let i = 0; i < gas.length; i++) {
    currentGas = currentGas + (gas[i] - cost[i]);

    if (currentGas < 0) {
      currentGas = 0;
      startingIndex = i + 1;
    }
  }

  return startingIndex;
};

const result = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
console.log(result);
