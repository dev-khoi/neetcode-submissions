class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const binarySearch = (nums, target) => {
            let start = 0, end = nums.length - 1
            while(start <= end){
                const middle = Math.floor((end+start)/2)
                if(nums[middle] === target){
                    return true
                }
                else if(nums[middle] < target){
                    start = middle + 1
                }else{
                    end = middle - 1
                }
            }

            return false;
        }
        let start = 0, end = matrix.length - 1;
        while(start <= end){
            const middle = Math.floor((end+start)/2)
            const middleArr = matrix[middle]

            if(target < middleArr[0]){
                end = middle -1;
            }
            else if (target > middleArr[middleArr.length - 1]){
                start = middle+1
            }
            // else in the array
            else{
                return binarySearch(middleArr, target)
            }
        }
        return false;
    }
}
