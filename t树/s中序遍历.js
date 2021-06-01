const TreeNode = require('./tree');
const { create } = require('./treeUtil');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = []
    /**
     * 
     * @param {TreeNode} node 
     */
    function sear (node) {
        if (node === null) return

        if (node.left !== null) {
            sear(node.left)
            // if (node.left) {
            //     res.push(node.left.val)
            // }
        }
        res.push(node.val)
        if (node.right !== null) {
            sear(node.right)
            // if (node.right) {
            //     res.push(node.right.val)
            // }
        }
    }
    sear(root)
    return res
};

/**
 * 中序遍历非递归实现
 */
inorderTraversal = function(root) {
    let res = []
    let q = []
    let cur = root
    while (cur || q.length) {
        while (cur) {
            q.push(cur)
            cur = cur.left
        }
        cur = q.pop()
        res.push(cur.val)
        cur = cur.right
    }

    return res
}

root = create([3,1,4,null,2])
res = inorderTraversal(root)
console.log(res)

/**
 * 前序遍历非递归实现
 * @param {*} root 
 * @returns 
 */
function preorderTraversal(root) {
    let cur = root
    let q = [], res = []
    while (cur || q.length) {
        while (cur) {
            res.push(cur.val)
            q.push(cur)
            cur = cur.left
        }
        cur = q.pop()
        cur = cur.right
    }
    return res
}

root = create([3,1,4,null,2])
res = preorderTraversal(root)
console.log(res)

/**
 * 后序遍历非递归实现
 * @param {*} root 
 */
function postorderTraversal(root) {
    let cur = root
    let q = [], res = [], prev = null
    while (cur || q.length) {
        while (cur) {
            q.push(cur)
            cur = cur.left
        }

        cur = q.pop()
        while (cur) {
            // 判断prev !== cur.right 是因为如果3是2的右子节点，当前pop出2时，2的right为3，这样会进入死循环
            if (cur.right && cur.right !== prev) {
                q.push(cur)
                cur = cur.right
                break
            }
            res.push(cur.val)
            prev = cur
            cur = q.pop()
        }
    }

    return res
}

root = create([3,1,4,null,2])
res = postorderTraversal(root)
console.log(res)

root = create([3,9,4,null,null,5,7,null,null,2,1])
res = postorderTraversal(root)
console.log(res)
