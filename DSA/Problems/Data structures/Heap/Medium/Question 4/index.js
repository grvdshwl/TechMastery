//* K Closest Points to Origin
const kClosest = function (points, k) {
  const res = [];
  const minHeap = new MinPriorityQueue({ priority: (val) => val[0] });

  // Enqueue points into the min heap
  for (const [x, y] of points) {
    const dist = x ** 2 + y ** 2;
    minHeap.enqueue([dist, x, y]);
  }

  // Dequeue k closest points
  while (k > 0) {
    const [dist, x, y] = minHeap.dequeue().element;
    res.push([x, y]);
    k -= 1;
  }

  return res;
};
