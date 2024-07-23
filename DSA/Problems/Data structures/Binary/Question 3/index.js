//* Counting Bits
//* Time complexity -->O(n)
//* Space complexity 0f ---> O(n)

function countBits(n) {
  const ans = new Array(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) {
      offset *= 2;
    }
    ans[i] = ans[i - offset] + 1;
  }

  return ans;
}

let input = 5;
const result = countBits(2);
console.log(result);
