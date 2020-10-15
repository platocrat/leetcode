/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
function findTarget1(root, k) {
  let map = new Set()
  let output = false

  function dfs(node) {
    if (node == null) return

    let complement = k - node.val

    if (map.has(complement)) {
      return true
    }

    map.add(node.val)

    if (node.left && !output) dfs(node.left)
    if (node.right && !output) dfs(node.right)
  }

  dfs(root)

  return output
}