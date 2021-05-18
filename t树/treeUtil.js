const TreeNode = require('./tree')

/**
 * 
 * @param {string[]} nodes 
 */
function create (nodes) {
    if (!nodes || nodes.length === 0) return null

    const root = new TreeNode(nodes[0])
    let q = [root], k = 1, isleft = true
    while (k < nodes.length) {
        const newnodes = []
        if (q.length === 0) break
        for (let i = 0; i < q.length;) {
            const node = nodes[k] ? new TreeNode(nodes[k]) : null
            if (isleft) {
                q[i].left = node
            }
            else {
                q[i].right = node
                i++
            }
            node && newnodes.push(node)
            isleft = !isleft
            k++
            if (k >= nodes.length)
                break
        }
        q = newnodes
    }

    return root
}

// let root = create([1,3,4,null,null,2])
// console.log(root)
// root = create([1,3,null,null,2])
// console.log(root)


var inorderTraversal = function(root) {
    const res = []
    /**
     * 
     * @param {TreeNode} node 
     */
    function sear (node) {
        if (node === null) return

        sear(node.left)
        res.push(node.val)
        sear(node.right)
    }
    sear(root)
    return res
};


module.exports = {
    create,
    inorderTraversal
}
