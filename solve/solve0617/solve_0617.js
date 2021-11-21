/**
 * @index 617
 * @title 合并二叉树
 * @difficulty 简单
 * @tags tree,depth-first-search,breadth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/merge-two-binary-trees/
 * @frontendId 617
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 * @date 2021/11/21
 */
var mergeTrees = function(root1, root2) {
if (!root1 && !root2) {
          return null
      } else if (!root1 && root2) {
          return root2
      }  else  {
        //   console.log("root1:", root1,',root2:', root2)
            if (root2) {
                root1.val = root1.val + root2.val  
                if(!root1.left && root2.left ) {
                    root1.left = root2.left
                    root2.left = null
                }
                if(!root1.right && root2.right ) {
                    root1.right = root2.right
                    root2.right = null
                }
            }
          
        mergeTrees(root1.left,root2?root2.left:null)
        mergeTrees(root1.right,root2 ?root2.right:null)
      }

    return root1
};
