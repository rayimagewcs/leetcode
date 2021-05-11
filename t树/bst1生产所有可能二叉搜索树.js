const TreeNode = require('./tree')

/**
 * 
 * @link https://leetcode-cn.com/problems/unique-binary-search-trees-ii/
 * 
 * 二叉搜索树特征： 根结点的值必须大于左子树所有节点，右子树所有值大于根节点
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    function generate (start, end) {
        const ts = []
        if (start > end)
            return [null]
        if (start == end) {
            ts.push(new TreeNode(start, null, null))
            return ts
        }
        for (let i = start; i <= end; i++) {
            const lchilds = generate(start, i-1)
            const rchilds = generate(i+1, end)

            for (let j = 0; j < lchilds.length; j++) {
                for (let k = 0; k < rchilds.length; k++) {
                    const root = new TreeNode(i, null, null)
                    root.left = lchilds[j]
                    root.right = rchilds[k]
                    ts.push(root)
                }
            }
            // if (lchilds.length === 0) {
            //     for (let k = 0; k < rchilds.length; k++) {
            //         const root = new TreeNode(i, null, null)
            //         root.left = null
            //         root.right = rchilds[k]
            //         ts.push(root)
            //     }
            // }
            // if (rchilds.length === 0) {
            //     for (let k = 0; k < lchilds.length; k++) {
            //         const root = new TreeNode(i, null, null)
            //         root.left = lchilds[k]
            //         root.right = null
            //         ts.push(root)
            //     }
            // }
        }
        return ts
    }

    return generate(1, n)
};

res = generateTrees(6)
console.log(res)

res = generateTrees(2)
console.log(res)
