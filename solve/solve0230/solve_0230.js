/**
 * @index 230
 * @title 二叉搜索树中第K小的元素
 * @difficulty 中等
 * @tags tree,depth-first-search,binary-search-tree,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 * @frontendId 230
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * @date 2021/10/17
 */
var kthSmallest = function(root, k) {
let queue = [root] , array = []
    while(queue.length) {
        const node = queue.shift()
        array.push(node.val)
        
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }

    array = array.sort((a,b)=>a-b)
    return array[k-1]
};
