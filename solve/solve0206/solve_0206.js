/**
 * @index 206
 * @title 反转链表
 * @difficulty 简单
 * @tags recursion,linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-linked-list/
 * @frontendId 206
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @date 2021/11/17
 */
var reverseList = function(head) {
	let node = null , list = head
    while(list) {
        let next = list.next
        list.next = node
        node = list
        list = next
    }
    return node
};
