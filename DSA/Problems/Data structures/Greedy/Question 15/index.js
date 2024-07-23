//* Minimum Cost to Move Chips to The Same Position

var minCostToMoveChips = function (chips) {
  let evenParity = 0;
  let oddParity = 0;

  for (let chip of chips) {
    if (chip % 2 === 0) {
      evenParity += 1;
    } else {
      oddParity += 1;
    }
  }

  return Math.min(evenParity, oddParity);
};
