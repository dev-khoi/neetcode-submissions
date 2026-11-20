class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const nMap = new Map(); // num -> index

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (nMap.has(complement)) {
                return [nMap.get(complement), i];
            }
            nMap.set(nums[i], i);
        }

        // If no match found
        return [];
    }
}
