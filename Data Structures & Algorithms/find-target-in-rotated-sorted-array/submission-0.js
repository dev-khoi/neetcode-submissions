class Solution {
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            // RIGHT HALF SORTED
            if (nums[mid] <= nums[r]) {

                // target inside right sorted half
                if (target > nums[mid] && target <= nums[r]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }

            } else {

                // LEFT HALF SORTED
                if (target >= nums[l] && target < nums[mid]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }

        return -1;
    }
}