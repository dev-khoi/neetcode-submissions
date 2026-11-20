class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
       const minHeap = new MinPriorityQueue()

// time complexity: O nlogn
       for(const num of nums){
        minHeap.enqueue(num)
        if(minHeap.size() > k){
            minHeap.dequeue()
        }
       }

       return minHeap.front()


    }
}
