// Car Fleet
var carFleet = function (target, position, speed) {
  let pairs = [];

  position.forEach((pos, index) => {
    pairs.push([pos, speed[index]]);
  });
  pairs.sort((a, b) => b[0] - a[0]);

  let stack = [];

  for (let [p, s] of pairs) {
    let time = (target - p) / s;
    stack.push(time);

    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }
  return stack.length;
};
