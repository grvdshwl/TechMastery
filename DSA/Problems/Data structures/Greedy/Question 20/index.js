//* Two City Scheduling

var twoCitySchedCost = function (costs) {
  //* sorting high to low based on money saved if we fly to city A.

  costs.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  n = costs.length / 2;

  result = 0;
  count = 0;

  for (let cost of costs) {
    result += count < n ? cost[0] : cost[1];
    count++;
  }

  return result;
};
