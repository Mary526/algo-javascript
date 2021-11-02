/**
 * @index 237
 * @title 删除链表中的节点
 * @difficulty 简单
 * @tags linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
 * @frontendId 237
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * @date 2021/11/2
 */
var deleteNode = function(node) {
    // 汝妻子吾养之
    node.val = node.next.val
    node.next = node.next.next 
};
