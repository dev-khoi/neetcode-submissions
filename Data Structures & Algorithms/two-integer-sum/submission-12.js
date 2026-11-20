class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // map() : store index
        const map = new Map()
        // [] : push thourhg, no fast lookup
        
        // Iteration: i = index
        for(let i= 0; i < nums.length; i++){
        // the requiredNum = number we need to find
        const requiredNum = target - nums[i]
        
        // map has the requiredNum?
        if(map.has(requiredNum)){
              // true: return both indexes [] (sorted)
            return [map.get(requiredNum), i];
        }else{
            // false: update the map to include the nums[i]
            if(!map.get(nums[i])){
             map.set(nums[i], i);
            }
        }
          
        }
        return [];
    }
}
