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
 */
function diameterOfBinaryTree(root) {
  let max = 0

  function maxDepth(node) {
    if (!node) return 0

    let left = maxDepth(node.left)
    let right = maxDepth(node.right)

    max = Math.max(max, left + right)

    return Math.max(left, right) + 1
  }

  maxDepth(root)
  return max
}