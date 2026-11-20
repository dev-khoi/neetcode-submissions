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

        
        

        numMap = {val: idx for idx, val in enumerate(nums)}


        for i, num in enumerate(nums):
            findingNum = target - num

            if findingNum in numMap.keys() and i != numMap[findingNum]:
                return [i, numMap[findingNum]]


        return