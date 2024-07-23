//* 	Can Place Flowers - done

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function canPlaceFlowers(flowerbed, n) {
  const length = flowerbed.length;
  for (let i = 0; i < length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] !== 1) &&
      (i === length - 1 || flowerbed[i + 1] !== 1)
    ) {
      n--;
      flowerbed[i] = 1;
    }
  }
  return n <= 0;
}

// Example usage:
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Output: true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // Output: false
