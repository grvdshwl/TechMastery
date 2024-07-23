//* Minimum Number of Swaps to Make The String Balanced ---done
var minSwaps = function (s) {
  let open = 0;
  let max = 0;

  for (let bracket of s) {
    if (bracket === "[") {
      open--;
    } else {
      open++;
    }
    max = Math.max(max, open);
  }

  return Math.ceil(max / 2);
};
