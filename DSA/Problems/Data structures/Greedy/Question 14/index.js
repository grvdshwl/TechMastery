//*  Number of Burgers with No Waste of Ingredients

// Given two integers tomatoSlices and cheeseSlices. The ingredients of
// different burgers are as follows:

//     Jumbo Burger: 4 tomato slices and 1 cheese slice.
//     Small Burger: 2 Tomato slices and 1 cheese slice.

// Return [total_jumbo, total_small] so that the number of remaining
// tomatoSlices equal to 0 and the number of remaining cheeseSlices equal to 0.
//  If it is not possible to make the remaining tomatoSlices and cheeseSlices
//  equal to 0 return [].

var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  let totalBurgerCount = cheeseSlices;

  for (
    let jumboBurgerCount = 0;
    jumboBurgerCount <= totalBurgerCount;
    jumboBurgerCount++
  ) {
    let smallBurgerCount = totalBurgerCount - jumboBurgerCount;

    let tomatesNeededForJumbo = jumboBurgerCount * 4;
    let tomatesNeededForSmall = smallBurgerCount * 2;

    if (tomatesNeededForJumbo + tomatesNeededForSmall === tomatoSlices) {
      return [jumboBurgerCount, smallBurgerCount];
    }
  }

  return [];
};
