class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # create a list of the frequency t hey appear
        # sorted based on the values
        # return  based o nthat
        # O(n ) + O(nlogn) = 

        numList = {}

        for num in nums:
            numList[num] = numList.setdefault(num,0) + 1

        arr = [[cnt, num] for num, cnt in numList.items()]


        arr.sort()

        res = []
        while len(res) < k:
            res.append(arr.pop()[1])
        return res
            