//* Successful Pairs of Spells and Potions

var successfulPairs = function (spells, potions, success) {
  const sortPotions = potions.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < spells.length; i++) {
    const curSpell = spells[i];
    let left = 0;
    let right = sortPotions.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (curSpell * potions[mid] >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    result.push(sortPotions.length - left);
  }
  return result;
};
