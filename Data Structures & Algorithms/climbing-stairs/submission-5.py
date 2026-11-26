class Solution:
    '''
    top down solution with space optimized


    '''
    def climbStairs(self, n: int) -> int:
        # numbers of way to reach the very top stair ((n-1)stair)

        # noted we start from 0
        cache = [0] * n

        def dfs(i):
            # base case, for top down, its >= n
            if i >= n: 
                return i == n # 1 if it reaches the top, 0 if over
            
            # cache check
            if cache[i] != 0:
                return cache[i]
            # calculation
            cache[i] = dfs(i+1) + dfs(i+2)

            return cache[i]

        dfs(0)

        return cache[0]