/**
 * @index 23
 * @title 合并K个升序链表
 * @difficulty 困难
 * @tags linked-list,divide-and-conquer,heap-priority-queue,merge-sort
 * @draft false
 * @link https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * @frontendId 23
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * @date 2022/1/5
 */
var mergeKLists = function(lists) {
// if(lists.length < 1) return []
    let ans = []
    for(let i = 0 ; i < lists.length ; i++) {
        let temp = lists[i]
        while(temp) {
            ans.push(temp.val)
            temp = temp.next
        }
    }
    ans.sort((a,b)=>a-b)
    // console.log("ans", ans)
     let h = new ListNode(-1) , node = h
     for(let j = 0 ; j < ans.length ; j++) {
         node.next = new ListNode(ans[j])
         node = node.next
     }
    // console.log(node,h)
    return  h.next
};
