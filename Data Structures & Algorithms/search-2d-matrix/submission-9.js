class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0;
        let end = matrix.length - 1;

        while (start <= end) {
            const middle = Math.floor((end + start) / 2);

            const middleArr = matrix[middle];
            const middleArrLastNumber =
                middleArr[middleArr.length - 1];
            const middleArrFirstNumber =
                middleArr[0];

            if (target > middleArrLastNumber) {
                start = middle + 1;

            } else if (
                target < middleArrFirstNumber
            ) {
                end = middle - 1;

            } else {
                const isInMiddleArr =
                    this.binarySearch(middleArr, target);

                return isInMiddleArr;
            }
        }

        return false;
    }

    binarySearch(nums, target) {
        let start = 0,
            end = nums.length - 1;

        while (start <= end) {
            const middle =
                Math.floor((end + start) / 2);

            if (nums[middle] === target) {
                return true;

            } else if (nums[middle] < target) {
                start = middle + 1;

            } else {
                end = middle - 1;
            }
        }

        return false;
    }
}