const TreeNode = require('./tree')

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 考虑使用中序遍历，将所有节点放到数组中，如果后序出现的节点比前面出现的节点小，则为 False
 * 否则 为 True
 * 
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    let curVal = Number.MIN_SAFE_INTEGER
    let res = true
    /**
     * 
     * @param {TreeNode} node 
     */
    function inorderTraversal (node) {
        if (node === null) {
            return
        }
        inorderTraversal(node.left)
        console.log(node.val)
        if (node.val <= curVal) {
            res = false
            return
        }
        curVal = node.val
        inorderTraversal(node.right)
    }

    inorderTraversal(root)
    return res
};

console.log(Number.MIN_SAFE_INTEGER)

// a = isValidBST(root)
// console.log(a)
