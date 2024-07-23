//* Rain Water Harvesting ---done

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented
// by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.

function trap(height) {
  let amount = 0;
  const n = height.length;

  const leftHeight = new Array(n).fill(0);
  const rightHeight = new Array(n).fill(0);

  let leftMax = height[0];
  let rightMax = height[n - 1];

  // Calculate left heights and left max
  for (let i = 0; i < n; i++) {
    leftHeight[i] = leftMax;
    leftMax = Math.max(leftMax, height[i]);
  }

  // Calculate right heights and right max
  for (let i = n - 1; i >= 0; i--) {
    rightHeight[i] = rightMax;
    rightMax = Math.max(rightMax, height[i]);
  }

  // Calculate trapped water amount
  for (let i = 0; i < n; i++) {
    let currentWater = Math.min(leftHeight[i], rightHeight[i]) - height[i];
    amount += Math.max(0, currentWater);
  }

  return amount;
}

// Example usage:
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const trappedWater = trap(height);
console.log(`Trapped Water: ${trappedWater}`);
