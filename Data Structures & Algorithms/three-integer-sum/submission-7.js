class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const res = [];

        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] > 0 ){
                break;
            }
            if(i > 0 && nums[i] === nums[i -1]) continue;

            let j = i + 1; 
            let k = nums.length -1;

            while(j < k){
                const result = nums[i] + nums[j] + nums[k]
                if( result === 0){
                    res.push([nums[i], nums[j], nums[k]])
                    k--;
                    j++;
                    while (j < k && nums[j] === nums[j - 1]) j++;
                    // while (j < k && nums[k] === nums[k + 1]) k--;
                }
                if(result > 0){
                k--;
                }if(result < 0){
                    j++;
                }
           
            }
        }
        return res;
    }
}
