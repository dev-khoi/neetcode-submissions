class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const numMap = new Map();

        for(let i = 0; i< numbers.length; i++){
            numMap.set(numbers[i], i);
        }

        for (let i = 0; i < numbers.length; i++){
            const rN = target - numbers[i];

            if(numMap.has(rN)){
                return [i+1, numMap.get(rN)+1]
            }
        }
    }
}
