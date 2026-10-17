class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setNum = new Set();

        for (let num of nums) {
            if (setNum.has(num)) {
                return true;
            }
            setNum.add(num);
        }

        return false
    }
}
