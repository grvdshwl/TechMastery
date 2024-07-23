//* Top K Frequent Elements
const topKFrequent = (nums, k) => {
  const counter = new Map();
  nums.forEach((num) => counter.set(num, (counter.get(num) || 0) + 1));
  return [...counter.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((entry) => entry[0]);
};
