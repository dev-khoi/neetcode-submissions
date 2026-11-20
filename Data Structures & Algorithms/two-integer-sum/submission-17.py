class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # create a map
        # {value : index}
        # edge case: duplicated numbers: single pass 
        # -> keep iterating while creating the map
        # numMap = {}

        # for i, num in enumerate(nums):
        #     findingNum = target -  num 

        #     if findingNum in numMap.keys():
        #         return [numMap.get(findingNum), i]
        #     else:
        #         numMap[num] = i

        
        
        nMap = {}
        for i, val in enumerate(nums):
            findingNum = target - val
            if findingNum in nMap:
                return [nMap.get(findingNum), i]

            else:
                nMap[val] = i

        return