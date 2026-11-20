class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let num = Number(digits.join(""))

        num++;

        return num.toString().split("")
}
}