/**
 * @index 199
 * @title 二叉树的右视图
 * @difficulty 中等
 * @tags tree,depth-first-search,breadth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-right-side-view/
 * @frontendId 199
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
 * @return {number[]}
 * @date 2021/12/14
 */
var rightSideView = function(root) {
if (!root) return []
    let ans = [] , depthSet = new Set(), queue = [[root,0]]
    while(queue.length) {
        const temp = queue.shift() 
        const node = temp[0] , depth = temp[1]
        // console.log("temp",temp )
        if(!depthSet.has(depth)) {
            ans.push(node.val)
            depthSet.add(depth)
        }
        // console.log(node,depth,ans)

        node.right && queue.push([node.right , depth + 1])
        node.left && queue.push([node.left , depth + 1])
        
    }
    return ans
};
