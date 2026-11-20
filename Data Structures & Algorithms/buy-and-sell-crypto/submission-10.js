class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0, j = 0

        let res = 0;
        
        while( j < prices.length){
            
            // increase j
                // if prices[i] < prices[j]
            if(prices[i] < prices[j]){
                // update res
                console.log (i, j)
                res = Math.max(res, prices[j] - prices[i])
            }else if(prices[i] > prices[j]){
                // prices[i] > prices[j]
                // update i to j
                i = j;
            }
            j++;
            
        }

        return res
    }
}
