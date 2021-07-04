/**
 * @index 21
 * @title 合并两个有序链表
 * @difficulty 简单
 * @tags recursion,linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @frontendId 21
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @date 2021/7/4
 */
// var mergeTwoLists = function(l1, l2) {

//     console.log('l1', list2array(l1) )
//     console.log('l2', list2array(l2))
//     let l3 = [ 1, 2, 4, 1, 3, 4 ]
//     if (l3.length < 1) return l3
//     // let l4 = JSON.stringify(JSON.parse(l3))
//     let len = l3.length
//     for(i=0;i<(len-1);i++) {
//         for(j=0;j<(len-i-1);j++) {
//             const item = l3[j]
//             const nextItem = l3[j+1]
//             console.log(j)
//             console.log('item', item)
//             console.log('nextItem', nextItem)
//             if (item > nextItem) {
//                 l3[j+1] = item
//                 l3[j] = nextItem
//             }

//         }
//     }
//     console.log("l3",l3,typeof(l3))
//     return l3
// };

var mergeTwoLists = function(l1, l2) {
    if ( l1 == null) return l2;
    if ( l2 == null) return l1;
    if( l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1
    }else {
        l2.next = mergeTwoLists(l1,l2.next);
        return l2
    }
};
