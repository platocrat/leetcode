function isCousins(root, x, y) {
  // Save the depth of the first node.
  recordedDepth = null
  isCousin = false

  function dfs(node, depth, x, y) {
    if (node == null) return false

    // Don't go beyond the depth restricted by the first node found.
    if ((recordedDepth && depth) > recordedDepth) return false

    if ((node.val == x) || (node.val == y)) {
      if (recordedDepth == null) {
        // Save depth for the first node.
        recordedDepth = depth
      }

      // Return true, if the second node is found at the same depth
      return recordedDepth == depth
    }

    let left = dfs(node.left, depth + 1, x, y)
    let right = dfs(node.right, depth + 1, x, y)

    // recordedDepth != depth + 1 would ensure node x and y are not immediate
    // child nodes, otherwise they would become siblings.
    if ((left && right) && (recordedDepth != depth + 1)) {
      isCousin = true
    }

    return left || right
  }

  dfs(root, 0, x, y)
  return isCousin
}