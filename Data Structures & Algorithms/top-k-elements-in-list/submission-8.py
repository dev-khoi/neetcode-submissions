class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # create a list of the frequency t hey appear
        # sorted based on the values
        # return  based o nthat
        # O(n ) + O(nlogn) = 
        numList = {}

        for num in nums:
            numList[num] = numList.get(num,0) + 1

        arr = [[freq,num] for [num,freq] in numList.items()]

        arr.sort(key=lambda x: -x[0])

        res=  []
        for i in range(k):
            res.append(arr[i][1])

        return res
        
