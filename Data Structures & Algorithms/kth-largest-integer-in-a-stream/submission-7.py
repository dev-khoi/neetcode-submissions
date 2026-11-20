class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        # construct min heap: smallest value on top
        self.k = k
        # pop k times to get the k th smallest value
        heapq.heapify(nums) # log(n) to construct
        while len(nums) > k:
            heapq.heappop(nums)
        
        self.nums = nums

    def add(self, val: int) -> int:
        heapq.heappush(self.nums, val)
        while len(self.nums) > self.k:
            heapq.heappop(self.nums)

        return self.nums[0]