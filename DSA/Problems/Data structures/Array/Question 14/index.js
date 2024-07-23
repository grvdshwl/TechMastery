//* Next Permutations --Done

const arr = [5, 1, 1];

const nextPermutation = (nums) => {
  //Check for edge case
  let n = nums.length;
  let k = n - 2;

  if (nums.length === 0 || nums == null) {
    return;
  }

  // find k
  for (let i = n - 1; i > 0; i--) {
    if (nums[i] <= nums[i - 1]) {
      k--;
    } else {
      break;
    }
  }
  //if k = -1 ,reverse and return
  if (k === -1) {
    reverse(nums, 0, nums.length - 1);
  } else {
    for (let i = n - 1; i > 0; i--) {
      if (nums[i] > nums[k]) {
        [nums[i], nums[k]] = [nums[k], nums[i]];
        break;
      }
    }
    reverse(nums, k + 1, nums.length - 1);

    //reverse right after k
  }

  return nums;
};

const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

const result = nextPermutation(arr);

console.log(result);
