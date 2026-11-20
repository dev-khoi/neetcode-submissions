class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        
        for(let i = 0; i < nums.length; i++){
             if(!res[i]){
                    res[i] = 1;
                }
            let j = 0
            while(j < nums.length){
                
                if(j === i){
                    j++;
                    continue;
                }
               
                res[i] *= nums[j]
                j++;
            }
        }
        return res;

    }
}
