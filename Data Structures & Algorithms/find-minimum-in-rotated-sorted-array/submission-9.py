class Solution:
    def findMin(self, nums: List[int]) -> int:
        '''
        finding the smallests number
        using binary search (Ologn) to yeild the smallest result
        '''

        l, r = 0, len(nums) - 1

        while l < r:
            m = (l+r) // 2

            # if the middle is larger than the right:
                # search to the right
            # if the middle is smaller to the right
                # search to the left

            if nums[m] >= nums[r]:
                l = m + 1
            else:
                r = m
        return nums[l]

