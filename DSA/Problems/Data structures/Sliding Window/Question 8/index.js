//* Fruits into Basket ---done
const totalFruit = (fruits) => {
  let max = 0;
  let start = 0;
  let end = 0;
  const fruitMap = {};

  while (end < fruits.length) {
    const fruit = fruits[end];
    fruitMap[fruit] = (fruitMap[fruit] || 0) + 1;

    while (Object.keys(fruitMap).length > 2) {
      const fruitToRemove = fruits[start];
      fruitMap[fruitToRemove]--;

      if (fruitMap[fruitToRemove] === 0) {
        delete fruitMap[fruitToRemove];
      }

      start++;
    }

    max = Math.max(max, end - start + 1);
    end++;
  }

  return max;
};
