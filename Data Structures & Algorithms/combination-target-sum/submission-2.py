class Solution:
    # tasks:
    # return type: unique comb of nums
    # same num: unlimited number of times
    # so just not the same frequency of all number
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []

        def backtrack(i, subset, total):
            if total == target:
                res.append(subset[:])
                return
            # base case
            if i == len(nums) or total > target:
                return

            # choices
            subset.append(nums[i])
            backtrack(i, subset, total + nums[i])

            subset.pop()
            backtrack(i+1, subset, total)
            # conditions
            
            # backtrack

        backtrack(0, [], 0)
        return res