//* Koko Eating Bananas

const minEatingSpeed = (piles, h) => {
  let left = 1,
    right = Math.max(...piles),
    minimumTime = right;

  const time = (speed) =>
    piles.reduce((acc, pile) => acc + Math.ceil(pile / speed), 0);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (time(mid) <= h) {
      minimumTime = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return minimumTime;
};

let piles = [3, 6, 7, 11];
let h = 8;

const result = minEatingSpeed(piles, h);
console.log(result);
