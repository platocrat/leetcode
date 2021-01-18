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

### Complexity Analysis Summary
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

## Workshop
### Graph problem triggers
In binary tree problems, it is usually very clear you are dealing with a binary tree because you are given the root of the tree. However, for graphs you are usually not given the graph data structure directly (e.g. a list of strings), so you need to look for these kind of triggers below.

**Graphs model binary relationships**:
- computers _connected by_ cables
- websites _connected by_ links
- cities _connected by_ roads
- airports _connected by_ flight routes
- people _connected by_ friendships
- employees _connected by_ a boss/employee relationship
- scheduled meetings that _overlap_ 
- words that are _synonyms_
List goes on...


**Keywords to look for**: _distances_, _paths_, starting points, destinations, goals, jumps, reach, dependencies, ...

Most common graphs: **grids**, and **mazes**.

### Terminology
It is important to know this terminology so that in an interview you can come across as more knowledgeable:
* Node, vertex, edge
* Degree, endpoint, adjacent node, neighbor
* Directed/undirected graph, weighted/unweighted graph
* Path, cycle, distance, shortest path
* Connected graph, connected component

### Graph data structures
We need to data structure to store the graphs. Our choice of data structure depends on the **operations** that we need to do.

#### Graph basic operations
1. Find all the neighbors of a node.    _Where can I fly from this airport?_
2. Check if 2 nodes are adjacent.     _Are Michael and Nil friends?_

#### Adjacency list and matrix
```
     1
   / |
 0   |   3
  \  |  / 
     2
```
**Adjacency list**: a list of neighbors for each node.
```
0: 1, 2
1: 0, 2
2: 0, 1, 3
3: 2
```

**Adjacency matrix:** a matrix where cell (i, j) indicates if nodes i and j are adjacent:
```
   0 1 2 3 
0: 0 1 1 0
1: 1 0 1 0
2: 1 1 0 1
3: 0 0 1 0
``` 


#### Graph basic operations
Which data structure is best for which operation?

1. Find all the neighbors of a node.    _Where can I fly from this airport?_
2. Check if 2 nodes are adjacent.     _Are Michael and Nil friends?_

If we care about neighbors of a node, use:
**Adjacency list**: a list of neighbors for each node. 
```
0: 1, 2
1: 0, 2
2: 0, 1, 3
3: 2
```

If we care to check if 2 nodes are adjacent, use:
**Adjacency matrix:** a matrix where cell (i, j) indicates if nodes i and j are adjacent:
```
   0 1 2 3 
0: 0 1 1 0
1: 1 0 1 0
2: 1 1 0 1
3: 0 0 1 0
``` 

_In most coding interviews_, you will use an _adjacency list_ because the main operation in DFS and BFS is to find the neighbors of a node, so we must use an **adjacency list**.

### Adjacency list
An array is more efficient than a hash table, and it's faster to code out.

Python:
```py
G = [
  [1, 2],
  [0], 
  [1],
  []
]
```

JavaScript:
```js
let G = [
  [1, 2],
  [0], 
  [1],
  []
]
```

#### Adjacency list variations
![Adjacency list variations](./data-structures-and-algorithms/graphs/img/adjacency-list-variations.png)

Most of the time in coding interivews, you will find **unweighted** and/or **undirected** graphs. 

Unweighted and undirected graphs can be modeled using an adjacency list. 

Sometimes you will see a _directed_ graph, which puts a small twist on how an adjacency list is constructed.

### Free vs rooted trees
In this workshop, we use adjacency lists, even for trees. With an adjacency list, there is no **root** (these are called free trees).
Otherwise, we would use the `Node` class notation for traversing binary trees:
* In Python:
```py
class Node: 
    int val
    Node* left
    Node* right
```

* In JavaSript:
```js
function Node() {
  this.val = val
  this.left = left
  this.right = right
}
```

### Edge list -> adjacency list
Graphs are usually given as an **edge list**. 
Edge lists are not efficient for any graph operation, so _we need to convert them_.
```
Edge list: [[0, 1], [2, 3], [0, 2], [1, 2]]

     1
   / |
 0   |   3
  \  |  / 
     2
```

If you think about it, an edge list is not a good representation for any operation we care about.
So, we must convert it to an adjacency list.

In Python:
```py
def create_adj_list(n, edges):
    # Initialize the adjacency list as a list of empty lists, one empty list for
    # each node.
    G = [[] for i in range(n)]
    # For each edge in the list of edges,
    for u, v in edges:
        # we go to the adjacency list of the first node and append the other 
        # node (of that edge).
        G[u].append(v)
        G[v].append(u)
    return G
```

In JavaScript:
```js
/**
 * @dev We are usually given a list of edges, `edges`, and the number of nodes
 * `n`.
 */
function createAdjList(n, edges) {
  let G = []
  
  // Initialize the adjacency list as a list of empty lists, one empty list for
  // each node.
  for (let i = 0; i < n.length; i++) {
    G.push([])
  }

  // For each edge in the list of edges, 
  for (let edge in edges) {
    // we go to the adjacency list of the first node and push the other node
    // (of that edge).
    G[edge[0]].push(edge[1])
    // Do the same for the second node: go to adjacency list of the second node
    // and push the first node (of the same edge).
    G[edge[1]].push(edge[0])
  }

  return G
}
```

### Edge list -> adjacency matrix
In Python:
```py
def create_adj_mat(n, edges):
    G = [n*[False] for i in range(n)]
    for u, v in edges:
        G[u][v] = True
        G[v][u] = True
    return G
```

In JavaScript:
```js
function createAdjMat(n, edges) {
  let G = []

  for (let i = 0; i < n.length; i++) {
    G.push(false)
  }

  for (let edge in edges) {
    G[edge[0]][edge[1]] = true
    G[edge[1]][edge[0]] = true
  }

  return G
}
```

### Directed graphs
In Python
```py
def create_adj_list(n, edge_list):
    G = [[] for i in range(n)]
    for u, v in edge_list:
        G[u].append(v)
        # G[v].append(u) -- we don't need this line in directed graphs
    return G
```

In JavaScript
```js
function createAdjList(n, edgeList) {
  let G = []

  for (let i = 0; i < n.length; i++) {
    G.push([])
  }

  for (let edge in edgeList) {
    G[0].push([1])
    // G[1].push([0]) -- we don't need this line in directed graphs
  }

  return G
} 
```

### Complexity Analysis Summary
|                                   |    Adjacency List   | Adjacency Matrix | 
| --------------------------------- | ------------------- | ---------------- |
|                space              |      _O(n + m)_     |     _O(n^2)_     |
| check if `u` and `v` are adjacent |  _O(deg(u)) = O(n)_ |      _O(1)_      |
|  iterate through neighbors of `u` |  _O(deg(u)) = O(n)_ |      _O(n)_      |
|    iterate through _all_ edges    |      _O(n + m)_     |     _O(n^2)_     |


### Grids
A grid is a graph where each node has degree <= 4. We can "treat" a grid like an adjacency list by generating the neighbors "on the fly".

![Grid](./data-structures-and-algorithms/graphs/img/grids.png)

If we have neighbors with an adjacency list:
* In Python:
```py
def neighbors(G, node):
    for nbr in G[node]:
        print(nbr)
```

* In JavaScript:
```js
function neighbors(G, node) {
  for (let nbr in G[node]) {
    console.log(nbr)
  }
}
```

If we have neighbors with grid:
* In Python:
```py
def neighbors(grid, pos):
    nr, nc = len(grid), len(grid[0])
    dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    for dir in dirs:
        i, j = pos[0] + dir[0], pos[1] + dir[1]
        if 0 <= i < nr and 0 <= k < nr:
            print(i, j)
```

* In JavaScript:
```js
function neighbors(grid, pos) {
  let nr = len(grid),
      nc = len(grid[0])

  // 4 possible directions
  let dirs = [ [-1, 0], [1, 0], [0, -1], [0, 1] ]

  for (let dir in dirs) {
    // we take the node, which is a position, for each of 4 `dir`, we add
    // them up at each coordinate. So, `i`, and `j` are coordinates of the 
    // neighbor in one of these directions.
    let i = pos[0] + dir[0],
        j = pos[1] + dir[1]

    // Remember to check for the boundaries of the grid.
    if (0 <= i && i < nr && 0 <= k && k < nr) {
      console.log(i, j)
    }
  }
}
```

In a grid, you want to make sure you are always in bounds.

### Graph traversals: DFS & BFS
Recall from binary tree workshop:

**Depth-First Search**: preorder, inorder, postorder traversal

**Breadth-First Search**: level-order traversal


### DFS vs BFS
|             DFS                             |            BFS                                |
| ------------------------------------------- | --------------------------------------------- |
|             Recursive                       |  Iterative                                    |
| Data structure:  stack (implicit recursion) | Data structure:  queue                        |
|  Time: `O(n + m)`                           | Time: `O(n + m)`                              |
|  Space: `O(n)`                              |   Space: `O(n)`                               |
|  Connectivity problems ✅                   |   Connectivity problems ✅                     |
|  Distance problems 🙅                       |  Distance problems ✅ (on unweighted problems) |

The time analysis is `O(n + m)` (where n is the number of nodes and m is the number of edges) only because we traverse the graph once.

### Connectivity vs distance
**Typical connectivity problems:**
- Are nodes s and t **connected**? (can use DFS or BFS)
- Can node s **reach** node t? (same question but for directed graphs) (can use DFS or BFS)
- Which nodes are **connected/can be reached** from node s? (can use DFS or BFS)
- Is the graph **connected/strongly connected**? (can use DFS or BFS)
- How many **connected components** are there? (can use DFS or BFS)

**Typical distance problems:**
- What is the **distance** from s to t? (only BFS)
- What is the **distance** from s to every other node? (only BFS)
- What is the **shortest path** from s to t? (only BFS)
- Can node s reach node t in k **steps**? (only BFS)

When working to find whether nodes are _connected_, whether nodes can be reached, finding how many connected components, we can use **both DFS and BFS**.

When working to find the _distance_ between nodes, the _distance_ from one node to every other node, the _shortest path_, or how many steps it takes to get from node A to node B, we can use **only BFS** 

### Shortest paths
BFS explores the nodes **ordered by distance**. 
Because breadth-first search explores nodes _ordered by distance_, we know that we can use breadth-first search for shortest path problems. 

![BFS explores the nodes ordered by distance](./data-structures-and-algorithms/graphs/img/bfs-explores-nodes-ordered-by-distance.png)

### DFS Implementation

#### Preorder traversal
![Predorder traversal](./data-structures-and-algorithms/graphs/img/preorder-traversal.png)
Preorder traversal on a **rooted tree**: we don't need to keep track of visited nodes because we only go down the tree.
This code below...
```py
def preorder_traversal(root):
    # some code to process root goes here
    if root.left:
        preorder_traversal(root.left)
    if root.right:
        preorder_traversal(root.right)
    
preorder_traversal(root)
```

When doing a preorder traversal on a rooted tree: we don't need to keep track of visited nodes because we only go down the tree:
```py
def preorderTraversal(root):
    """
    Preorder traversal on a rooted tree.
    """
    # some code to process root goes here
    if root.left:
        # recurse on the leftmost subtree
        preorderTraversal(root.left) 
    if root.right:
        # recurse on the rightmost subtree
        preorderTraversal(root.right)

preorderTraversal(root)
```

Instead of using two if statements in our DFS, we can think of the tree as being
a list of children, then for each child, we visit it:
```py
def preorderTraversal(root):
    for child in [root.left, root.right]:
        # if there is a child at this node
        if child:
            # recurse on that child
            preorderTraversal(child)

preorderTraversal(root)
```

#### DFS on free trees
![Free tree predecessor](./data-structures-and-algorithms/graphs/img/preorder-traversal.png)

DFS on a **free tree**: we need to keep track of the predecessor in the search so we don't revisit it.
```py
def dfs(G, node, pred):
    # some code to process root goes here
    for nbr in G[node]:
        if nbr != pred:
            dfs(G, nbr, node)

dfs(G, start, 1)
```

To perform a depth-first search on a free tree, we need to change the data structure from a rooted tree into an adjacency list. The main difference being that instead of calling nodes children, since there is no hierarchy because of not root node, we call nodes neighbors.
```py
def dfs(G, node, pred):
    """
    Instead of having node.left and node.right, we the adjacency list where 
    we find all the neighbors.

    `pred` == predecessor
    """
    # some code to process root goes here
    for nbr in G[node]:
        if nbr != pred:
            dfs(G, br, node)

def(G, start, 1)
```

If you know that the input is a free tree, then we know that we don't need to keep track of nodes we visited. If input is a free tree, we only need to keep track of where we come from, thus we **only keep track of a node's predecessor in the depth first search of a free tree**.

Example:
![Free tree predecessor](./data-structures-and-algorithms/graphs/img/preorder-traversal.png)

Using the graph shown above, say we start at node 0, then from 0 we go to node 3, then finally wish to go to node 9. We know that the neighbors of node 9 are as follows: 
```py
G[9] = [1, 3, 8]
```

From node 9, of course we need to visit node 1 and 8, but since we came from node 3, we cannot visit it because 3 is the immediate predecessor.


#### DFS on graphs
Moving on from free trees, here is a fully-fledged graph, with the only difference being that this graph has cycles. 

![Full graph with cycles](./data-structures-and-algorithms/graphs/img/full-graph-with-cycles.png)

Now, it is it not enough to know just the predecessor. We now must keep track of all the visited nodes because now there are cycles.

DFS on a **graph**: we need to keep track of visited nodes because we need to detect cycles.
* Python
```py
def dfs(G, node, vis):
    # some code to process node goes here
    for nbr in G[node]:
        if not vis[nbr]:
            # immediately before visiting a node, we will first mark it as 
            # visited...
            vis[nbr] = True
            # then, AFTER having marked the node as visited, we can recurse with
            # our depth-first search on that node that is now marked as visited.
            dfs(G, nbr, vis)

# we will usually have
n = len(G)
vis = n * [False]
# any time, immediately before we visit a node, we will first mark that node as
# visited...
vis[start] = True
# then we will recurse with our depth-first search on that node that is now 
# marked as visited
dfs(G, start, vis)
```

* JavaScript:
```js
function dfs(G, node, vis) {
  for (let nbr in G[node]) {
    if (!vis[nbr]) {
      vis[nbr] = true
      dfs(G, nbr, vis)
    }
  }
}

let n = G.length
let vis = new Array(n).fill(false)
dfs(G, start, vis)
```

Example:
![Full graph with cycles](./data-structures-and-algorithms/graphs/img/full-graph-with-cycles.png)

Using the graph shown above, we start at node 0, then move to 3, then 9 (as before):
```js
const G[9] = [0, 1, 3, 8]
```

Now, we see that node 9 has four neighbors:  0, 1, 3, and 8. We can easily see that 3 is the predecessor, but 0 is not the predecessor *AND* we already visited node 0. So, we want to ensure we don't visit node 0.


Using this DFS graph template:
* Python
```py
def dfs(G, node, vis):
    # some logic here to process each node...
    
    # for each nbr in the nodes of our graph... 
    for nbr in G[node]: # `nbr == `node`
        # if we have NOT marked this `nbr` as visited in our list of visited
        # `nbr`s
        if not vis[nbr]:
            # mark this `nbr` as visited`
            vis[nbr] = True
            # recursively go to that `nbr`
            dfs(G, nbr, vis)
```

* JavaScript
```js
const dfs = (G, node, vis) => {
  // some logic here to process each node...

  // for each `nbr` in the graph of nodes
  for (let nbr in G[node]) {
    if (!vis[nbr]) {
      vis[nbr] = true
      dfs(G, nbr, vis)
    }
  }
}
```

This code will be used most often to solve graph problems.


### Exercise 1) Number of connected components
Given an undirected graph, how many connected components does it have?

> Real questions will not say "undirected graph" nor "connected components"; it will be worded with real world variables.

#### Plan
An DFS visits all the nodes in a single connected component:
0. Build the adjacency list.
1. Iterate through all the nodes.
2. Launch a DFS from each node **only if it is unvisited**.
3. Count how many times we launch DFS.

If you start a depth-first search from a node, the depth-first will visit every node in a connected component, but it cannot jump to a connected component because DFS uses edges. So, by definition, when you start a DFS, the depth-first search will reach all nodes in that connected component. This is why we wuse DFS to answer connectivity problems.


#### Implementation
In Python:
```py
def num_connected_components(G):
    # 0. build the adjacency list
    n = len(G)
    vis = n * [False]
    res = 0 # number of connected components (our result)
    # 1. Iterate through all the nodes
    for node in range(n):
        # 2. Launch a depth-first search from each node only if it is unvisited
        if not vis[node]:
            vis[node] = True
            dfs(G, node, vis)
            # 3. count how many times we launch depth-first search
            res += 1

    return res

def dfs(G, node, vis):
    for nbr in G[node]:
        vis[node] = True
        dfs(G, node, vis)
```

In JavaScript:
```js
const numConnectedComponents = (G) => {
  // 0. Build the adjacency list from the given graph
  let n = G.length,
    vis = new Array(n).fill(false),
    res = 0 // number of connected components

  // 1. Iterate through all the nodes
  for (let node in n) {
    // 2. Launch a depth-first search from each node only if it is unvisited
    if (!vis[node]) {
      vis[node] = true
      // recursively traverse to that node that is now marked as visited
      dfs(G, node, vis)
      // 3.  count how many times we launch depth-first search
      res += 1
    }
  }

  return res
}

const dfs = (G, node, vis) => {
  // depth-first search on a graph:
  // for each nbr in nodes of graph
  for (let nbr in G[node]) {
    if (!vis[nbr]) {
      vis[nbr] = true
      dfs(G, nbr, vis)
    }
  }
}
```

### Exercise 2) Largest Connected Component
Given an undirected graph, what is the size of the largest connected component?

> The size is the number of nodes.

#### Plan
1. Again, launch a depth-first search for each connected component.
2. **Augment** DFS to return the number of visited nodes.

#### Implementation
In Python
```py
def largest_connected_component(G):
    # 0. Build the adjacency list from the given graph
    n = len(G)
    vis = n * [False]
    res = 0
    # 1. Iterate through the nodes of the graph
    for node in range(n):
        # 2. Launch DFS from each node only if we haven't visited the node
        if not vis[node]:
            vis[node] = True
            dfs(G, node, vis)
            # 3. Get the max size of the connected component
            res = max(res, dfs(G, node, vis))

    return res

def dfs(G, node, vis):
    # Augmentation: count the first node when DFS is first called
    numReached = 1
    for nbr in G[node]:
        if not vis[nbr]:
            vis[nbr] = True
            # increment the number of nodes that we visit from this nbr
            numReached = += dfs(G, nbr, vis)
    return numReached
```

In JavaScript:
```js
const largestConnectedComponent = (G) => {
  // 0. Build the adjacency list of the graph
  let n = G.length,
    vis = new Array(n).fill(false),
    res = 0

  for (let node in n) {
    if (!vis[node]) {
      vis[node] = true
      res = Math.max(res, dfs(G, node, vis))
    }
  }

  return res
}

const dfs = (G, node, vis) => {
  let numReached = 1

  for (let nbr in G[node]) {
    if (!vis[nbr]) {
      vis[nbr] = true
      numReached += dfs(G, nbr, vis)
    }
  }

  return numReached
}
```

### BFS Implementation
Bread-first search uses a **queue** to keep track of nodes to visit.

The main difference in breadth-first search is that we use a queue. A queue is **first-in-first-out (FIFO)** where nodes that are added first are visited first (unlike DFS).

Remember that to **mark nodes as visited when they are added to the queue** (so they are not added twice).


#### BFS Template
![BFS implementation](./data-structures-and-algorithms/graphs/img/bfs-template.png)

In Python
```py
def bfs(G, start):
    n = len(G)
    vis = [False for v in range(n)]
    vis[start] = True
    # double-ended queue, allows for adding to the end of a list and removing
    # from the beginning of the list (like adding and removing Starbucks' liquid sweetners from stock in the back room)
    Q = deque()
    Q.append(start)
    while Q:
        node = Q.popleft()
        for nbr in G[node]:
            if not vis[nbr]:
                vis[nbr] = True
                Q.append(nbr)
```

**Do not use an array for a queue in a BFS!!** Adding to the end of an array is fine because it's constant amortized time. However, removing from the beginning of an array takes linear time because you need to shift the entire array over by one position.

So, do **NOT** try implementating a stack and queue in JavaScript because JS does not have a library that implements a stack/queue data structure that is optimized for performance.

Again, in Python (muscle memory):
```py
def bfs(G, start):
    n = len(G)
    # `v` == node
    vis = [False for v in range(n)]
    # Don't forget to mark the starting node as visited
    vis[start] = True
    Q = deque()
    Q.append(start)
    while Q:
        # extract s
        node = Q.popleft()
        # all neighbors of s get added to the queue and get marked as visited
        for nbr in G[node]:
            if not vis[nbr]:
                vis[nbr] = True
                # Instead of immediately visiting the node (like in DFS), we add
                # the nbr to the queue
                Q.append(nbr)
```

#### BFS: distances
We can **augment** BFS to compute all the distances from start.

The distances of each node is the distance of its predecessor + 1.
```py
def get_distances(G, start):
    n = len(G)
    vis = [False for v in range(n)]
    vis[start] = True
    dist = [-1 for v in range(n)]
    dist[start] = 0
    Q = deque()
    Q.append(start)
    while Q:
        node = Q.popleft()
        for nbr in G[node]:
            if not vis[nbr]:
                vis[nbr] = True
                dist[nbr] = dist[node] + 1
                Q.append(nbr)
    return dist
```

#### BFS without vis
There is some duplication going on in the previous implementation. We can get rid of the visited array.
```py
def get_distances(G, start):
    n = len(G)
    dist = [-1 for v in range(n)]
    dist[start] = 0
    Q = deque()
    Q.append(start)
    while Q:
        node = Q.popleft()
        for nbr in G[node]:
            # instead of using a vis array, we use dist[nbr] == -1 
            if dist[nbr] == -1:
                dist[nbr] = dist[nbr] + 1
                Q.append(nbr)
    return dist
```

### Exercise 3) Closest Gate
Given a grid of chars with `G` (gates), `x` (obstacles), and `.` (ground), find the distance from each ground to the closest gate. Return an array `dist[i][j]` where `dist` is the distance from ground (i, j) to the closest gate.

#### Plan 1
Do BFS from each ground cell, stop when we find a gate. That works... but that's a lot of BFSs?

#### Plan 2
A better solution is to do a BFS **from each gate**, and keep track of the closest gate found so far from each ground. That works... but what if there are many gates?

That would still be a lot of BFSs!

#### Plan 3: Multi-source BFS
The optimal solution is to do a mult-source BFS, i.e. can do a BFS from all the gates at the same time:
1. Start by putting **all the gates** in the queue with distance 0.
2. Then do the main loop of BFS as usual.


##### Implementation
```py
def closest_gates(grid):
    nr, nc = len(grid), len(grid[0])
    gates = []
    # walk through entire grid to find all the gates
    for i in range(nr):
        for j in range(nc):
            if grid[i][j] == 'G':
                gates.append((i, j))
    dist = [[-1 for j in range(nc)] for i in range(nr)]
    Q = deque()
    for gate in gates:
        # For every gate that we find in the first loop, we set gate's distance
        # to zero
        dist[gate[0]][gate[1]] = 0
        Q.append(gate)
    # initialize 4 possible directions
    dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while Q:
        pos = Q.popleft()
        for dir in dirs:
            i, i = pos[0] + dir[0], pos[1] + dir[1]
            if 0 < i < nr and 0 < j < nc and grid[i][j] != 'x' and dist[i][j] == -1:
                dist[i][j] = dist[pos[0]][pos[1]] + 1
                Q.append((i, j))
    return dist
```

## Summary
* Triggers: Graphs can model many things. Look for **binary relationships!**
* Adjacency list is the go-to data structure.
* DFS for reachability problems.
* BFS for reachability and distance problems.
* BFS can't find distances on weighted graphs.

Things to learn well:
* How to build adjacency list from the edge list.
* DFS and BFS, both with adjacency list and on grids.
* How to augment BFS to get distances and shortest paths.

## Practice Problems
The goal of the problems below is to get used to manipulating grpah data structures. This way we gain flexibility to use the representation that is best for the problem, and the next sections will be easier with a strong foundation of the underlying data structures.

Some guidelines: 
- ALWAYS analyze the time and space complexity of your solutions using big-O notation BEFORE you start coding it!
- These problems can not be found anywhere online, since they are all made-up.

1. Given the adjacency list of a directed graph, return the number of edges in the graph. 

_Sol._
```py
def num_edges(G):
    return sum(len(nbrs) for nbrs in G))
```

If I want to get the number of edges from an adjacency list, I need to sum the length of each list in the adjacency list; that is, sum the 