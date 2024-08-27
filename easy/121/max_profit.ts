function maxProfit(prices: number[]): number {
  let profit: number = 0;

  for (let buy: number = 0; buy < prices.length; buy++) {
    for (let sell: number = buy + 1; sell < prices.length; sell++) {
      let tmp_profit: number = prices[sell] - prices[buy];
      if (tmp_profit <= 0) {
        break;
      }
      if (tmp_profit > profit) {
        profit = tmp_profit;
      }
    }
  }

  return profit;
}
