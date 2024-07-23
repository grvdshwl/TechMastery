//* Reverse Bits

//* Time complexity --> O(32) ---> O(1)
//* Space complexity --> O(32) ---> O(1)

function reverseBits(n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    const bit = (n >> i) & 1;
    res = res | (bit << (31 - i));
  }
  return res >>> 0; // Return as unsigned 32-bit integer
}

// Example usage:
const inputNumber = 4; // 00000000000000000000000000000100
const reversedBits = reverseBits(inputNumber).toString(2).padStart(32, 0);
console.log(reversedBits); // Output the reversed bits
