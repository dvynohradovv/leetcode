function removeDuplicates(nums: number[]): number {
  let k: number = 1;

  let qty: number = 0;
  for (let i: number = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
      qty = 0;
    } else {
      qty++;
      if (qty === 1) {
        nums[k] = nums[i];
        k++;
      }
    }
    console.log(i);
  }

  return k;
}
