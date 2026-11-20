class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/\W/gi, "");

        let i = 0, j = s.length - 1;

        while(i < j){
            if(s[i] === s[j]){
i++;
                j--;
            }else{
                return false
            }
        }
        return true;
    
    }
}
