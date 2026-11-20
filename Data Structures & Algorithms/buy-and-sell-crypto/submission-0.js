class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1;
        let max = 0;
        for(r; r < prices.length; r++){
            if(prices[l] < prices[r]){
                max = Math.max(max, prices[r] - prices[l])

            }else{
                l = r;
            }
        }
        return max;
    }
}
