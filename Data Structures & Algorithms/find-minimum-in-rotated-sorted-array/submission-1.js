class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let i = 0;
        let j = nums.length - 1;

        while (i < j) {
            const m = Math.floor((i + j) / 2);

            if (nums[m] > nums[j]) {
                // Minimum must be in the right half
                i = m + 1;
            } else {
                // Minimum is in the left half, including m
                j = m;
            }
        }

        // i === j is the index of the smallest element
        return nums[i];
    }
}
