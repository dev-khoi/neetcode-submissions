class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // stack
        // {} mapping all the paraentheses
        const para= {
            "]" : "[",
            "}" : "{",
            ")" : "("
        }
        const stack = []
        for(const c of s){
            if(para[c]){
                if(stack.pop() !== para[c]){
                    return false
                }
            }
          else{
            stack.push(c)


          }
        }   
 
        return stack.length ===0 
    }
}
