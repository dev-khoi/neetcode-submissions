class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # prices = [Number]
        # task : maxiumum profit
        # brute force On^2
        # O n using 2 pointers -> sliding window
        i = 0
        j = 1
        res = 0
        while j < len(prices):
            profit = prices[j] - prices[i]
            # guards
            if profit > res:
                res = profit
            if prices[j] < prices[i]:
                i = j            
            j+= 1;
        
        return res