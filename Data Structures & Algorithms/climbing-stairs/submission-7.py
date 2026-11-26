class Solution:
    def climbStairs(self, n: int) -> int:
        # number of stairs, take 1 or 2 steps at a time 
        if n <= 2:
            return n
        # bottom up solution, space optimized

        prev, curr = 1, 1

        for i in range(2, n+1):
            tmp = curr
            curr = prev + curr
            prev = tmp
        return curr 