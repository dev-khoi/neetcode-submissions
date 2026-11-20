class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // 2 pointers wouldn't be effective 

        const paraMap = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }

        const stack  = [];

        for(const c of s){
            if(paraMap[c]){
                  // top of stack must match
                if (stack.pop() !== paraMap[c]) {
                    return false;
                }


            }else{
                stack.push(c);
            }
        }
        console.log(stack)
        return stack.length === 0
    }
}
