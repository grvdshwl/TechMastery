//* Guess Number Higher Or Lower
var guessNumber = function (n) {
  let start = 1,
    end = n;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let guessNum = guess(mid);
    if (guessNum == 0) {
      return mid;
    } else if (guessNum == 1) {
      start = mid + 1;
    } else if (guessNum == -1) {
      end = mid - 1;
    }
  }
};
