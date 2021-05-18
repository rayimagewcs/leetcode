/**
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    
    // let res = [];
    // help(root, sum, res, []);
    //     return res;
    // };

    // function help(root, sum, res, arr) {
    //     if (root === null) return;
    //     arr.push(root.val);
    //     if (root.left === null && root.right === null && root.val === sum) {
    //         // 注意这里不能直接存放arr
    //         // 直接存放arr的话这里存的是数组的引用
    //         res.push([...arr]);
    //     }
    //     help(root.left, sum-root.val, res, arr);
    //     help(root.right, sum-root.val, res, arr);
    //     // 上面两步都结束之后要把arr出栈进行回溯
    //     // console.log(arr,'----')
    //     arr.pop();
    //     // console.log(arr)

    let res = []
    function dfs (node, val, nodes) {
        if (node === null)
            return res
        val -= node.val
        if (!node.left && !node.right) { // 叶子节点
            if (val === 0) {
                const paths = new Array()
                nodes.forEach(e => paths.push(e))
                paths.push(node.val)
                res.push(paths)
                return res
            }
        }
        nodes.push(node.val)
        const larr = []
        nodes.forEach(e => larr.push(e))
        dfs(node.left, val, larr)
        const rarr = []
        nodes.forEach(e => rarr.push(e))
        dfs(node.right, val, rarr)
    }
    dfs(root, targetSum, [])

    return res
};

root = create([5,4,8,11,null,13,4,7,2,null,null,5,1])
console.log(root)
// root = new TreeNode(5)
// root.left = new TreeNode(4)
// root.right = new TreeNode(8)

// root.left.left = new TreeNode(11)
// root.left.left.left = new TreeNode(7)
// root.left.left.right = new TreeNode(2)
// root.right.left = new TreeNode(13)
// root.right.right = new TreeNode(4)
// root.right.right.left = new TreeNode(5)
// root.right.right.right = new TreeNode(1)

// root = create([1,2,3,4,5,6,7,7,6,5,4])
// res = pathSum(root, 14)
res = pathSum(root, 22)
console.log(res)
