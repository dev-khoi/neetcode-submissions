class MinStack {
    // each function O(1)
    constructor() {
        // a stack to keep track of the main stack
        this.stack = [];
        // a ds/var to keep track of the min
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // add val into main stack
        this.stack.push(val);

        if (this.minStack.length === 0) {
        this.minStack.push(val);
    } else{
   const smallestValue = Math.min(val , this.minStack[this.minStack.length - 1])
        this.minStack.push(smallestValue);
    }
     
        return;
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
        return;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length -1]

    }

    /**
     * @return {number}
     */
    getMin() {
        // there should be a ds/var to keep track of the min el
        return this.minStack[this.minStack.length -1]

    }
}
