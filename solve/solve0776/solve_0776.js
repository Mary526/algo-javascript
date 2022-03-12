/**
 * @index 776
 * @title N 叉树的后序遍历
 * @difficulty 简单
 * @tags stack,tree,depth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 * @frontendId 590
*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 * @date 2022/3/12
 */
var postorder = function(root) {
    if(!root) return []
    let queue = [root] , ans = []
    while(queue.length) {
        const {val , children} = queue.pop()
        ans.push(val)
        queue = queue.concat(children)
    }

    return ans.reverse() 
};
