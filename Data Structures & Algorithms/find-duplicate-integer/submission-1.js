class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const numMap = new Set();

        for(let i = 0; i < nums.length; i++){
            if(numMap.has(nums[i])){
                return nums[i]
            }else{
                numMap.add(nums[i])
            }
        };
    }
}
