//* Cinema Seat Allocation
var maxNumberOfFamilies = function (n, reservedSeats) {
  const seatMap = {};

  for (const [row, col] of reservedSeats) {
    const cols = seatMap[row] || new Set();
    cols.add(col);
    seatMap[row] = cols;
  }

  let result = (n - Object.keys(seatMap).length) * 2;

  for (const cols of Object.values(seatMap)) {
    const isFirstFree = ![2, 3, 4, 5].some((col) => cols.has(col));
    const isMidFree = ![4, 5, 6, 7].some((col) => cols.has(col));

    const isLastFree = ![6, 7, 8, 9].some((col) => cols.has(col));

    result += Math.max(
      Number(isFirstFree) + Number(isLastFree),
      Number(isMidFree),
    );
  }

  return result;
};
let n = 2;
let reservedSeats = [
  [2, 1],
  [1, 8],
  [2, 6],
];
const result = maxNumberOfFamilies(n, reservedSeats);
console.log(result);
