class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        
        # brute force by iterating for each one and build

        #  -> time compelxity O(2^n), space : O(2^n * n) reason for this is because of the call stack

        # we can optimize the call stack by using backtracking

        nums.sort()
        res = []

        def backtrack(i, subset):
            # condition
            
            # base case
            if i == len(nums):
                res.append(subset.copy())
                return
            # left, right   
            subset.append(nums[i])
            backtrack(i + 1, subset)

            subset.pop()
            while  i + 1 < len(nums) and nums[i] == nums[i+1]:
                i+=1
            backtrack(i+1, subset)


        backtrack(0, [])
        return res
        

        