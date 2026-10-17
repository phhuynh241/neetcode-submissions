class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // Need to keep 2 stacks, because when you pop you always need to have the
    // next minimum stack
    // stack = [5, 3, 7]
    // minStack = [5, 3, 3]
    // pop once (the 7 is popped), means the next minimum is 3 because of [5,3]
    push(val) {
        this.stack.push(val);
        val = Math.min(
            val,
            this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1]
        );
        this.minStack.push(val);
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

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
