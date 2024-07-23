// Fractional Knapsack

function knapsackGreedy(weights, values, capacity) {
  const ratios = weights.map((weight, index) => {
    return {
      index: index,
      ratio: values[index] / weight,
    };
  });

  ratios.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;
  const chosenItems = [];

  for (const item of ratios) {
    const index = item.index;
    if (weights[index] <= capacity) {
      chosenItems.push(index);
      totalValue += values[index];
      capacity -= weights[index];
    }
  }

  return {
    maxValue: totalValue,
    chosenItems: chosenItems,
  };
}

// Example usage:
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
const result = knapsackGreedy(weights, values, capacity);
console.log("Max Value:", result.maxValue);
console.log(
  "Chosen items:",
  result.chosenItems.map((i) => `Item ${i + 1}`),
);
