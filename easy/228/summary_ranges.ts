function summaryRanges(nums: number[]): string[] {
  let range: string[] = [];
  let first: number = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      if (first === null) {
        first = nums[i];
      }
    } else {
      if (first !== null) {
        range.push(`${first}->${nums[i]}`);
      } else {
        range.push(`${nums[i]}`);
      }
      first = null;
    }
  }

  return range;
}
