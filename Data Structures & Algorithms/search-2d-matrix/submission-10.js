class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rowLength = matrix[0].length;
        let colLength = matrix.length;
        let targetRow = [];

        // length = 3
        // while (i )

        for (let i = 0; i <= colLength - 1; i++) {
            // take last element of a row
            console.log(matrix[i][0])
            console.log(matrix[i][matrix[i].length-1])
            if (matrix[i][0] <= target && matrix[i][matrix[i].length-1] >= target) {
                // take that entire row
                targetRow = matrix[i];
                break;
            }
        }

        console.log(targetRow);


        if (targetRow.length === 0) {
            return false
        }
        return this.search(targetRow, target)
    }


    search(nums, target) {
        let midIndex = Math.floor(nums.length / 2)
        let middle = nums[midIndex];

        if (nums.length === 0) {
            return false
        }

        if (middle === target) {
            return true;
        }

        if (middle > target) {
            return this.search(nums.slice(0, midIndex), target)
        } else {
            let upperSearch = this.search(nums.slice(midIndex + 1), target)
            return upperSearch
        }
    }
}
