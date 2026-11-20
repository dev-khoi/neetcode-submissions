class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let arrStI = 0;
        let arrEndI = matrix.length - 1;
        while(arrStI <= arrEndI){
            const rowI = Math.floor((arrStI + arrEndI) /2)
            if(matrix[rowI][0] > target){
                arrEndI = rowI - 1 ;
            }else if (matrix[rowI][matrix[rowI].length - 1] < target){
                arrStI = rowI + 1;
            }else{
                break;
            }
        }

        if(!(arrStI <= arrEndI)){

            return false;
        }else{
            const rowI = Math.floor((arrStI + arrEndI) /2)
            let row = matrix[rowI]
            let i = 0;
            let j = row.length - 1;
            while(i <= j){
                const middle = Math.floor((i + j) /2);
                if(row[middle] < target){
                    i = middle + 1;
                }
                else if(row[middle] > target){
                    j = middle - 1;
                }else{
                    return true;
                }
            }
            return false;
        }
    }
}
