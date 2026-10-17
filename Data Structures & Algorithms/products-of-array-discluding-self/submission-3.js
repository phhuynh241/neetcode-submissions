class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prod = 1;
        let zeroCount = 0;

        for (let num of nums) {
            if (num != 0) {
                prod *= num
            } else {
                zeroCount++
            }
        }

        // if more than 1 zero in the array, that means all the products will be 0 
        if (zeroCount > 1) {
            return Array(nums.length).fill(0)
        }

        const res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++){ 
            // check if there's 1 zero in the array
            // if nums[i] === 0, take the entire product, but if it's not then it's 0
            // only when nums[i] !== 0 is when it would be equal to 0
            if (zeroCount > 0) {
                res[i] = (nums[i] === 0) ? prod : 0
            } else {
                res[i] = prod / nums[i]
            }
        }
        return res;

    }
}
