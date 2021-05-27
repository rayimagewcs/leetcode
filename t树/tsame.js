const TreeNode = require('./tree');
const { create } = require('./treeUtil');

/**
 * 
 * @link https://leetcode-cn.com/problems/same-tree/
 * 相同的树
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let flag = true
    function inorderTraversal (r1, r2) {
        if (r1 !== null && r2 !== null) {
            inorderTraversal(r1.left, r2.left)

            if (r1.val !== r2.val) {
                flag = false
                return
            }

            inorderTraversal(r1.right, r2.right)
            return
        }
        if (r1 === null && r2 === null)
            return
        flag = false
    }

    inorderTraversal(p, q)
    return flag
};

isSameTree = function(p, q) {
    function dfs (p, q) {
        if (p === null && q === null) {
            return true
        }
        else if (p !== null && q !== null) {
            if (p.val !== q.val) {
                return false
            }
            return dfs(p.left, q.left) && dfs(p.right, q.right)
        }
        else {
            return false
        }
    }
    return dfs(p, q)
};

p = create([1,2,null])
q = create([1,null,2])

flag = isSameTree(p, q)
console.log(flag)
