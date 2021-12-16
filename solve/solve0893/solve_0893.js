/**
 * @index 893
 * @title 二叉树中所有距离为 K 的结点
 * @difficulty 中等
 * @tags tree,depth-first-search,breadth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/
 * @frontendId 863
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 * @date 2021/12/16
 */
var distanceK = function(root, target, k) {
    // 记录每个子节点的父亲节点，用于排除自己这一支
    let parentMap = new Map()

    const findParent = (node) => {
        if(!node) return
        if(node.left !== null) {
            parentMap.set(node.left.val,node)
            findParent(node.left)
        }
        if(node.right !== null) {
            parentMap.set(node.right.val,node)
            findParent(node.right)
        }
    }

    findParent(root)

    // console.log("parentMap:", parentMap)

    let ans = []
    const findTarget = (node,from,depth) => {
        if(!node) return
        if(depth === k) {
            ans.push(node.val)
            return
        }
        if(node.left !== from) {
            findTarget(node.left,node,depth+1)
        }
        if(node.right !== from) {
            findTarget(node.right,node,depth+1)
        }
        if(parentMap.get(node.val) !== from) {
            findTarget(parentMap.get(node.val),node,depth+1)
        }
    }

    findTarget(target,null,0)
    return ans
};
