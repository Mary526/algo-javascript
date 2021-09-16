/**
 * @index 100
 * @title 相同的树
 * @difficulty 简单
 * @tags tree,depth-first-search,breadth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/same-tree/
 * @frontendId 100
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * @date 2021/9/16
 */
var isSameTree = function(p, q) {
if (!q && !p) return true
    if (!q || !p) return false
    if (q.val !== p.val ) return false

    return isSameTree(p.left,q.left) && isSameTree(p.right, q.right)
};
