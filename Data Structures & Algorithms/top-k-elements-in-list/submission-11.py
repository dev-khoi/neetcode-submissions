class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}

        for n in nums:
            freq[n] = freq.get(n, 0) + 1
        # freq: {num: frequency}
        # flip it
        # sort it
        # .items() -> [num, freq]
        # sorted descending 
        sortedFlippedFreq = sorted(freq.items(), key=lambda x: -x[1])

        # create and return result
        return [sortedFlippedFreq[i][0] for i in range(k)]