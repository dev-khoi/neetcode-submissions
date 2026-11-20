class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # create a set of all the numbers
        numSet = set(nums)
        # loop through n times
        '''
        we would start checking from the start of the chain to find the length

        DO NOT check from middle of the chain, this could be done by: n - 1 in set?
        '''
        res = 0 if len(nums) < 1 else 1
        for num in (nums):
            # the start in the chain
            if num - 1 not in numSet:
                length = 1 
                while num+length in numSet:
                    length += 1
                 
                res = max(res, length)

        return res