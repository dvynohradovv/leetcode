function removeDuplicates(nums: number[]): number {
  let k: number = 1;

  for (let i: number = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i + 1];
      k++;
    }
  }

  return k;
}
