/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        // 1. Recursively call maxDepth on left child
        // 2. Recursively call maxDepth on right child
        // 3. Use Math.max to take larger of the two results
        // 4. Add 1 to account for the current node level
        return (
            1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
        );
    }
}
