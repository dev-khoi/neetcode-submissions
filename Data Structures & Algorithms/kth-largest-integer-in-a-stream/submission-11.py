class KthLargest:
    # finding kth largest
    # 1st way: brute force:
    # =======
    #  time, space
    # (O(nlogn), O(n))
    # (O(nlogn) for searching, O(n)) 
    # array, whenever add new element -> sort it -> return kth largest

    # optmization for adding and searching:
    # create a min heap with k size: top will always be kth largest value
    #  O(n) for space
    # O(logn) time: add and search
    # building: (O(n)) space:
    # time: O(n)

    # optimize: 
    # build: O(nlogn) -> O(n)
    # add and search: O(nlogn) -> O(logn)

    def __init__(self, k: int, nums: List[int]):
        # create kth size heaps
        self.k = k 
        self.nums = nums

        heapq.heapify(nums)
        
        # ensure k size
        while len(nums) > k: 
            heapq.heappop(nums)
    def add(self, val: int) -> int:
        # push val into and ensure k size
        # return the top which will be kth size largest
        heapq.heappush(self.nums, val)
        
        # ensure k size
        while len(self.nums) > self.k: 
            heapq.heappop(self.nums)
        return self.nums[0]