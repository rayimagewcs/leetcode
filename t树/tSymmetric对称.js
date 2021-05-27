const TreeNode = require("./tree");
const { create } = require("./treeUtil");

/**
 * 
 * @link https://leetcode-cn.com/tag/tree/problemset/
 * 对称二叉树
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function dfs (r1, r2) {
        if (r1 === null && r2 === null) {
            return true
        }
        if (r1 !== null && r2 !== null) {
            if (r1.val !== r2.val) {
                return false
            }
            return dfs(r1.left, r2.right) && dfs(r1.right, r2.left)
        }
        return false
    }

    return dfs(root.left, root.right)
};

isSymmetric = function(root) {

    let nodesl = []
    let nodesr = []
    nodesl.push(root.left)
    nodesr.push(root.right)
    let l = 0, r = 0
    for (;;) {
        if (nodesl.length !== nodesr.length) {
            return false
        }
        if (l >= nodesl.length) {
            break
        }
        if (nodesl[l] === null && nodesr[r] === null) {
            l++
            r++
            continue
        }
        if ((!nodesl[l] || !nodesr[r]) || nodesl[l].val !== nodesr[r].val) return false

        nodesl.push(nodesl[l].left)
        nodesr.push(nodesr[r].right)
        nodesl.push(nodesl[l].right)
        nodesr.push(nodesr[r].left)

        l++
        r++
    }
    return true
}

isSymmetric = function(root) {
    let q = []
    q.push(root, root)
    for (;q.length !== 0;) {
        const n1 = q.shift()
        const n2 = q.shift()
        if (n1 === null && n2 === null) {
            continue
        }
        if (n1 === null || n2 === null) {
            return false
        }
        if (n1.val !== n2.val) {
            return false
        }
        q.push(n1.left)
        q.push(n2.right)
        q.push(n1.right)
        q.push(n2.left)
    }
    return true
}

// root = create([1,2,2,3,4,4,3])
// root = create([1,2,2,3,4,4,3,1])
root = create([1,2,2,null,3,null,3])
res = isSymmetric(root)
console.log(res)
