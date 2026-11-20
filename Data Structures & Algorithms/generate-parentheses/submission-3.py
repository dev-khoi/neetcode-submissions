class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        
        # how many pairs of paranthesis
        # backtracking solution

        # decision tree
        res = []
        subset = []
        def backtrack(open, close):
            if open == close == n:
                res.append("".join(subset))
                 
            # explore
            if open < n:
                subset.append('(')
                backtrack(open+1, close)
                subset.pop()

            if close < open:
                subset.append(')')
                backtrack(open, close + 1)
                subset.pop()

            

        backtrack(0, 0)
        return res
            