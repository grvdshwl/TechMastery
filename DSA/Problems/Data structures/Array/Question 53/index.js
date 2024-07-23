// Title: Sum of Even Subsets in Contiguous Array --done

// The task involves computing the sum of all even subsets in a contiguous array.
// For example, given the array [1, 2, 3, 4], the subsets and their sums are as follows:

// - Subset (1, 2) → Sum: 3
// - Subset (1, 2, 3, 4) → Sum: 10
// - Subset (2, 3) → Sum: 5
// - Subset (3, 4) → Sum: 7

// The total sum of all these subsets is calculated as 3 + 10 + 5 + 7, which equals 25.

const findSum = (input) => {
  let sum = 0;
  const n = input.length;

  for (let i = 0; i < n; i++) {
    let left = i;
    let right = i + 1;
    let currentSum = 0;

    while (left < n && right < n) {
      //*add previous sum for adding previous subset to the new one.

      currentSum += currentSum;
      //* add current nums in subset
      currentSum += input[left] + input[right];
      left += 2;
      right += 2;
    }
    sum += currentSum;
  }
  return sum;
};

const input = [1, 2, 3, 4];
const result = findSum(input);
console.log(result);
