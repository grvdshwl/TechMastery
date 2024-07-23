//*  Distribute Candies to People

var distributeCandies = function (candies, num_people) {
  let result = new Array(num_people).fill(0);
  let count = 1;
  while (candies > 0) {
    let index = (count - 1) % num_people;
    if (candies >= count) {
      result[index] += count;
    } else {
      result[index] += candies;
    }
    candies -= count;
    count++;
  }

  return result;
};
