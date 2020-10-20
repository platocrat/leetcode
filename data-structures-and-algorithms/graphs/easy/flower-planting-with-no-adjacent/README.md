# 1042. Flower Planting With No Adjacent
Difficulty: Easy

[Reference](https://leetcode.com/problems/flower-planting-with-no-adjacent/)

## Question
You have n gardens, labeled from 1 to n, and an array paths where paths[i] = [xi, yi] describes the existence of a bidirectional path from garden xi to garden yi. In each garden, you want to plant one of 4 types of flowers.

There is no garden that has more than three paths coming into or leaving it.

Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.

Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)th garden.  The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

### Approach 1: Shift Paths
*NOTE:* Since the given constraint on our input `1 <= n <= 10^4`, where the max `n` can be is 1000, we know that our worst case (upper bound) solution will have a time complexity of _O(n^2)_. 

#### Solution
Inspect the `console.log`'s as they provide insight into how the below solution works.
It shifts the paths -1 to then use later in the check for the result. 
```javascript
/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
const gardenNoAdj = (n, paths) => {
  // Initialize our garden graph to size of number of gardens
  const graph = Array(n)

  // For each path, where `u` and `v` are edges equivalent to `x` and `y`
  paths.forEach(([u, v]) => {
    u -= 1 
    v -= 1

    // Set garden node value as previous node value at that index, or as empty array
    graph[u] = graph[u] || []
    graph[v] = graph[v] || []
          
    // console.log("Graph: ")
    // console.log(graph)
          
    graph[u].push(v) // add garden color for node `v` to index `u` in garden graph
    // console.log("Graph: ")
    // console.log(graph)
      
    graph[v].push(u) // add garden color for node `u` to index `v` in garden graph
    // console.log("Graph: ")
    // console.log(graph)
    
  })
  // console.log("Graph: ")
  // console.log(graph)

  const result = Array(n).fill(1)
  
  // `out` are the bidirectional paths, where each `out` for the ith iteration 
  // is the bidirectional path from garden x_i to garden y_i.
  // `u` is the index of each pair of paths of the adjacency list
  graph.forEach((out, u) => {
    // console.log("Result: ")
    // console.log(result)
      
    // console.log("Out: ")
    // console.log(out)
      
    // console.log("u: ")
    // console.log(result)
    result[u] = [1, 2, 3, 4].find(num => {
      return out.every(v => result[v] != num)
    })
  })

  return result
}
```

### Approach 2: Greedily Paint
#### Intuition
Greedily color nodes one by one.

Since there is no node that has more than 3 neighbors, it's always possible to choose one color.

#### Complexity


#### Solution
```python
class Solution:
  def gardenNoAdj(self, n, paths):
      result = [0] * n
      garden = [[] for i in range(n)]
      
      for x, y in paths:
          garden[x - 1].append(y - 1)
          garden[y - 1].append(x - 1)
      
      for i in range(n):
          newSet = set()

          for j in garden[i]:
            newSet.add(result[j])

          defaultSet = {1, 2, 3, 4}
          deduction = defaultSet - newSet
          poppedElement = deduction.pop()
          result[i] = poppedElement
          
      return result
```
