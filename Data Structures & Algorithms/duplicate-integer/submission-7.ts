class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let isDuplicate = false;

        const set = new Set();

        // Filter through nums array and return elements
        // If num is in the Set, put it in dupes (true)
        // If num is not in the Set, add it in the Set and move on (false)
        const dupes = nums.filter((num) => {
            if (set.has(num)) {
                return true
            }
            set.add(num);
            return false
        });

        console.log(dupes)

        if (dupes.length > 0) {
            isDuplicate = true;
        }

        return isDuplicate;
    }
}