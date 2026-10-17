class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        // Loop through the nums array
        // Multiple 

        var output = [];
        for (var i = 0; i < nums.length; i++) {
            let prod = 1;
            for (var j = 0; j < nums.length; j++) {
                if (i !== j) {
                    prod *= nums[j];
                }
            }
            output.push(prod);
        }
        return output;
    }
}
