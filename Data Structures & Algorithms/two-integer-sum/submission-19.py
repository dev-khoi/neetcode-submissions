class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        '''
        Khoi's note
        input, edge cases, validate?
        input size > 2
        input will always be righ t
        1 right pair

        # tests:
        [3,4] 7 -> [0,1]

        [1,2,3,4] 6 -> [1, 3]
        

        # brute force 
        O(n^ 2)

        # OPtimize: 
        # create a map to track the number (empty state)
        # loop thorugh the array
            # finding number
            # if finding number is in the map:
                return the indices
            # other cases:
                add {val: idx} into the map
        ..........
        '''
        numMap = {}
        for idx, num in enumerate(nums):
            findingNum = target - num
            if findingNum in numMap:
                return [numMap[findingNum], idx]
            
            numMap[num] = idx
        
        return