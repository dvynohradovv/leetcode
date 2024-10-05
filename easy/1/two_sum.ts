function twoSum(nums: number[], target: number): number[] {
  let numToIndex: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let need: number = target - nums[i];

    if (need in numToIndex) {
      return [i, numToIndex[need]];
    }

    numToIndex[nums[i]] = i;
  }
}
