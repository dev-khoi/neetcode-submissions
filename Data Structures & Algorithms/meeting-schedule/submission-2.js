/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
                if (!intervals.length) return true;

        // sort by start time
        intervals.sort((a, b) => a.start - b.start);

        let prevInterval = intervals[0]

        for(let i = 1; i < intervals.length; i++){
            if(prevInterval.end > intervals[i].start){
                return false;
            }
    prevInterval = prevInterval[1] <= intervals[i][1] ? prevInterval : intervals[i];
        }

        return true;
    }
}
