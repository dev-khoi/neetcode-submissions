class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[0] - b[0])
        let res = 0
        let prevInterval = intervals[0]
        for(let i= 1; i < intervals.length; i++ ){
            if(intervals[i][0] >= prevInterval[1]){
                prevInterval = intervals[i] || null

                // last = [last[0], Math.max(last[1], intervals[i][1])]
            }else{
                res++;
prevInterval = prevInterval[1] <= intervals[i][1] ? prevInterval : intervals[i];
            }

        }
        return res;
    }
}
