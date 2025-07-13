package main

import (
	"fmt"
	"sort"
)

func majorityElement(nums []int) int {
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})
	return nums[len(nums)/2]
}

func main() {
	nums := []int{2, 2, 1, 1, 1, 2, 2}
	m := majorityElement(nums)
	fmt.Println(m)
}
