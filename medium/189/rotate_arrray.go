package main

func reverse(nums []int, start int, stop int) {
	for start < stop {
		tmp := nums[start]
		nums[start] = nums[stop]
		nums[stop] = tmp

		start++
		stop--
	}
}
func rotate(nums []int, k int) {
	k = k % len(nums)
	if k == 0 {
		return
	}

	// if steps = 4
	// -->--->
	reverse(nums, 0, len(nums)-1)

	// <---<--
	reverse(nums, 0, k-1)

	// --->-->
	reverse(nums, k, len(nums)-1)
}
