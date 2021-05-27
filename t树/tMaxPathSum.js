/**
 * 
 * @link https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 * 求二叉树最大路径和
 * 
 * 最大路径和等于 tmpMax = Math.max(node.left, node.right, node.left + node, node.right + node, node.left + node.right + node)
 * 递归求得该值，然后更新该值，最后得到的值即为最大值
 * 
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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER
    function nodeSum (node) {
        if (!node) return 0

        let lval = nodeSum(node.left)
        let rval = nodeSum(node.right)
        let sum = Math.max(node.val + lval, node.val + rval, node.val)
        maxSum = Math.max(maxSum, sum, node.val+lval+rval, node.val)
        return sum
    }

    nodeSum(root)
    return maxSum
};

// root = create([-1,-2,3])
// res = maxPathSum(root)
// console.log(res)

// root = create([1,2,3])
// res = maxPathSum(root)
// console.log(res)

// root = create([1,2,3,4,5,6,7])
// res = maxPathSum(root)
// console.log(res)

// root = create([-10,9,20,null,null,15,7])
// res = maxPathSum(root)
// console.log(res)

root = create([9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6])
res = maxPathSum(root)
console.log(res)
