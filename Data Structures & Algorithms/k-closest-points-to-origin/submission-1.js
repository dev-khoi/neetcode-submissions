class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const priorityQueue = new PriorityQueue((a,b) => b[0]-a[0] );

        for(const point of points){
           const [x1,y1] = point
            const value =(x1 ** 2) + (y1 ** 2);

            priorityQueue.push([value, [x1,y1]])

        }
        while(priorityQueue.size() > k){
          priorityQueue.dequeue();
        }

        let res= []
        while(priorityQueue.size() > 0){
          res.push(priorityQueue.pop()[1])
        }

        return res;
    
    }

}
