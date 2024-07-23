// Sum of Elements between k1 smallest and k2 smallest numbers

function sumBetweenKSmallest(nums, k1, k2) {
  const minHeap = new MinHeap();

  // Insert elements into the min-heap
  for (const num of nums) {
    minHeap.insert(num);
  }

  let k1Value, k2Value;
  let count = 0;

  // Find k1 smallest value
  while (count < k1) {
    k1Value = minHeap.extractMin();
    count++;
  }

  count = 0;

  // Find k2 smallest value
  while (count < k2 - k1 - 1) {
    minHeap.extractMin();
    count++;
  }

  k2Value = minHeap.extractMin();

  let sum = 0;

  // Traverse the array to find values between k1 and k2
  for (const num of nums) {
    if (num > k1Value && num < k2Value) {
      sum += num;
    }
  }

  return sum;
}
