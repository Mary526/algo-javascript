/**
 * @index 908
 * @title 链表的中间结点
 * @difficulty 简单
 * @tags linked-list,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * @frontendId 876
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
 * @date 2021/11/12
 */
var middleNode = function(head) {
let slow = fast = head

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
};
