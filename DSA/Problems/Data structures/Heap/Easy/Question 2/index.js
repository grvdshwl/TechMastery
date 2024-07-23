//* 	Last Stone Weight
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);

  while (stones.length > 1) {
    let stone1 = stones[0];
    let stone2 = stones[1];
    let diff = Math.abs(stone1 - stone2);
    if (diff > 0) {
      stones.push(diff);
    }

    stones.shift();
    stones.shift();
    stones.sort((a, b) => b - a);
  }

  return stones.length ? stones[0] : 0;
};
