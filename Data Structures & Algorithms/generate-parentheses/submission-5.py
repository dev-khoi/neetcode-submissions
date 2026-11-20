class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        '''
        tasks: generate pairs of parathesis
        problems ?:

        keep adding, ideally to have vars to keep track of the close and open para
        '''

        res = []
        def backtrack(openI, closeI, subset):
            # base case
            if closeI == openI == n:
                return res.append("".join(subset)) 
            
            # exploration
            if openI < n:
                subset.append('(')
                backtrack(openI + 1, closeI, subset)
                subset.pop()

            if closeI < openI:
                subset.append(')')
                backtrack(openI, closeI + 1, subset)
                subset.pop()

            return

        backtrack(0,0,[])
        print(res)
        return res