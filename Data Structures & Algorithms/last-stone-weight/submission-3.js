class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
       const maxHeap = new MaxPriorityQueue();

       for(const stone of stones){
        maxHeap.enqueue(stone);
       }
      while(maxHeap.size() > 1){
      const stoneA = maxHeap.dequeue();
      const stoneB = maxHeap.dequeue();

      const num = Math.abs(stoneA - stoneB);

      maxHeap.enqueue(num);
      
}

      return maxHeap.front()
    }
}
