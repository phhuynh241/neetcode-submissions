class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Iterate through the array (for loop)
        const tempSet = new Set();

        for (let num of nums) {
            if (tempSet.has(num)) {
                return true
            }
            tempSet.add(num);
        }
        return false
            // Check to see if the value is in the set
                // If it is, return true 
                // Else add to the set

        // return false
    }
}
