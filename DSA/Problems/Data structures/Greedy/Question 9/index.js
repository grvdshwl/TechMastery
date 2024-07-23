//* Hand of Straights
var isNStraightHand = function (hand, groupSize) {
  const countMap = new Map();
  hand.forEach((card) => {
    countMap.set(card, (countMap.get(card) || 0) + 1);
  });

  hand.sort((a, b) => a - b);

  for (let i = 0; i < hand.length; i++) {
    if (countMap.get(hand[i]) === 0) {
      continue;
    }

    for (let j = 0; j < groupSize; j++) {
      const currCard = hand[i] + j;

      if (countMap.get(currCard) === 0) {
        return false;
      }

      countMap.set(currCard, countMap.get(currCard) - 1);
    }
  }

  return true;
};
