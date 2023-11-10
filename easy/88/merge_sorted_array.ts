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

// Test-cases
let test1: number[] = [1, 2, 3, 0, 0, 0];
merge(test1, 3, [2, 5, 6], 3);

if (JSON.stringify(test1) !== JSON.stringify([1, 2, 2, 3, 5, 6])) {
  console.log(`WRONG ${test1}`);
}

let test2: number[] = [1];
merge(test2, 1, [], 0);
if (JSON.stringify(test2) !== JSON.stringify([1])) {
  console.log(`WRONG ${test2}`);
}

let test3: number[] = [0];
merge(test3, 0, [1], 1);
if (JSON.stringify(test3) !== JSON.stringify([1])) {
  console.log(`WRONG ${test3}`);
}
