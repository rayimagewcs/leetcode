/**
 * 
 * @link https://leetcode-cn.com/problems/balanced-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { create } = require("./treeUtil");

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if (!root) return true
    function getH (node, h) {
        if (!node) return h
        return Math.max(getH(node.left, h+1), getH(node.right, h+1))
    }
    function isBalance (node) {
        if (!node) return true
        const lh = getH(node.left, 1)
        const rh = getH(node.right, 1)
        
        return isBalance(node.left) && isBalance(node.right) && Math.abs(lh - rh) <= 1
    }

    return isBalance(root)
};

isBalanced = function (root) {
    // 如果高度为-1，表示二叉树非平衡二叉树
    function getH (node) {
        if (node === null)
            return 0
        const lH = getH(node.left)
        const rH = getH(node.right)

        if (lH === -1 || rH === -1 || Math.abs(lH - rH) > 1) {
            return -1
        }

        return Math.max(lH, rH) + 1
    }

    return getH(root) !== -1
}

root = create([3,9,20,null,null,15,7])
res = isBalanced(root)
console.log(res)

// root = create([1,2,2,3,3,null,null,4,4])
// res = isBalanced(root)
// console.log(res)

root = create([1,null,2,null,3])
res = isBalanced(root)
console.log(res)
