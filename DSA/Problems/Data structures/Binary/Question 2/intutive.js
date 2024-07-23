//*Number of 1 Bits
//* Time complexity ---> O(n)
function hammingWeight(n) {
  let count = 0;

  while (n) {
    n = n & (n - 1);
    count++;
  }

  return count;
}

let n = 00000000000000000000000000001011;

console.log(hammingWeight(n));
