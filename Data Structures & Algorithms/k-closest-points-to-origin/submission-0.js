class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        //situation: find the k closes point to (0,0) kth min value
        // min value=  sqrt((x1 - x2)^2 + (y1 - y2)^2))

        // task: retrieve kth min value

        // ds: array: nlogn time, n time

        // ds: heap: o(1) nlogn
        const maxHeap = new PriorityQueue((a,b) => b[0] -a[0]);
        for(const point of points){
            // onlogn time for init
            const [x1,y1] = point
            const value =(x1 ** 2) + (y1 ** 2);
            maxHeap.push([value, [x1,y1]])
              if (maxHeap.size() > k) {
        maxHeap.pop(); // remove farthest
    }
        }

        const res = []
        while(maxHeap.size() > 0){
            res.push(maxHeap.pop()[1])
        }
        return res

    }
}
