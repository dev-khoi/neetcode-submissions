class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(!intervals){
            return [] ;
        }
intervals.sort((a, b) => a[0] - b[0])
       const res = [intervals[0]]

       for(let i = 1; i < intervals.length; i++){
const topInterval = res[res.length - 1]
        const nowInterval = intervals[i]
        if(nowInterval[0] > topInterval[topInterval.length -1]){
            res.push(nowInterval)
        }else{
res[res.length - 1] = [
    Math.min(topInterval[0], nowInterval[0]),
    Math.max(topInterval[1], nowInterval[1])
]        }
       }

        return res;



    }
}
