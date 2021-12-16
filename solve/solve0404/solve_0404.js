/**
 * @index 404
 * @title 左叶子之和
 * @difficulty 简单
 * @tags tree,depth-first-search,breadth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/sum-of-left-leaves/
 * @frontendId 404
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
 * @return {number}
 * @date 2021/12/16
 */
var sumOfLeftLeaves = function(root) {
if(!root) return 0
    let summary = 0 , queue = [[root,false]]

    while(queue.length) {
        const [node,isLeftNode] = queue.shift()
        // console.log(node,isLeftNode)
        if(isLeftNode && node.left === null && node.right === null) {
            summary += node.val
        }
        node.left && queue.push([node.left,true])
        node.right && queue.push([node.right,false])
    }

    return summary
};
