class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numSet = {}

        for i, num in enumerate(nums):
            findingNum = target - num
            if findingNum in numSet:
                return [numSet[findingNum], i]
            
            numSet[num] = i

        return None