function majorityElement(nums: number[]): number {
  var sortedArray: number[] = nums.sort((n1, n2) => n1 - n2);
  let i: number = Math.floor((nums.length - 1) / 2);

  return sortedArray[i];
}
