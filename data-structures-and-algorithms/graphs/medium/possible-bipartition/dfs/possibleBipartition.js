/**
 * @param {number[]} N 
 * @param {number[][]} dislikes 
 * @return {boolean}
 */
function possibleBipartition(N, dislikes) {
  if (!dislikes.length) return true

  let colors = Array(N + 1).fill(0)
  let graph = {}

  for (let [ a, b ] of dislikes) {
    graph[ a ] = (graph[ a ] || new Set()).add(b)
    graph[ b ] = (graph[ b ] || new Set()).add(a)
  }

  for (let i = 1; i <= N; i++) {
    if (!colors[ i ] && !dfs(i, 1)) return false
  }

  function dfs(node, color) {
    if (colors[ node ]) return colors[ node ] == color
    if (!graph[ node ]) return true

    colors[ node ] = color

    for (let edge of graph[ node ]) {
      if (!dfs(edge, ~color)) return false
    }

    return true
  }

  return true
}