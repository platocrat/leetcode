# Graph (data structure)
## Brief Guide (see Deep Dive for in-depth information)
A **graph** organizes items in an interconnected network.

Each item is a **node** (or **vertex**). Nodes are connected by **edges**
```
                  
        (A)   (C) NODE
         \   /   \  EDGE
          (B)-----(D)
```

#### Strengths
* **Representing links**. Graphs are ideal for cases where you're working with _things that connect to other things_. Nodes and edges could, for example, respectively represent cities and highways, routers and ethernet cables, or Facebook users and their friendships.

#### Weaknesses
* **Scaling challenges**. Most graph algorithms are _O(n * lg(n))_ or even slower. Depending on the size of your graph, running algorithms across your nodes may not be feasible.

## Terminology
### Directed or undirected
In **directed** graphs, edges point from the node at one end to the node at the other end. In **undirected** graphs, the edges simply connect the nodes at each end ([see image](https://www.interviewcake.com/concept/javascript/graph?course=fc1&section=trees-graphs)).

### Cyclic or acyclic
A graph is **cyclic** if it has a cycle -- an unbroken series of nodes with no repeating nodes or edges that connects back to itself. Graphs without cycles are **acyclic** ([see image](https://www.interviewcake.com/concept/javascript/graph?course=fc1&section=trees-graphs)).

### Weighted or unweighted
If a graph is **weighted**, each edge has a "weight". The weight could, for example, represent the distance between two locations, or the cost or time it takes to travel between the locations (think neural-nets, or [see the image for an example](https://www.interviewcake.com/concept/javascript/graph?course=fc1&section=trees-graphs))

### Legal coloring
A **graph coloring** is when you assign colors to each node in a graph. A *legal coloring* means no adjacent nodes have the same color ([see the image for an example](https://www.interviewcake.com/concept/javascript/graph?course=fc1&section=trees-graphs), or refer to [LeetCode problem 1042](https://leetcode.com/problems/flower-planting-with-no-adjacent/))

## Representations
There are a few different ways to store graphs. Let's take this graph as an example:
```
          (1)
        /  |  \
     (3)   |   (0)  
        \  |
          (2)
```

### Edge list
List of all the edges in the graph: 
```javascript
const graph = [[0, 1], [1, 2], [1, 3], [2, 3]]
```

Since node `3` has edges to nodes `1` and `2`, `[1, 2]` and `[2, 3]` are in the edge list.
  Sometimes it's helpful to pair our edge list with a list of all the _nodes_. For example, what if a node doesn't have _any_ edges connected to it? It wouldn't show up in our edge list at all!

### Adjacency list
A list where the index represents the node, and the value at that index is a list of the node's neighbors:
```javascript
const graph = [
  [1],        // node 0
  [0, 2, 3],  // node 1
  [1, 3],     // node 2
  [1, 2]      // node 3
]
```

Since node `3` has edges to nodes `1` and `2`, `graph[3]` has the adjacency list `[1, 2]`.

We could also use an object where the keys represent the node and the values are the lists of neighbors.
```javascript
const graph = {
  0: [1],
  1: [0, 2, 3],
  2: [1, 3],
  3: [1, 2]
}
```

This object representation would be useful if the nodes were represented by strings, objects, or otherwise didn't map cleanly to array indices.

### Adjacency matrix
A matrix of 0s and 1s indicating whether node `x` connects to node `y` (0 means no, 1 means yes).
```javascript
const graph = [
  [0, 1, 0, 0],
  [1, 0, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 0]
]
```

Since node 3 has edges to nodes 1 and 2, `graph[3][1]` and `graph[3][2]` have value 1.

## Algorithms
### BFS and DFS
You should know [breadth-first search (BFS)](https://www.interviewcake.com/concept/bfs) and [depth-first search](https://www.interviewcake.com/concept/dfs) down pat so you can code them up quickly.

Lots of graph problems can be solved using just these traversals:

**Is there a path between two ndoes in this undirected graph?** Run DFS or BFS from one node and see if you reach the other one.

**What's the shortest path between two nodes in this undirected, weighted graph?** Run BFS from one node and backtrack once you reach the second. _Note:_ BFS always finds the shortest path, assuming the graph is undirected and unweighted. DFS does _not_ always find the shortest path.

**Can this undirected graph be colored with two colors?** Run BFS, assigning colors as nodes are visited. Abort if we ever try to assign a node a color different from the one it was assigned earlier.

**Does this undirected graph have a cycle?** Run BFS, keeping track of the number of times we're visiting each node. If we ever visit a node twice, then we have a cycle.

### Advanced graph algorithms
If you have lots of time before your interview, these advanced graph algorihms pop up occasionally:
* **Dijkstra's Algorithm**: Finds the shortest path from one node to all other nodes in a _weighted_ graph.
* **Topological Sort**: Arranges the nodes in a _directed_, _acyclic_ graph in a special order based on incoming edges.
* **Minimum Spanning Tree**: Finds the cheapest set of edges needed to reach all nodes in a _weighted_ graph.

# Deep Dive
## Terminology and Basic Properties
### Undirected graphs
Two nodes connected by an edge are the **endpoints** of the edge. 
Two nodes are **adjacent** or **neighbors** if they are connected by an edge.

The variables V and E are used for the set of a graph's nodes (V) and edges (E). The variables n and m are used for the number of nodes (n) and edges (m), respectively. Sometimes, the number of nodes and edges are indicated with |V| and |E|. Variables _u_, _v_, _w_,_..._ are used to name nodes. Edges can be represented like (u, v) or {u, v}.

(u, v) is better for directed graphs, and {u, v} is better for undirected graphs (in math notation, {u, v} is a set, meaning the elements are not in any particular order, so {u, v} is the same as {v, u}).
```
        Graph drawing                 Logical structure
            (v)                           G = {V, E}
           /   \                          V = {u, v, w, x}
         /       \                        E = {{u, v}, {u, w}, {u, x}, {v, w}}
       /           \
    (u)-------------(w)
       \
         \
          (x)
```

The **degree** of a node is the number of neighbors that node has. In an undirected graph, **the sum of all nodes' degrees is 2m**, where `m` is the number of edges. This is because each edge is counted twice, once for each node and its own degrees. The gree of a node is denoted as `deg(u)`. 

A **leaf** is a node with a degree of 1.
```
                   (v)   deg(v) = 2
                  /   \                           sum of degrees = 8    
                /       \                         m = 4
deg(u) = 3    /           \                       3 + 2 + 2 + 1 = 4 * 2
           (u)-------------(w)   deg(w) = 2       
              \
                \
                 (x)   deg(x) = 1
```

A **self-loop** is an edge like {u, u}, where the two endpoints are the same node.

If two edges have the same endpoints they are said to be **parallel edges**.

**By default, it is assumed that graphs do not contain self-loops nor parallel edges**, unless otherwise stated (something you can clarify with your interviewer).

A **path** is a sequence of edges where each two consecutive edges share an endpoint. In general, we consider paths without repeated nodes (sometimes called simple paths). If all the nodes are different, but a path connects to a previously traversed node, then that path is called a **cycle** instead. A graph without any cycles is called **acyclic**.

We say a node `u` can **reach** another node `v` if there is a path between them. Colloquially, node `v` is **reachable** from node `u`. In an undirected graph, if node `u` can reach node `v`, then node `v` can reach node `u`. We also say that `u` and `v` are **connected**.

If every node can reach every other node, a graph is **connected**. Otherwise, the graph is **disconnected**. A **connected component** (CC) of a graph is a group of nodes where every node can reach every other node. Every node belongs in a connected component, even if it is by itself. A connected graph has a single connected component, and in many graphs algorithms, _each connected component is processed independently from the rest_. 

**A connected graph has at least `n-1` edges**. This is because a graph with 0 edges, but one node, has `n` connected components, or 1 connected component composed of 1 node. With 1 edge we can connect two connected components (e.g. 2 graphs composed of 1 node each) and reduce the number of connected components by 1 (i.e. 2 graphs of one node each become 1 connected component graph of 2 nodes and 1 edge).

The **length** of a path is the number of edges. The **shortest path** between two nodes is the path with the fewest edges starting at one node (e.g. node `u`) and ending at another (e.g. node `v`). The **shortest path** between two nodes can be _easily found using breadth-first search (BFS)_ at the cost of _slightly_ more memory relative to a depth-first search (DFS) approach. The shortest path may not be unique. The *distance* between two nodes is the length of the shortest path between them. If two graphs are in different connected components, the distance between them is said to be _infinite_. The **diameter** of a connected graph is the _maximum distance_ between any two nodes.
```   
        ()--\                       length(P) = 4 
      /   \  \---()                 distance(u, v) = distance(v, u) = 4
    (u)    \      |  (v)            diameter(G) = 5
      \    ()     | / |  \
    P  \  / |    () P |   ()
       ()   |   /  \  |  /
         \  | / P    ()
       p  ()        
```

Sometimes, edges have associated **weights**:

![Weighted Connected Graph](/data-structures-and-algorithms/graphs/img/weights.png)

Weights are numerical values that indicate some measure about the edge. A **weighted graph** is a graph where the edges have weights. Otherwise, the graph is **unweighted**. Often, weights denote edge lengths or the distance between nodes, but it depends on the context. **Weights are taken into account when defining the length of paths or the distance between nodes**: in a weighted graph, the length of a path is not the number of edges, it is the sum of the weights of the edges on it.

It is less common, but sometimes nodes have weights too, instead of edges.

A graph that is constructed by taking a subset of the nodes and/or edges or another graph is called a **subgraph**.

A **tree** is a connected graph without cycles. A **forest** is a graph without cycles, where each connected component is a tree. **A connected graph is a tree if and only if it has `n-1` edges**. As we said earlier, _in order to be connected, a graph needs at least `n-1` nodes_. A tree cannot have more than `n-1` edges because if you add an edge `{u, v}` to a graph and `u` and `v` are already in the same connected component, that creates a cycle. 

When we analyze the runtime or space of grpah algorithms (algorithms where the input is a graph), we do it in terms of both `n` and `m`. The fact that trees have `m = n - 1` edges is important in the analysis of algorihms. It means that _the time or space of a tree algorithm depends only on `n`_.

A **complete graph** is a graph where all nodes are neighbors. A complete graph with `n` nodes has `n * (n - 1)/2` edges. This is because every node has degree `n - 1`, so the sum of the degrees is `n * (n - 1)`, and we said earlier that the number of edges (`m`) in a graph is half the sum of the degrees (`2m`).

![Complete Graphs](/data-structures-and-algorithms/graphs/img/complete-graphs.png)

A **spanning tree** of a connected graph is a subgraph that has the same nodes, but is a tree. A graph can have many spanning trees, but all of its spanning trees have `n - 1` edges.

![Spanning Tree](/data-structures-and-algorithms/graphs/img/spanning-tree.png)

A **sparse** graph is a graph where the number of edges is not much larger than the number of nodes. A **dense** graph is a graph where the number of edges is closer to the maximum possible.

These terms are somewhat ambiguous and infromal. Clearly, trees are sparse and complete graphs are dense.

A **graph class** or **graph family** is a (possible infinite) set of graphs all of which have some property in common. Trees and complete graphs are examples of graph classes. Sometimes, there are algorithms that only work for specific graph families (like trees). 

### Directed graphs
A directed graph is sometimes called a **digraph**. 

The two endpoints of a directed edge have special names. One is the **origin/source/starting** node and the other is the **destination/ending** node. Instead of syaing incident edges, we say **incoming** and **outgoing** edges.

Most of the notation for undrected graphs can be adpated to directed graphs, but sometimes it can be ambiguous. For eaxmple, it is better not to use the term "degree" for directed graphs. We distinguish between the **in-degree** of a node (number of edges with that node as a destination) and the **out-degree** (number of nodes with that node as the origin). In a directed graph it is normal to have opposite edges, like `(u, v)` and `(v, u)`.

In a directed graph, paths and cycles must "respect" the direction of the edges. Since paths cannot use edges in "reverse", this also reflects the distance between nodes. For example, the distance from node `u` to node `v`, `dist(u, v)`, is 1, but the length of the path from node `v` to node `u`, `dist(v, u)` is instead 3 (see graph below for illustration).

![Directed Graph](/data-structures-and-algorithms/graphs/img/directed-graph.png)

A directed graph is **strongly connected** if every node can reach every other node (saying just "connected" can be ambiguous). Instead of connected components, we say **strongly connected components** (SCC). A strongly connected component is a group of nodes where every node can reach every other node. Unlike for undirected graphs, it is possible to have edges between strongly connected components:

![Strongly Connected Components](/data-structures-and-algorithms/graphs/img/strongly-connected-components.png)

Directed graphs are also assumed to not have parallel edges by default, but it is considered normal to have **opposite** edges, like `(u, v)` and `(v, u)`.

**A directed graph has at most `n * (n - 1)` edges**. That is because each edge has `n` (for the number of nodes in the graph) options for where to start, and `n-1` (the number of nodes in the graph excluding the starting node) options for where to end (since we do not have self-loops). **An undirected graph has at most `n * (n - 1)/2` edges.** It is half of the maximum for directed graphs, because for each pair `(u, v)` and `(v, u)` of opposite edges in a directed graph, in an undirected graph we can have only one edge `{u, v}`. 

**In big-O notation, a graph has at most _O(n^2)_, or quadratic time edges**; it does not matter whether the graph is directed. 

This is important in the analysis of graph algorithms.

Sometimes, when analyzing algorithms using big-O notation, we might get a runtime like _O(m * log(m))_, where `m` is the number of edges. Know that _O(m * log(m))_ can be simplified to _O(m * log(n))_. This is because `m < n^2`, so `log(m) < log(n^2) = 2 * log(n) = O(log(n))`. When analyzing graph algorithms, **it never makes sense to use _O(log(m))_ instead of _O(log(n))_**.

## Data structure
### Representations
As described earlier...

There are a few different ways to store graphs. Let's take this graph as an example:
```
          (1)
        /  |  \
     (3)   |   (0)  
        \  |
          (2)
```

#### Edge list
List of all the edges in the graph: 
```javascript
const graph = [[0, 1], [1, 2], [1, 3], [2, 3]]
```

Since node `3` has edges to nodes `1` and `2`, `[1, 2]` and `[2, 3]` are in the edge list.
  Sometimes it's helpful to pair our edge list with a list of all the _nodes_. For example, what if a node doesn't have _any_ edges connected to it? It wouldn't show up in our edge list at all!

#### Adjacency list
A list where the index represents the node, and the value at that index is a list of the node's neighbors:
```javascript
const graph = [
  [1],        // node 0
  [0, 2, 3],  // node 1
  [1, 3],     // node 2
  [1, 2]      // node 3
]
```

Since node `3` has edges to nodes `1` and `2`, `graph[3]` has the adjacency list `[1, 2]`.

We could also use an object where the keys represent the node and the values are the lists of neighbors.
```javascript
const graph = {
  0: [1],
  1: [0, 2, 3],
  2: [1, 3],
  3: [1, 2]
}
```

This object representation would be useful if the nodes were represented by strings, objects, or otherwise didn't map cleanly to array indices.

#### Adjacency matrix
A matrix of 0s and 1s indicating whether node `x` connects to node `y` (0 means no, 1 means yes).
```javascript
const graph = [
  [0, 1, 0, 0],
  [1, 0, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 0]
]
```

Since node 3 has edges to nodes 1 and 2, `graph[3][1]` and `graph[3][2]` have value 1.

### Analysis Summary
|                                   |    Adjacency List   | Adjacency Matrix | 
| --------------------------------- | ------------------- | ---------------- |
|                space              |      _O(n + m)_     |     _O(n^2)_     |
| check if `u` and `v` are adjacent |  _O(deg(u)) = O(n)_ |      _O(1)_      |
|  iterate through neighbors of `u` |  _O(deg(u)) = O(n)_ |      _O(n)_      |
|    iterate through _all_ edges    |      _O(n + m)_     |     _O(n^2)_     |

There is no best data structure, it depends on the application. However, in all the algorithms we'll see later, the adjacency list is better for 2 reasons:
1. It is more compact for sparse graphs
2. If a node has a small degree, it is much faster to iterate through its neighbors

In contrast, the main advantage of an adjacency matrix is being able to check if two nodes are adjacent in constant time. Sometimes, it even makes sense to use both in the same algorithm.

### Graph Types
To be consistent, we always use `G` to denote the adjacency list (node denoted by adjacency list index, and neighbors of that index/node denoted by the list at that index/node), and `adjMat` to denote the adjacency matrix (boolean-like matrix of "yes"/"no" this node is my neighbor of all nodes in the graph). The implementation varies slightly depending on the kind of graph:
|                  |                         Undirected                    |                           Directed                       |           Unweighted           |                  Weighted                  | 
| ---------------- | ----------------------------------------------------- | -------------------------------------------------------- | ------------------------------ | ------------------------------------------ | 
|  Adjacency List  | if `u` appears in `G[v]`, `v` should appear in `G[u]` | `u` can appear in `G[v]` without `v` appearing in `G[u]` |    `G[v]` is a list of nodes   |  `G[v]` is a list of (node, weight) tuples  |
| Adjacency Matrix |  `adjMat[u][v]` should be the same as `adjMat[v][u]`  |   `adjMat[u][v]` and `adjMat[v][u]` can be different     | `adjMat` is a _boolean_ matrix | `adjMat` is an _integer_ or _float_ matrix |

### Indices vs Strings for Nodes
In the simplest and most common case, each node is a number from 0 to `n - 1` (sometimes from 1 to `n`). Then, we can use the node itself as the index in the adjacency list or the adjacency matrix. 

![Adjacency List vs Matrix](/data-structures-and-algorithms/graphs/img/adjacency-list-vs-matrix.png)

Here is a comparison of the adjacency lists for 3 similar graphs, but where one is undirected, drected, and undirected and weighted:

![Adjacency Lists of Undirected, Directed, and Undirected and Weighted](/data-structures-and-algorithms/graphs/img/adjacency-lists.png)

Nodes can also be strings, but then the adjacency list or matrix needs to be a hash table with strings as keys instead of an array; however, this is less efficient in practice. Additionally, we'll need to factor in the length of the strings in big-O analysis, since hashing a string or comparing two strings two takes time proportional to their length. **Thus the version where nodes are just numbers is preferred.**

With strings, the representation would looks something like:
```javascript
G = {
  'aaa': ['bbb', 'ccc'],
  'bbb': ['aaa', 'ddd'],
  'ccc': ['aaa'],
  'ddd': ['bbb'],
  'eee': []
}
```

### Free Trees vs Rooted Trees
Like any other type of graph, trees can be represented with an adjacency list or an adjacency matrix (the adjacency matrix is not advised for sparse graphs like trees). However, sometimes trees use a completely different data structure: a node is designated as the "root", and the nodes are organized in a clear hierarchy, where the root is at the top, and each node has a "parent" node (ecept the root) and "child" nodes; nodes with 0 children are called leaves.

![Rooted Tree](/data-structures-and-algorithms/graphs/img/rooted-tree.png)

This is called a _"rooted" tree_ and it _is stored as a recursive data structure_ where each node is an object pointing to the objects of its children. In the case of a "binary" rooted tree, each node has at most 2 children, and they are usually called "left" and "right". More generally, an "k-ary" rooted tree could have `k` children per node.

![Free vs Rooted Tree](/data-structures-and-algorithms/graphs/img/free-vs-rooted-tree.png)

The two trees in the picture have the same edges, but are different conceptually. Rooted tree probles generally require different techniques and algorithms, starting with the fact that the data structure used to represent them is very different. Thus, we do not cover rooted tree problems in this guide, but know that they are very common in interviews. We focus on problems where the graph is represented with an adjacency list/matrix. 

### Constructing the Adjacency List/Matrix
Usually in graph problems, we are not given the adjacency list/matrix. Instead, we are given the number of nodes `n`, and a **list of edges**: a list where each entry is a pair of nodes indices between 0 and `n - 1`.

  **Therefore, the first step in solving graph problems is to construct the adjacency list or matrix. Here is how we can do it.**

Construct the data structure of an **undirected** graph:
#### JavaScript
```javascript
function createAdjList(n, edgeList) {
  let G = []
  for (let v in n) {
    G.push([])
  } 
}
```

#### Python
```python
def createAdjList(n, edgeList):
    G = [[] for v in range(n)]

    # For each node pair `(u, v)` that makes an edge...
    for u, v in edgeList:
        G[u].append(v) # append that nodes' adjacent neighbor (v)
        G[v].append(u) # " "   " " (u)

    return G

def createAdjMatrix(n, edgeList):
    adjMat = [[False for u in range(n)] for v in range(n)]

    for u, v in edgeList:
        adjMat[u][v] = True
        adjMat[v][u] = True

    return adjMat
```

Given an array and a number k, find the longest (contiguous) subarray with sum k and return its length. If there is no subarray with sum k, return -1.
Examples:

Input: [1,2,8,5,6,1], k = 3
Output: 2. The longest subarray with sum 3 is [1,2]. 

Input: [6,7,2,3,-1,2], k = 6
Output: 4. The longest subarray with sum 6 is [2,3,-1,2]