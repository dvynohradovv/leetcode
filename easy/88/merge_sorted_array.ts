/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let n1_idx = m - 1;
  let n2_idx = n - 1;

  let n12_idx = m + n - 1;

  while (n2_idx >= 0) {
    if (n1_idx >= 0 && nums1[n1_idx] > nums2[n2_idx]) {
      nums1[n12_idx] = nums1[n1_idx];
      n1_idx -= 1;
    } else {
      nums1[n12_idx] = nums2[n2_idx];
      n2_idx -= 1;
    }
    n12_idx -= 1;
  }
}
