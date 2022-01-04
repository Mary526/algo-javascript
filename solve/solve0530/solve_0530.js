/**
 * @index 530
 * @title 二叉搜索树的最小绝对差
 * @difficulty 简单
 * @tags tree,depth-first-search,breadth-first-search,binary-search-tree,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
 * @frontendId 530
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
 * @date 2022/1/5
 */
var getMinimumDifference = function(root) {
let ans = Infinity , pre = -1
     
     const dfs = (root) => {
        //  console.log("root", root,pre)
         if(!root) return
         dfs(root.left)
        //  if(root === -1) {
         if(pre === -1) { // 前驱节点为根节点
             pre = root.val
         } else {
             ans = Math.min(ans,root.val - pre)
             pre = root.val
         }
         dfs(root.right)
     }
    dfs(root)
    return ans
};
