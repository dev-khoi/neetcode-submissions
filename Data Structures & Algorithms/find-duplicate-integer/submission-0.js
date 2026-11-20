class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const nSet = new Set();

        for(const num of nums){
            if(nSet.has(num)){
                return num;
            }else{
                nSet.add(num);
            }
        }
    }
}
