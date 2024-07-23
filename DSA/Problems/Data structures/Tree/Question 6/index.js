// Convert Sorted Array to Binary Search Tree
var sortedArrayToBST = function (nums) {
  const convertBST = (start, end) => {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = convertBST(start, mid - 1);
    root.right = convertBST(mid + 1, end);
    return root;
  };

  return convertBST(0, nums.length - 1);
};
