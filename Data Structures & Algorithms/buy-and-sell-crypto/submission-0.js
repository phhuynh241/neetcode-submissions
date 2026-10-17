class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // [10, 1, 5, 6, 7, 1]
        // buyValue = 10
        // sellValue = 1
        // profit = 1 = 10 = -9

        // Returning the profit

        // If prices[i] > prices[i+1], move buy/sell pointer to prices[i+1].

        let maxProfit = 0;
        let buyPointer = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[buyPointer] > prices[i+1]) {
                buyPointer = i+1;
            } else {
                let currentProfit = prices[i+1] - prices[buyPointer];
                if (currentProfit > maxProfit) {
                    maxProfit = currentProfit
                }
            }
        }

        return maxProfit;
    }
}
