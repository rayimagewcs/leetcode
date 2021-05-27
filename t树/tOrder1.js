/**
 * 
 * @link https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 * 二叉树锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
    // BFS 非递归解法
    let q = [], res = [], flag = false
    if (root) {
        q.push(root)
    }
    while (q.length !== 0) {
        let nodes = [], level = []
        for (; q.length > 0;) {
            const node = q.pop()
            if (!node) continue
            if (flag) {
                nodes.push(node.right)
                nodes.push(node.left)
            }
            else {
                nodes.push(node.left)
                nodes.push(node.right)
            }
            level.push(node.val)
        }

        q = nodes
        flag = !flag
        if (level.length !== 0)
            res.push(level)
    }
    return res
};

// BFS 递归解法
zigzagLevelOrder = function (root) {
    // level % 2 === 0  l->r   level % 2 === 1 r->l
    let res = []
    function bfs (node, level) {
        if (!node) return

        if (!res[level]) {
            res[level] = []
        }

        if (level % 2 === 0) {
            res[level].push(node.val)
        }
        else {
            res[level].unshift(node.val)
        }
        bfs(node.left, level+1)
        bfs(node.right, level+1)
    }

    bfs(root, 0)
    return res
}

root = create([1,2,3,4,null,null,5])
root = create([3,9,20,null,null,15,7])
root = create([3,9,20,null,null,15,7,8,9,null,null,7,3])
root = create([])
root = create([1])
root = create([1,3])
res = zigzagLevelOrder(root)
console.log(res)
