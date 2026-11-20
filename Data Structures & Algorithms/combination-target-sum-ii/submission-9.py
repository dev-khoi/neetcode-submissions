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
            # condition 
            if total == target:
                res.append(subset[:])
                return

            # base case
            if total  > target or  i == len(candidates):
                return
            # choices

            subset.append(candidates[i])
            backtrack(i+1, subset, total + candidates[i])

            subset.pop()
            # remove duplicates
            while i + 1 < len(candidates) and candidates[i] == candidates[i+1]:
                i+=1 
            backtrack(i+1, subset, total)
            # backtrack



        backtrack(0, [], 0)
        return res