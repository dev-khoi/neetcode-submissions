class Solution:
    '''
    Task: finding the number of steps (only taking 1 or 2) to reach nth stair

    init table -> set base case 

    solve subproblems first -> calculate 

    return target state
    ''' 
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            # n = {1,2}
            return n
        dp = [0] * (n + 1)
        dp[1], dp[2] = 1, 2
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]