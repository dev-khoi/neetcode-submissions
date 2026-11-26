class Solution:
    def climbStairs(self, n: int) -> int:
        # number of stairs, take 1 or 2 steps at a time 
        if n <= 2:
            return n
        # bottom up solutino

        # build cache table and assign the base case value
        cache = [0] * n
        cache[0] = 1
        cache[1] = 2
        # calculation and assign to cache
        for i in range(2, n):
            cache[i] = cache[i-1] + cache[i-2]
    
        # return result
        return cache[n- 1]