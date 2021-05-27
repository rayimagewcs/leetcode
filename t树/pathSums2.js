/**
 * 
 * @link https://leetcode-cn.com/problems/path-sum-ii/
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    
    // let res = [];
    // help(root, sum, res, []);
    //     return res;
    // };

    // 回溯解法
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

pathSum = function (root, targetSum) {
    const res = []
    const paths = []
    function backtrace (node, val) {
        if (!node) return
        if (!node.left && !node.right) {
            if (val === node.val) {
                const path = paths.slice()
                path.push(node.val)
                res.push(path)
            }
            return // 叶子节点
        }
        val = val - node.val
        paths.push(node.val)
        backtrace(node.left, val)
        backtrace(node.right, val)

        paths.pop()
    }

    backtrace(root, targetSum)
    return res
}

root = create([5,4,8,11,null,13,4,7,2,null,null,5,1])
// console.log(root)
res = pathSum(root, 22)
console.log(res)

root = create([1,2,3,4,5,6,7,7,6,5,4])
res = pathSum(root, 14)
console.log(res)
