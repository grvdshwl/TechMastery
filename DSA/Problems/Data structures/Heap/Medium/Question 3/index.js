//* Connect n ropes with minimum cost
function minCostToConnectRopes(ropeLengths) {
  // Create a min heap
  const heap = new MinHeap();

  // Insert all rope lengths into the heap
  for (let length of ropeLengths) {
    heap.add(length);
  }

  let totalCost = 0;

  // Keep combining ropes until only one rope is left
  while (heap.getLength() > 1) {
    // Extract the two minimum lengths from the heap
    const min1 = heap.poll();
    const min2 = heap.poll();

    // Combine the two ropes
    const combinedLength = min1 + min2;

    // Add the combined length to the total cost
    totalCost += combinedLength;

    // Insert the combined length back into the heap
    heap.insert(combinedLength);
  }

  return totalCost;
}
