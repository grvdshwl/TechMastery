//* Arranging Coins

var arrangeCoins = function (n) {
  let left = 1,
    right = n
  let result = 0

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let total = (mid * (mid + 1)) / 2

    if (total === n) return mid
    if (total < n) {
      result = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result
}
