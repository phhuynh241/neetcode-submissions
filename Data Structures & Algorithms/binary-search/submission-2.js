class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let midIndex = Math.floor(nums.length / 2)
        let middle = nums[midIndex];

        if (nums.length <= 1 && middle !== target) {
            return -1
        }

        if (middle === target) {
            return midIndex;
        }

        if (middle > target) {
            return this.search(nums.slice(0, midIndex), target)
        } else {
            let upperSearch = this.search(nums.slice(midIndex + 1), target)
            return upperSearch === -1 ? -1 : midIndex + upperSearch + 1
        }
    }
}
