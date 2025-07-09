package main

import "fmt"

func removeElement(nums []int, val int) int {
	k := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != val {
			nums[k] = nums[i]
			k++
		}
	}
	return k
}

func main() {
	nums := []int{3, 2, 2, 2, 3}
	val := 3
	k := removeElement(nums, val)

	// Expect {2, 2, 2, _, _}
	fmt.Println(nums)
	// Expect: 3
	fmt.Println(k)
}
