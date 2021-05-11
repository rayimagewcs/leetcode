const TreeNode = require('./tree')

console.log(TreeNode)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = []
    /**
     * 
     * @param {TreeNode} node 
     */
    function sear (node) {
        if (node === null) return

        if (node.left !== null) {
            sear(node.left)
            // if (node.left) {
            //     res.push(node.left.val)
            // }
        }
        res.push(node.val)
        if (node.right !== null) {
            sear(node.right)
            // if (node.right) {
            //     res.push(node.right.val)
            // }
        }
    }
    sear(root)
    return res
};
