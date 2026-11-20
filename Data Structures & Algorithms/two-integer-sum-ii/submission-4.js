class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // using 2 pointers
        // not same elements
        // numbers is an increasing sorted array
        let i = 0, j = numbers.length - 1;
        while(i <= j){
            const sum = numbers[i] + numbers[j];

            if(sum < target){
                i++;
            }
            else if (sum > target){
                j--;
            }else{
                return [++i, ++j]
            }
        }
        return [];
    }
}
