/**
 * @index 226
 * @title 翻转二叉树
 * @difficulty 简单
 * @tags tree,depth-first-search,breadth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/invert-binary-tree/
 * @frontendId 226
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
 * @return {TreeNode}
 * @date 2021/12/14
 */
var invertTree = function(root) {
if(!root) return null
    // 暂存右子树的值
    let tempRightTree = root.right
    root.right = invertTree(root.left)
    root.left = invertTree(tempRightTree)

    return root
};
