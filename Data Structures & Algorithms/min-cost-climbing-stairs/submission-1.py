class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        '''
        Given a staircase

        an cost[]
        cost[i] = price to take (1,2) steps
        find min cost to finish the staircase
        '''

        # top down approach = recursion + memorization
        cache = [-1] * len(cost)
        def dfs(i):
            # base case
            if i >= len(cost):
                return 0
            # cache
            if cache[i] != -1:
                return cache[i]
            
            # calculation
            cache[i] = cost[i] + min(dfs(i+1), dfs(i+2))

            # return result
            return cache[i]

       
        return min(dfs(0), dfs(1))