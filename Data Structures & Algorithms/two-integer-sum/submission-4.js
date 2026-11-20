class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // map: value : their index
        // look up the value if exists, take the index
        const numsMap = new Map();
        for(let i = 0; i < nums.length; i++){
            numsMap.set(nums[i], i)
        }

        for(let i = 0; i < nums.length; i++){
            const numberToFind = target - nums[i];
            if(numsMap.has(numberToFind) && numsMap.get(numberToFind) !== i){
                const index = numsMap.get(numberToFind);
                return [i,index];
            }
        }
    }
}
