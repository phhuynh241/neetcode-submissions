class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let c of s) {
            // If the array we iterate through is a closing bracket
            if (closeToOpen[c]) {
                // If the stack is not empty and the most recent opening bracket in stack
                // is equal to the 
                if (stack.length > 0 && stack[stack.length-1] === closeToOpen[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0
    }
}
