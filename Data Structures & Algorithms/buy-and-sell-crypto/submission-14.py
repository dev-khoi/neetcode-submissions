class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # return the maximum profit
        # can't be the same day


        j, i  = 1, 0
        res = 0
        while j < len(prices):
            # keep looping 
            # CASES: jth day smaller, jth day bigger, same amount
            # if jth day < ith day:
            if prices[j] < prices[i]:
                i =  j
            elif prices[j] > prices[i]:
                newPrice = prices[j] - prices[i]
                res = max(res, newPrice)

            # equal? = ignore (cause no edge cases appear with equl)
            j += 1
        return res