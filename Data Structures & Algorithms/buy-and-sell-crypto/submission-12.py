class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i, j =  0, 1
        
        # j: frotn, i: back 

        res = 0 
        # iterate through the araray of num
        while j < len(prices):
            # if the price of front > price in the back:
            if prices[j] > prices[i]:
                res = max(res, prices[j] - prices[i])
                # update the res

            # other case: update i index
            else:
                i = j 
            j+= 1
        return res 