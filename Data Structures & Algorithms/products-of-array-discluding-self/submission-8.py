class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)

        # build left
        prePro = 1
        for i in range(1, len(nums)):
            res[i] = nums[i-1] * prePro
            prePro = res[i]

        # build right
        prePro = 1
        for i in range(len(nums)-1, -1, -1):
            res[i] *= prePro
            prePro *= nums[i]

        return res