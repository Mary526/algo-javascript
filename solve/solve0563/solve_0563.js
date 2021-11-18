/**
 * @index 563
 * @title 二叉树的坡度
 * @difficulty 简单
 * @tags tree,depth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-tilt/
 * @frontendId 563
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
 * @return {number}
 * @date 2021/11/18
 */
var findTilt = function(root) {
     if (root === null) return 0
     return Math.abs(sum(root.left) - sum(root.right)) + findTilt(root.left) + findTilt(root.right)
}; 

var sum = (root) => {
    if (root === null) return 0
    return root.val + sum(root.left) + sum(root.right)
}
