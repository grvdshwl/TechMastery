/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x // quick return for 0 and 1

  let left = 1
  let right = Math.floor(x / 2)
  let result = 0

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const square = mid * mid

    if (square === x) {
      return mid
    } else if (square < x) {
      result = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result
}
