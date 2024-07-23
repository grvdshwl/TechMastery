//*   Eliminate Maximum Number of Monsters

var eliminateMaximum = function (dist, speed) {
  let arrivalTime = dist
    .map((_, i) => dist[i] / speed[i])
    .sort((a, b) => a - b);
  let n = arrivalTime.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    if (arrivalTime[i] <= i) {
      break;
    }
    res++;
  }

  return res;
};
