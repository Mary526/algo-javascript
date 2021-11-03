/**
 * @index 94
 * @title 二叉树的中序遍历
 * @difficulty 简单
 * @tags stack,tree,depth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * @frontendId 94
*/

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
 * @date 2021/11/3
 */
var inorderTraversal = function(root) {
if (!root) return [] 
    let array = []

    const dfs = node => {
        if (!node) return 
        node.left && dfs(node.left)
        array.push(node.val)
        node.right && dfs(node.right)
    }   

    dfs(root)
    return array
};
