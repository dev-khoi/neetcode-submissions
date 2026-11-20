class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let nMap = new Map();
        for(let i = 0; i< nums.length; i++){
            nMap.set(nums[i], i);
        }

        for(let i  =0; i < nums.length; i++){
            const findingNum = target - nums[i];
            if(nMap.get(findingNum) !== i && nMap.has(findingNum)){
                return [i, nMap.get(findingNum)]
            }
        }
    }
}
