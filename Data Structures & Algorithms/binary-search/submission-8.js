class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0, end = nums.length - 1;

        while(start <= end){
            const middle = Math.floor((end + start )/ 2)

            if(nums[middle] === target){
                return middle
            }else if (nums[middle] < target){
                start = middle + 1

            }else {
                end = middle - 1
            }
        }

        return -1
    }
}
