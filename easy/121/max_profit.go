package main

func maxProfit(prices []int) int {
	if len(prices) == 1 {
		return 0
	}

	min_price := prices[0]
	profit := 0
	for i := 1; i < len(prices); i++ {
		if min_price >= prices[i] {
			min_price = prices[i]
		} else if (prices[i] - min_price) > profit {
			profit = prices[i] - min_price
		}
	}

	return profit
}
