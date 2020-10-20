# 886. Possible Bipartition
Difficulty: Medium

[Reference](https://leetcode.com/problems/possible-bipartition/solution/)

## Question
Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.


## Breaking down the problem
We need to color the nodes in the graph, some nodes red and some green.

Problem becomes, find all the nodes in the graph, such that the nodes in the adjacency list, `dislikes[i]`, are _not_ adjacent.

If a node is of one color then its adjacent nodes must be of a different color.

Example graph:
```
    (red)-------------(blue)-------------(red)
      \                  \                  \
        \                  \                  \
          \                  \                  \
            \                  \                  \
            (blue)-------------(red)--------------(blue)
```

Note this approach breaks in a graph with 3 nodes:
```
           (red)
           /  \
         /      \
    (blue)-----(blue)
```

## Solutions
*Note:* _the breadth-first search (BFS) approach to this solution produces a solution that is nearly double the speed of the approach that uses depth-first search (DFS)._

### BFS
#### In Python
```python
class Solution:
    def possibleBipartition(self, N: int, dislikes: List[List[int]]) -> bool:
        G = [[] for node in range(N)]
        
        for p1, p2 in dislikes:
            G[p1-1].append(p2-1)
            G[p2-1].append(p1-1)

        color = [0 for node in range(N)] # 1 red, 2 blue, 0 unassigned

        # runs one bfs if we can color
        for node in range(N):
            if color[node] == 0:
                canColorCC = bfs(G, node, color)

                if not canColorCC: return False

        return True

# tries to color the graph if it can, if it cannot, then it returns false
def bfs(G, start, color):
    # n = len(G)
    Q = deque()
    Q.append(start)
    color[start] = 1

    while Q:
        node = Q.popleft()

        # need to divide the graph into 2 groups so that there are no nodes in
        # between them
        for nbr in G[node]:
            if color[nbr] == 0:
                color[nbr] = 2 if color[node] == 1 else 1
                Q.append(nbr)

            elif color[nbr] == color[node]:
                return False # conflict

    return True
```

##### Algorithm Complexities
This solution is _highly efficient_, on average taking *690 ms* and using on average *19 MB* of storage.

Time complexity is `O(N * E)`, where `N` is the total number of nodes, and `E` is length of `dislikes`.

Space complexity is `O(N + E)`, where `N` is the number of nodes we have in our graph, and `E` is the length of dislikes.

