class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j  = 1;

        let profit = 0;

        while(j < prices.length){
            if(prices[i] < prices[j]){
                profit = Math.max(profit, prices[j] - prices[i]);
            }else{
                i=j
            }
            j++;
    }
    return profit
}
}