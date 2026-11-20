class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // mapping nums[x]: count
    hasDuplicate(nums) {
        const m = new Map();
        for(const n of nums){
            if(!m.has(n)){
            m.set(n, 0);

            }else{
                return true;
            }
        }
        return false

    }
}
