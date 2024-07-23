//* Permutation In String
var checkInclusion = function (s1, s2) {
  let map = {};

  for (let char of s1) {
    map[char] = (map[char] || 0) + 1;
  }

  let i = 0;
  let j = 0;

  while (j < s2.length) {
    let char = s2[j];

    if (!map[char]) {
      if (i < j) {
        map[s2[i]] += 1;
        i++;
      } else {
        i++;
        j++;
      }
    } else {
      map[char] -= 1;

      if (j - i + 1 === s1.length) {
        return true;
      }
      j++;
    }
  }

  return false;
};
