class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    bs = (arr, target ) => {
            let i = 0, j =arr.length - 1;
            while(i <=j){
                const middle = Math.floor((i+j) / 2);

                if(arr[middle] === target){
                    return true;
                }
                else if(arr[middle] < target){
                    i = middle + 1;
                }else {
                    j = middle - 1;
                }
            }
            return false;
        }


    searchMatrix(matrix, target) {
        let i = 0, j = matrix.length - 1;

        

        while(i <= j){
            const middle = Math.floor((i + j)/2)
            const middleArr = matrix[middle]

            if(middleArr[0] < target && middleArr[middleArr.length - 1] > target){
                return this.bs(matrix[middle], target);
            }else if (target === middleArr[0]){
                return true;
            }else if (target === middleArr[middleArr.length - 1]){
                return true;
            }

            else if(middleArr[0] > target ){
                j=middle - 1;

            }else if(middleArr[matrix[middle].length - 1] <  target){
                i = middle +1;
            }
        }
        return false;
    }
}
