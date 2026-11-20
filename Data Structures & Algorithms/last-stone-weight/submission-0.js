class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // stones: number[]
        // running a simulation between stones 
        // x == y -> remove x,y  || x < y -> remove x, y= y-x

        // return the last stone || 0

        // ds: [] -> (logn) n -> nlogn n -> n^2logn
        // heap: n : building heap: nlog
        const maxHeap = new MaxPriorityQueue()

        for(const stone of stones){
            maxHeap.enqueue(stone)
        }

        while(maxHeap.size()> 1){
            const stonex = maxHeap.dequeue()
            const stoney = maxHeap.dequeue()
            if(stonex!== stoney){
                maxHeap.enqueue(stonex-stoney)
            }
        }

        return maxHeap.size() === 1 ? maxHeap.dequeue(): 0

    }
}
