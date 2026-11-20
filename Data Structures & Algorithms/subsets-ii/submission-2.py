class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        '''
        must not contain any duplicates:
        return all subsets
        '''

        nums.sort()
        res = []
        def dfs(idx, subset):
            # base case
            if idx <= len(nums):
                res.append(subset.copy())
 

            # exploration
            for i in range(idx, len(nums)):
                if i > idx and nums[i] == nums[i-1]:
                    continue
                
                subset.append(nums[i])
                dfs(i + 1, subset)
                subset.pop()

        dfs(0, [])
        return res