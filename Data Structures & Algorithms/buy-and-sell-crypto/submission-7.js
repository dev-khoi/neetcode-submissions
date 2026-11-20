class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let i = 0, j = 1
       let res = 0
       for(j; j < prices.length; j++){
        const profit = prices[j] - prices[i]

        if(profit < 0){
            i = j
        }else{
            res = Math.max(res, profit)
        }
       }

       return res
    }
}
