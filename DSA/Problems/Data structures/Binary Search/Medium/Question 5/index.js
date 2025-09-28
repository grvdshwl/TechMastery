//* Capacity to Ship Packages
var shipWithinDays = function (weights, days) {
  let left = Math.max(...weights);

  let right = weights.reduce((acc, weight) => acc + weight, 0);

  const canShip = (capacity) => {
    let ships = 1;
    let currentCap = capacity;

    for (let weight of weights) {
      if (currentCap - weight < 0) {
        ships++;
        currentCap = capacity;
      }

      currentCap -= weight;
    }

    return ships <= days;
  };

  let minWeight = Infinity;

  while (left <= right) {
    let capacity = Math.floor((left + right) / 2);

    if (canShip(capacity)) {
      minWeight = Math.min(minWeight, capacity);
      right = capacity - 1;
    } else {
      left = capacity + 1;
    }
  }
  return minWeight;
};

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let days = 5;

console.log(shipWithinDays(weights, days));
