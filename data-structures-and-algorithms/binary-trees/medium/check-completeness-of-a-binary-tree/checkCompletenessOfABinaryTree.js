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
function isCompleteTree(root) {
  let q = [ root ],
    leaf = false

  while (q.length) {
    let node = q.shift()

    if (node.left) {
      if (leaf) return false
      q.push(node.left)
    } else {
      leaf = true
    }

    if (node.right) {
      if (leaf) return false
      q.push(node.right)
    } else {
      leaf = true
    }
  }

  return true
}