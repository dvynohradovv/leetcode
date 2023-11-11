function removeElement(nums: number[], val: number): number {
  let qty: number = 0;
  let lng_idx: number = nums.length - 1;

  let i: number = 0;
  while (i <= lng_idx + 1) {
    if (nums[i] === val) {
      nums[i] = nums[lng_idx];
      nums[lng_idx] = null;

      lng_idx -= 1;
    } else {
      i += 1;
      qty += 1;
    }
  }

  return qty - 1;
}

let nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2],
  val: number = 2;

let qty: number = removeElement(nums, val);

console.log("Nums: " + nums);
console.log("QTY: " + qty);
