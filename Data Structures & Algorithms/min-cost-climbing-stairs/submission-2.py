class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        '''
        Given a staircase

        an cost[]
        cost[i] = price to take (1,2) steps
        find min cost to finish the staircase
        '''
        # bottom up solution (not space optimized)
        # main condition
        n = len(cost)

        # cache init -> assign
        cache = [0] * (n+1)
        
        # calculation and assign
        for i in range(2, n + 1):
            cache[i] = min(cache[i - 1] + cost[i - 1], cache[i - 2] + cost[i - 2])
        return cache[n]