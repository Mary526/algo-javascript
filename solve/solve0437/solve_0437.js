/**
 * @index 437
 * @title 路径总和 III
 * @difficulty 中等
 * @tags tree,depth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/path-sum-iii/
 * @frontendId 437
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
 * @param {number} targetSum
 * @return {number}
 * @date 2021/9/28
 */
var pathSum = function(root, targetSum) {
if (!root) return 0
    const checkTargetSum = (tree) => {
        if (!tree) return 0
        let counts = 0 , queue = [[tree,tree.val]]
        while(queue.length) {
            const [node, summary] = queue.shift()
            if (summary === targetSum) {
                counts++
            }
            // console.log("summary:", summary)
            node.left && queue.push([node.left, summary+node.left.val])
            node.right && queue.push([node.right, summary+node.right.val])

        }
        return counts
    }
    
    let queues = [root] , n = 0
    while(queues.length) {
        const treeNode = queues.shift()
        
        // console.log("treeNode:", treeNode,",该节点下的和：",checkTargetSum(treeNode))
        n += checkTargetSum(treeNode)

        treeNode.left && queues.push(treeNode.left)
        treeNode.right && queues.push(treeNode.right)
    }

    return n
};
