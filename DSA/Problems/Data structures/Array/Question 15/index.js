//* 	Isomorphic Strings -- done

//* Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

// Example 3:

// Input: s = "paper", t = "title"
// Output: true

var isIsomorphic = function (s, t) {
  let mapS = {};
  let mapT = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (mapS[charS] && mapS[charS] !== charT) {
      return false;
    }

    if (mapT[charT] && mapT[charT] !== charS) {
      return false;
    }

    mapS[charS] = charT;
    mapT[charT] = charS;
  }

  return true;
};
