class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // mapping nums[x]: count
    hasDuplicate(nums) {
        const numberCountMap = {};

        for(let x = 0; x < nums.length; x++){
             if(numberCountMap[nums[x]] === 1){
                return true;
            }
            if(numberCountMap[nums[x]] == undefined){
                numberCountMap[nums[x]] = 1;
            }
           
        }
        return false;
    }
}
