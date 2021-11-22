/**
 * @index 116
 * @title 填充每个节点的下一个右侧节点指针
 * @difficulty 中等
 * @tags tree,depth-first-search,breadth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 * @frontendId 116
*/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 * @date 2021/11/22
 */
var connect = function(root) {
    if (!root || !root.right) return root
      root.left.next = root.right
        if(root.next) {
            root.right.next = root.next.left
        }
    connect(root.left)
    connect(root.right)
      return root
};
