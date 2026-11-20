class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // create index i for the left start
        // create index j for the right start
        let i = 0, j = heights.length - 1;
        // create result variable (res)
        let res = 0;

        // while i and j doesnt meet
        while(i < j){   
            // get the distance between i and j
            const distance = j - i;
            // calculate the trapped rain water
            const trappedWater = distance * Math.min(heights[i], heights[j]);
            // update res
            res = Math.max(res, trappedWater)

            // compare i and j
            if(heights[i] < heights[j]){
                i++;
            }else{
                j--;
            }
            // i is smaller: increase i
            // j is smaller: increase j
            
        }
        return res;
    }
}
