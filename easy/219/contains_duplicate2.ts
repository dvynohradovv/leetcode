function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let numberToIdx: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let num: number = nums[i];
    if (num in numberToIdx) {
      if (Math.abs(numberToIdx[num] - i) <= k) {
        return true;
      }
    }
    numberToIdx[num] = i;
  }

  return false;
}
