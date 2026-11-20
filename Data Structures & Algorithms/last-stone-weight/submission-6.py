class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # create a max heap
        # keep popping and smash stone
        # if none remains -> keep doing O(logn) for popping
        # if remains -> push O(logn)

        max_heap = [-stone for stone in stones]
        heapq.heapify(max_heap)

        while len(max_heap) > 1:
            stoneA = heapq.heappop(max_heap)
            stoneB = heapq.heappop(max_heap)

            if stoneA != stoneB:
                # 3. Push the absolute difference as a negative value
                # Example: stoneA = -8, stoneB = -7 -> abs(-8 - (-7)) = 1 -> push -1
                heapq.heappush(max_heap, -abs(stoneA - stoneB))
            
        return -max_heap[0] if max_heap else 0