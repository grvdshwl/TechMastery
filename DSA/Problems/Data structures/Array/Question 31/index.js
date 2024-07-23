//* 	Top K Frequent Elements ---done
var topKFrequent = function (nums, k) {
  let counter = new Map();

  nums.forEach((num) => {
    counter.set(num, (counter.get(num) || 0) + 1);
  });

  let sorted = [...counter.entries()].sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((entry) => entry[0]);
};
