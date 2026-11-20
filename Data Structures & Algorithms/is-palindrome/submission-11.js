class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {  
s = s.toLowerCase().replace(/\W/g, "")
        const length = s.length;

        let middle = Math.floor(length/2)
        const stack = []
        for(let i = 0; i < middle;i++){
            stack.push(s[i])
        }

        if(length%2 !==0){
            middle++;
        }

        for(let i = middle; i < s.length; i++){
            if(stack.pop()!==s[i]){
                return false;
            }
        }

        return true;
    }
}