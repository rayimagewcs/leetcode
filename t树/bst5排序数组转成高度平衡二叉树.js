/**
 * 
 * @link https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
 * 
 * 每次将 中间的元素作为根结点，将数组分为左右两个区间，左右依次取中间的作为左子树和右子树根结点
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const TreeNode = require("./tree");

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function findAndCreateNode (l, h) {
        if (h === l) {
            return new TreeNode(nums[l])
        }
        if (h - l === 1) {
            return new TreeNode(nums[l], null, new TreeNode(nums[h]))
        }
        const m = Math.floor((h-l)/2 + l)
        const node = new TreeNode(nums[m])

        node.left = findAndCreateNode(l, m-1)
        node.right = findAndCreateNode(m+1, h)
        return node
    }
    
    return findAndCreateNode(0, nums.length - 1)
};

root = sortedArrayToBST([1,2])
console.log(root)

root = sortedArrayToBST([1])
console.log(root)

root = sortedArrayToBST([-10,-3,0,5,9])
console.log(root)
