class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        function arith (a,b, op){
            switch(op){
                case '/':
                    return Math.trunc(a / b);
                case '*':
                    return a*b;
                case '-':
                    return a-b;
                case '+':
                    return a+b;
            }
        }
        let stack = [];
        let res = 0;
        for(let t of tokens){
            if(t === '/' || t === '*' || t === '-' || t === '+'){
                const b = stack.pop();
                const a = stack.pop();
                res = arith(a, b, t)
                stack.push(res);
            }else{
                stack.push(Number(t));
            }
            
        }
        return stack[0];
    }
}
