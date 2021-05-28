/**
 * 
 * @link https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 * 
 * 二叉树序列化和反序列化
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const TreeNode = require("./tree");
const { create } = require("./treeUtil");

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
     if (!root) return ''
    let q = [root]
    let res = [], isLastLevel = false
    while (q.length) {
        const nodes = []
        if (!isLastLevel) {
            q.forEach(n => {
                if (n)
                    res.push(n.val)
                else
                    res.push('null')
            })
        }
        isLastLevel = true
        for (let i = 0; i < q.length; i++) {
            if (q[i]) {
                if (q[i].left || q[i].right) {
                    isLastLevel = false
                }
                nodes.push(q[i].left, q[i].right)
            }
        }
        q = nodes
    }

    return res.join()
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) {
        return null
    }
    let nodes = data.split(',')
    const root = new TreeNode(Number.parseInt(nodes[0]))
    let idx = 1, q = [root]
    while (idx < nodes.length) {
        const nextq = []
        for (let i = 0; i < q.length; i++) {
            let no = null
            if (nodes[idx] !== 'null') {
                no = new TreeNode(Number.parseInt(nodes[idx]))
                nextq.push(no)
            }
            q[i].left = no
            idx++

            no = null
            if (nodes[idx] !== 'null') {
                no = new TreeNode(Number.parseInt(nodes[idx]))
                nextq.push(no)
            }
            idx++
            q[i].right = no
        }
        q = nextq
    }

    return root
};


/**
 * 方式二：前序遍历方式
 */
serialize = function (root) {
    let res = []
    function dfs (node) {
        if (node == null) {
            res.push('null')
            return
        }
        res.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return res.join()
}

deserialize = function (data) {
    let vals = data.split(',')

    let q = []
    let i = 0
    function backtrace () {
        if (vals[i] === 'null') {
            q.push(null)
            return null
        }
        let node = new TreeNode(Number.parseInt(vals[i]))
        q.push(node)
        
        node.left = backtrace(i++)
        q.pop()

        node.right = backtrace(i++)
        q.pop()
        return node
    }
    return backtrace()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
root = create([1,2,3,null,null,4,5])
res = serialize(root)
console.log('serialize: ', res)
root = deserialize(res)
console.log('deserialize: ', root)

root = create([])
res = serialize(root)
console.log('serialize: ', res)
root = deserialize(res)
console.log('deserialize: ', root)