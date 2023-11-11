function removeElement(nums: number[], val: number): number {
  let index: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index += 1;
    }
  }

  return index;
}
