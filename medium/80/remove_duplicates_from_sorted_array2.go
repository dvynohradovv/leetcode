package main

import "fmt"

func removeDuplicates(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	k := 1
	count := 1
	for i := 1; i < len(nums); i++ {
		if nums[k-1] != nums[i] {
			nums[k] = nums[i]
			k++
			count = 1
		} else {
			if count == 1 {
				nums[k] = nums[i]
				k++
			}
			count++
		}
	}
	return k
}

func main() {
	nums := []int{0, 0, 1, 1, 1, 1, 2, 3, 3}
	k := removeDuplicates(nums)

	fmt.Println(k)
	fmt.Println(nums[:k])
}
