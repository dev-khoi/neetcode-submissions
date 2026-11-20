class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack  = [];

        for(const t of tokens){
            if (["+", "-", "*", "/"].includes(t)) {
                const second  = stack.pop();
                const first = stack.pop();

                const result = Math.floor(this.arith(first, t, second));
                console.log(result)
                stack.push(result)
            }else{
                stack.push(Number(t));
            }
        }

        return stack[0]
    }

    // arith helper
    arith(first, arith, second){
        switch(arith){
            case '+': 
                return first + second;
            case '-':
                return first - second;
            case '*': 
                return first * second;
            case '/':
                return Math.trunc(first / second);
        }
    }
}
