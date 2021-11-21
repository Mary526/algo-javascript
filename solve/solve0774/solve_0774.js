/**
 * @index 774
 * @title N 叉树的最大深度
 * @difficulty 简单
 * @tags tree,depth-first-search,breadth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
 * @frontendId 559
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
 * @return {number}
 * @date 2021/11/21
 */
var maxDepth = function(root) {
    if (!root) return 0
    let queue = [[root,1]]  
    while(queue.length) {
        const [node,depth] = queue.shift()
        // console.log("node",node,',depth:',depth)
        if (node.children && node.children.length > 0) {
            for(i = 0;i < node.children.length ;i++) {
                queue.push([node.children[i],depth+1])
            }
        }
        if (queue.length === 0) {
            return depth
        }
    }
};
