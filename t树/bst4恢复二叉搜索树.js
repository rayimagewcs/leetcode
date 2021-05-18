const TreeNode = require('./tree')
const {create, inorderTraversal} = require('./treeUtil')
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {

    let curVal = Number.MIN_SAFE_INTEGER, larger = Number.MAX_SAFE_INTEGER
    let end = false
    let errNode = null, errNodeParent = null, errChild = ''
    // 从前往后找，第一个比后面大的节点，从后往前找，第一个比前面节点小的节点
    function inorderTraversal (node, parentNode) {
        if (node === null)
            return
        // if (node.left !== null && node.left.val > node.val) {
        //     errNode = node.left
        //     errChild = 'left'
        //     errNodeParent = node
        //     return
        // }
        inorderTraversal(node.left, node)
        console.log(node.val)
        if (node.val < curVal) {
            end = true
            return
        }
        if (!end) {
            errNode = node
            curVal = node.val
        }

        // if (node.right !== null && node.right.val < node.val) {
        //     errNode = node.right
        //     errChild = 'right'
        //     errNodeParent = node
        //     return
        // }
        inorderTraversal(node.right, node)
    }

    let correctNode = null, correctNodeParent = null, crtChild = '', correctNodeVal = null
    function inorderTraversalRtoL (node, parentNode) {
        if (node === null)
            return

        // if (node.right !== null && node.right.val < node.val) {
        //     correctNode = node.right
        //     correctNodeParent = node
        //     crtChild = 'right'
        //     return
        // }
        inorderTraversalRtoL(node.right, node)
        if (node.val > larger) {
            end = true
            return
        }
        if (!end) {
            correctNode = node
            larger = node.val
        }
        // if (node.left !== null && node.left.val > node.val) {
        //     correctNode = node
        //     // crtChild = 'left'
        //     // correctNodeParent = node
        //     return
        // }
        inorderTraversalRtoL(node.left, node)
    }

    inorderTraversal(root, null)
    console.log('==========1', curVal)
    end = false
    inorderTraversalRtoL(root, null)
    console.log('==========2', larger)

    let tmp = errNode.val
    errNode.val = correctNode.val
    correctNode.val = tmp

    // let el = errNode.left, er = errNodeParent.right
    // let cl = correctNode.left, cr = correctNode.right
    // errNode.left = cl
    // errNode.right = cr

    // correctNode.left = el
    // correctNode.right = er
    
    // errNodeParent[errChild] = correctNode
    // correctNodeParent[crtChild] = errNode

    return root


    // 两种方式恢复：1、交换值；2、交换节点
    function inorderTraversalToFindCorrectNode (node, parentNode) {
        if (node === null)
            return
        inorderTraversalToFindCorrectNode(node.left, node)
        if (node.val > correctNodeVal) {
            correctNodeParent = parentNode
            console.log('correct position val: ', node.val)
            return
        }
        inorderTraversalToFindCorrectNode(node.right, node)
    }
};

root = create([1,3,null,null,2])
// root = create([3,1,4,null,null,2])
root = recoverTree(root)
res = inorderTraversal(root)
console.log(res)
