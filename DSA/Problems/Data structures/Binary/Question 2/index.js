//* Counting 1 bits
//* Time complexity ---> O(n)

function hammingWeight(n) {
  let count = 0; // Initialize a counter to store the count of set bits

  // Loop through each bit of the number until the entire number becomes 0
  while (n !== 0) {
    if (n & 1) {
      // Check if the least significant bit (LSB) is set (equal to 1) using bitwise AND operation
      count++; // If the LSB is set, increment the count
    }
    n = n >>> 1; // Use unsigned right shift to check the next bit
  }
  return count; // Return the total count of set bits in the given number
}
let n = 00000000000000000000000000001011;

console.log(hammingWeight(n));
