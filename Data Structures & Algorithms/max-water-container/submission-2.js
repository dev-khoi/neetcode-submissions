class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;

        let bArea = 0;
        while(l < r){
            let length = r - l;

            const area = Math.min(heights[l], heights[r]) * length;

            if(area > bArea){
                bArea = area;
            }
            if(heights[l] <= heights[r]){
                l++;
            }else{
                r--;
            }
        }
        return bArea;
    }
}
