/**
 * @index 775
 * @title N 叉树的前序遍历
 * @difficulty 简单
 * @tags stack,tree,depth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 * @frontendId 589
*/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
if(!root) return []
    let queue = [root] , ans = []
    while(queue.length) {
        const {val ,children} = queue.pop()
        ans.push(val)
        for(let i = children.length - 1 ; i >= 0 ; i--) {
            queue.push(children[i])
        }

    }
    return ans    
};
