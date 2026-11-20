class MinStack {
    constructor() {
        this.stack = [];
        this.minStack =  [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
if (Number.isNaN(val)) {            this.stack.push(null)
        }
        this.stack.push(val)
        
        const minVal = Math.min(val, this.minStack[this.minStack.length-1] ?? val);
        this.minStack.push(minVal)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];

    }

    getMin(){
        return this.minStack[this.minStack.length - 1]
    }

   
}
