class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let setMap = new Set()

        for(let num of nums){
            if(setMap.has(num)){
                return true;
            }else{
                setMap.add(num);
            }
        }
        return false;
    }
}
