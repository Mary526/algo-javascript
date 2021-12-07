/**
 * @index 160
 * @title 相交链表
 * @difficulty 简单
 * @tags hash-table,linked-list,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * @frontendId 160
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * @date 2021/12/8
 */
var getIntersectionNode = function(headA, headB) {
    //  let p = headA , q = headB , pMap = new Map() , qMap = new Map ()
    //  // 极值情况，俩链表一样，从第一个节点相交
    //  if(p === q) return p
    //  while ( p ) {
    //      if(p && p.next) {
    //          pMap.set(p.next,p)
    //      } 
    //     p = p.next
    //     // console.log(p) 
    //  }
    //   while ( q ) {
    //      if(q && q.next) {
    //          qMap.set(q.next,q)
    //      } 
    //     q = q.next
    //     // console.log(q) 
    //  }
    //  if(pMap.size === 0) {
    //      for(let [qKey] of qMap) {
    //          if(qKey === headA) {
    //              return headA
    //          }

    //       } 
    //      return null
    //  } 

    //  if(qMap.size === 0) {
    //      for(let [pKey] of pMap) {
    //          if(pKey === headB) {
    //              return headB
    //          }

    //       }
    //      return null
    //  }

    //  console.log(pMap , qMap)

    //  for(let [pKey,pValue] of pMap) {
    //      for(let [qKey] of qMap) {
    //          if(pKey === qKey) {
    //              console.log('====',pKey,qKey)
    //               return pValue.val
    //          }
    //      }
    //  } 

     
     let visited = new Set() , p = headA , q = headB
     while(p) {
         visited.add(p)
         p = p.next
     }

     while(q) {
         if(visited.has(q)) {
             return q
         }
         q = q.next
     }
     return null
};
