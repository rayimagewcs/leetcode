/**
 * 
 * @link https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 
 * 二叉树层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let q = []
    if (root) {
        q.push(root)
    }
    let res = []
    for (;q.length !== 0;) {
        const level = [], nodes = []
        for (let i = 0; i < q.length; i++) {
            if (q[i]) {
                if (q[i].left) {
                    nodes.push(q[i].left)
                }
                if (q[i].right) {
                    nodes.push(q[i].right)
                }
                level.push(q[i].val)
            }
        }
        res.push(level)
        q = nodes
    }
    return res
};

// root = create([3,9,20,null,null,15,7])
root = create([3,9,20,null,null,15,7,1,2])
levels = levelOrder(root)
console.log(levels)
