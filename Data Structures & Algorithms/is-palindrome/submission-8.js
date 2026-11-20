class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const serializeS = s.replace(/\W/g, "").toLowerCase().split(" ").join("");
        
        let i = 0, j = serializeS.length - 1;

        while (i < j){
            if(serializeS[i] !== serializeS[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
