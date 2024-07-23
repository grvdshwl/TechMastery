//* Car Pooling

let trips = [
  [2, 1, 5],
  [3, 3, 7],
];
let capacity = 4;

var carPooling = function (trips, capacity) {
  trips.sort((a, b) => a[1] - b[1]);
  let tripLog = [];

  for (let trip of trips) {
    const [passengers, pickUp, drop] = trip;

    tripLog.forEach((trip) => {
      if (trip[0] <= pickUp) {
        capacity += trip[1];
      }
    });

    tripLog = tripLog.filter((trip) => trip[0] > pickUp);

    if (capacity < passengers) {
      return false;
    }

    capacity -= passengers;
    tripLog.push([drop, passengers]);
  }

  return true;
};

const result = carPooling(trips, capacity);
console.log(result);
