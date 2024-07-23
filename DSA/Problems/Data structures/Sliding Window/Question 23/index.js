//*  Maximum Points You Can Obtain from Cards ---done

// Example 1:

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1.
// However, choosing the rightmost card first will maximize your total score.
// The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

var maxScore = function (cardPoints, k) {
  let n = cardPoints.length;
  let left = 0;
  let right = 0;

  let total = cardPoints.reduce((acc, num) => acc + num);
  if (n === k) {
    return total;
  }
  let result = 0;

  while (right < n) {
    total -= cardPoints[right];

    if (right - left + 1 > n - k) {
      total += cardPoints[left];
      left++;
    }

    if (right - left + 1 === n - k) {
      result = Math.max(result, total);
    }

    right++;
  }

  return result;
};
