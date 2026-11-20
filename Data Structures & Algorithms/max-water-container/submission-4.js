class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;

        let res = 0;
        while(i < j){
            const leftBarLength = heights[i]
            const rightBarLength = heights[j];
            
            res = Math.max(res, (j-i)* Math.min(leftBarLength, rightBarLength))
            
            if(leftBarLength <= rightBarLength){
                i++;
            }else{
                j--;
            }
        }
                    return res;

    }
}
