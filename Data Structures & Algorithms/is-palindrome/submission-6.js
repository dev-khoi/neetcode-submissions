class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const rS = s.replace(/\W/g, " ").toLowerCase().split(" ").join("");
        let i = 0;
        let j = rS.length-1
        while(i < j)
        {
            if(rS[i] !== rS[j]){
                return false;
            }
            j--;
            i++;
        }
        return true;
    }
}
