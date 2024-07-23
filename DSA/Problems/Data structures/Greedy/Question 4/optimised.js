//* Jump Game VII

var canReach = function (s, minJump, maxJump) {
  const n = s.length;

  if (s[n - 1] === "1") return false;

  let canJump = new Array(n).fill(0);

  canJump[minJump] = 1;

  canJump[maxJump + 1] = -1;

  let reach = 0;

  for (let i = 1; i < n; i++) {
    reach += canJump[i];

    if (reach <= 0 || s[i] === "1") continue;

    canJump[i + minJump] += 1;
    canJump[i + maxJump + 1] -= 1;
  }

  return !!reach;
};
