/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  if (k == 0) return;

  // --->-->
  revert(nums);
  // <--<---
  revert(nums, 0, k - 1);
  // --><---
  revert(nums, k, nums.length - 1);
  // -->--->
}

function revert(
  nums: number[],
  start: number = 0,
  stop: number = nums.length - 1
): void {
  while (start < stop) {
    let tmp: number = nums[start];
    nums[start] = nums[stop];
    nums[stop] = tmp;
    start++;
    stop--;
  }
}
