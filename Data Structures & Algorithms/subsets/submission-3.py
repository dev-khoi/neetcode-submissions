class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        # BRUTE FORCE:
        # run time O(n * 2^n): reasons: 2^n is the length of the subset
        # O(n) to copy the subset

        res = []

        def backtrack(i, subset):
            # base case
            if i == len(nums):
                res.append(subset[:]) # subset.copy()
                return 
            # choices
                # add or not add
            subset.append(nums[i])
            backtrack(i+1, subset)

            subset.pop()
            backtrack(i+1, subset)

            return
            # constraint
            # no constraint for subset
            # backtracking
        backtrack(0, [])
        return res