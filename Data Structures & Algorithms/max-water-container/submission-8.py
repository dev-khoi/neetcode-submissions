class Solution:
    def maxArea(self, heights: List[int]) -> int:
        # 2 pointer approach: first and last 

        # track the max water : lenght * shorter bar
        # compare first and last -> smaller bar index move

        first = 0
        last = len(heights) - 1
        res = 0

        while first <= last:
            res = max(res, min(heights[first], heights[last]) * (last - first))

            if heights[first] <= heights[last]: 
                first += 1
            elif heights[first] > heights[last]: 
                last -= 1
        
        return res