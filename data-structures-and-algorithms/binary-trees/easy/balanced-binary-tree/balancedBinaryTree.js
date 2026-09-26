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
 * @return {boolean}
 */
function isBalanced(root) {
  return getHeight(root) != -1
}

function getHeight(root) {
  if (!root) return 0

  let left = getHeight(root.left)
  let right = getHeight(root.right)

  // post-processing
  if (left == -1 || right == -1) return -1
  if (Math.abs(left - right) > 1) return -1

  return Math.max(left, right) + 1
}