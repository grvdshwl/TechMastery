//* Maximum Number of Removable Characters
var maximumRemovals = function (s, p, removable) {
  const isSubsequence = (removed) => {
    let i = 0;
    let j = 0;

    while (i < s.length && j < p.length) {
      if (removed.has(i) || s[i] !== p[j]) {
        i++;
        continue;
      } else {
        i++;
        j++;
      }
    }
    return j === p.length;
  };

  let left = 0;
  let right = removable.length - 1;

  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let removed = new Set(removable.slice(0, mid + 1));
    if (isSubsequence(removed)) {
      // mid+1 ===removed.length
      result = Math.max(result, mid + 1);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
