//* Permutation In String
var checkInclusion = function (s1, s2) {
  let charMap = {};

  for (let char of s1) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  let have = Object.keys(charMap).length;

  let need = 0;
  let windowMap = {};

  let left = 0;
  let right = 0;
  let n1 = s1.length;
  let n2 = s2.length;

  while (right < n2) {
    let char = s2[right];
    windowMap[char] = (windowMap[char] || 0) + 1;

    if (charMap[char] && windowMap[char] === charMap[char]) {
      need++;
    }

    if (right - left + 1 > n1) {
      let leftChar = s2[left];
      if (charMap[leftChar] && windowMap[leftChar] === charMap[leftChar]) {
        need--;
      }
      windowMap[leftChar]--;
      left++;
    }

    if (have === need) {
      return true;
    }

    right++;
  }

  return false;
};
