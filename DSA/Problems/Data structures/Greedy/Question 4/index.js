// Jump Game VII

//* Brute Force Technique
var canReach = function (s, minJump, maxJump) {
  const n = s.length;

  let canJump = new Array(n).fill(false);

  canJump[0] = true;

  for (let i = 0; i < n; i++) {
    if (canJump[i] !== true) continue;

    for (let j = i + minJump; j <= i + maxJump; j++) {
      if (s[j] === "0") {
        canJump[j] = true;
      }
    }
  }

  return canJump[n - 1];
};
