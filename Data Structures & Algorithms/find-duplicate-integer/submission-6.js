class Solution {
    findDuplicate(nums) {
        let slow = nums[0];
        let fast = nums[0];

        // phase 1: find intersection
        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];

            if (slow === fast) {
                break;
            }
        }1
        // phase 2: find entrance
        slow = nums[0];

        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return fast;
    }
}