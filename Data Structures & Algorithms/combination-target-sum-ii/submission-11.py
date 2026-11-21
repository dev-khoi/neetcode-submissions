class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        # array candidates, (contain duplicates)
        # no duplication of the numbr
        # combinations dont contain duplicate combination

        # brute force solution: O(2^n * n) but space: O(2*n * n):
        # way to do brute force is to build all the subset using recursion O(2^n) 
        # fitler all of them to choose the one

        # better way: O(2^n * n) but space complexity is O(n) since the call stack is simplified to checking if a number is needed 
        
        # edge case 1 problem: might contain duplicate number -> solve this by sorting it first O(logn)
        # other edge cases: the first num is the result, or there are no valid subset
        # can be solved by using base case and normal return

        res = []
        candidates.sort()
        def backtrack(i, subset, total):

            
            # base case
            if total == target:
                res.append(subset[:])
                return
            
            # condition 
            if total  > target or  i == len(candidates):
                return

            # choices
            for idx in range(i, len(candidates)):
                if idx > i and candidates[idx] == candidates[idx-1]:
                    continue
                subset.append(candidates[idx])
                backtrack(idx+1, subset, total + candidates[idx])

                subset.pop()
                # remove duplicates
                
            # backtrack



        backtrack(0, [], 0)
        return res