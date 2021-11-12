/**
 * @index 19
 * @title 删除链表的倒数第 N 个结点
 * @difficulty 中等
 * @tags linked-list,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @frontendId 19
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
 * @param {number} n
 * @return {ListNode}
 * @date 2021/11/12
 */
var removeNthFromEnd = function(head, n) {
	let node = head , size = 0
    while(node) {
        size++
        node = node.next
    }

    let pos = size - n  , nodes = head
    // console.log("size:", size,',pos:', pos)
    if (pos === 0) return head.next
    while(pos) {
        pos--
        if (pos === 0) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }



    return nodes
};
