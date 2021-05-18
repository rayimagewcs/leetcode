/**
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
var sumNumbers = function(root) {
    let sum = 0
    function dfs (node, curV) {
        if (node === null) {
            // sum += curV
            return null
        }
        if (!node.left && !node.right) {
            sum += curV * 10 + node.val
            return
        }

        dfs(node.left, curV * 10 + node.val)
        dfs(node.right, curV * 10 + node.val)
    }
    dfs(root, sum)
    return sum
};

sumNumbers = function(root) {
    function dfs (node, curV) {
        if (node === null) {
            return 0
        }
        curV = curV * 10 + node.val
        if (!node.left && !node.right) {
            return curV
        }

        return dfs(node.left, curV) + dfs(node.right, curV)
    }
    return dfs(root, 0)
};

root = create([1,2,3])
// root = create([1])
total = sumNumbers(root)
console.log(total)
