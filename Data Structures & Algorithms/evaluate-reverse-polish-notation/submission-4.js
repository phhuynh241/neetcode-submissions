class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let result = 0;

        if (tokens.length == 1) {
            return tokens[0];
        }
        for (let num of tokens) {
            if (!('+-*/'.includes(num))) {
                stack.push(Number(num))
            } else {
                const int2 = stack.pop();
                const int1 = stack.pop();
                switch(num) {
                    case "+":
                        result = int1 + int2;
                        break;
                    case "-":
                        result = int1 - int2;
                        break;
                    case "*":
                        result = int1 * int2;
                        break;
                    case "/":
                        result = Math.trunc(int1 / int2);
                        break;
                }
                stack.push(result);
                console.log(stack)
            }
        }
        return result;
    }
}

