/**
 * @index 144
 * @title 二叉树的前序遍历
 * @difficulty 简单
 * @tags stack,tree,depth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * @frontendId 144
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
var preorderTraversal = function(root) {
if(!root) return []
    let array = []

    const dfs = node => {
        if (!node) return
        array.push(node.val)
        node.left && dfs(node.left)
        node.right && dfs(node.right)
    }

    dfs(root)

    return array
};
