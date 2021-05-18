/**
 * @link https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 
 * 根据前序遍历和中序遍历还原二叉树
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const TreeNode = require("./tree");
const { create } = require("./treeUtil");

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0)
        return null

    const root = new TreeNode(preorder[0])
    const preorderMap = new Map()
    const inorderPos = new Map()
    for (let i = 0; i < inorder.length; i++) {
        inorderPos.set(inorder[i], i)
    }
    for (let i = 0; i < preorder.length; i++) {
        preorderMap.set(preorder[i], i)
    }
    /**
     * i->j 中查找根节点
     * @param {*} i 
     * @param {*} j 
     */
    function build (i, j) {
        if (j < i) return null
        if (j === i) return new TreeNode(inorder[i])
        let minIdx = inorder.length
        for (let k = i; k <= j; k++) {
            minIdx = Math.min(minIdx, preorderMap.get(inorder[k]))
        }
        const val = preorder[minIdx]
        const node = new TreeNode(val)
        node.left = build(i, inorderPos.get(val)-1)
        node.right = build(inorderPos.get(val)+1, j)
        return node
    }

    root.left = build(0, inorderPos.get(root.val) - 1)
    root.right = build(inorderPos.get(root.val) + 1, inorder.length-1)

    return root
};

// root = create([])
root = buildTree([3,9,20,15,7], [9,3,15,20,7])
root = buildTree([3,9,8,20,15,7], [9,8,3,15,20,7])
console.log(root)
