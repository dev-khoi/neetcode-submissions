class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            const findingNumber = target - num;


            if(map.has(findingNumber)){
                return [map.get(findingNumber), i]
            }else{
                map.set(num, i)
            }
        }


        return []
    }
}
