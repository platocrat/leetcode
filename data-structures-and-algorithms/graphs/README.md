# Graph (data structure)
A *graph* organizes items in an interconnected network.

Each item is a *node* (or *vertex*). Nodes are connected by *edges*
```
                  
        (A)   (C) NODE
         \   /   \  EDGE
          (B)-----(D)
```

#### Strengths
* *Representing links*. Graphs are ideal for cases where you're working with _things that connect to other things_. Nodes and edges could, for example, respectively represent cities and highways, routers and ethernet cables, or Facebook users and their friendships.

#### Weaknesses
* *Scaling challenges*. Most graph algorithms are _O(n * lg(n))_ or even slower. Depending on the size of your graph, running algorithms across your nodes may not be feasible.

## Terminology
### Directed or undirected
In *directed* graphs, edges point from the node at one end to the node at the other end. In *undirected* graphs, the edges simply connect the nodes at each end ([see image](https://www.interviewcake.com/concept/javascript/graph?course=fc1&section=trees-graphs)).

### Cyclic or acyclic
A graph is *cyclic* if it has a cycle -- an unbroken series of nodes with no repeating nodes or edges that connects back to itself. Graphs without cycles are *acyclic* ([see image](https://www.interviewcake.com/concept/javascript/graph?course=fc1&section=trees-graphs)).

### Weighted or unweighted
If a graph is *weighted*, each edge has a "weight". The weight could, for example, represent the distance between two locations, or the cost or time it takes to travel between the locations (think neural-nets, or [see the image for an example](https://www.interviewcake.com/concept/javascript/graph?course=fc1&section=trees-graphs))

### Legal coloring
A *graph coloring* is when you assign colors to each node in a graph. A *legal coloring* means no adjacent nodes have the same color ([see the image for an example](https://www.interviewcake.com/concept/javascript/graph?course=fc1&section=trees-graphs), or refer to [LeetCode problem 1042](https://leetcode.com/problems/flower-planting-with-no-adjacent/))

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

W would also use an object where the keys represent the node and the values are the lists of neighbors.
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

*Is there a path between two ndoes in this undirected graph?* Run DFS or BFS from one node and see if you reach the other one.

*What's the shortest path between two nodes in this undirected, weighted graph?* Run BFS from one node and backtrack once you reach the second. _Note:_ BFS always finds the shortest path, assuming the graph is undirected and unweighted. DFS does _not_ always find the shortest path.

*Can this undirected graph be colored with two colors?* Run BFS, assigning colors as nodes are visited. Abort if we ever try to assign a node a color different from the one it was assigned earlier.

*Does this undirected graph have a cycle?* Run BFS, keeping track of the number of times we're visiting each node. If we ever visit a node twice, then we have a cycle.

### Advanced graph algorithms
If you have lots of time before your interview, these advanced graph algorihms pop up occasionally:
* *Dijkstra's Algorithm*: Finds the shortest path from one node to all other nodes in a _weighted_ graph.
* *Topological Sort*: Arranges the nodes in a _directed_, _acyclic_ graph in a special order based on incoming edges.
* *Minimum Spanning Tree*: Finds the cheapest set of edges needed to reach all nodes in a _weighted_ graph.

## Pathrise
### Terminology
#### Undirected graphs
Two nodes connected by an edge are the *endpoints* of the edge. 
Two nodes are *adjacent* or *neighbors* if they are connected by an edge.

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

The *degree* of a node is the number of neighbors that node has. In an undirected graph, *the sum of all nodes' degrees is 2m*, where `m` is the number of edges. This is because each edge is counted twice, once for each node and its own degrees. The gree of a node is denoted as `deg(u)`. 

A *leaf* is a node with a degree of 1.
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

A *self-loop* is an edge like {u, u}, where the two endpoints are the same node.

If two edges have the same endpoints they are said to be *parallel edges*.

*By default, it is assumed that graphs do not contain self-loops nor parallel edges*, unless otherwise stated (something you can clarify with your interviewer).

A *path* is a sequence of edges where each two consecutive edges share an endpoint. In general, we consider paths without repeated nodes (sometimes called simple paths). If all the nodes are different, but a path connects to a previously traversed node, then that path is called a *cycle* instead. A graph without any cycles is called *acyclic*.

We say a node `u` can *reach* another node `v` if there is a path between them. Colloquially, node `v` is *reachable* from node `u`. In an undirected graph, if node `u` can reach node `v`, then node `v` can reach node `u`. We also say that `u` and `v` are *connected*.

If every node can reach every other node, a graph is *connected*. Otherwise, the graph is *disconnected*. A *connected component* (CC) of a graph is a group of nodes where every node can reach every other node. Every node belongs in a connected component, even if it is by itself. A connected graph has a single connected component, and in many graphs algorithms, _each connected component is processed independently from the rest_. 

*A connected graph has at least `n-1` edges*. This is because a graph with 0 edges, but one node, has `n` connected components, or 1 connected component composed of 1 node. With 1 edge we can connect two connected components (e.g. 2 graphs composed of 1 node each) and reduce the number of connected components by 1 (i.e. 2 graphs of one node each become 1 connected component graph of 2 nodes and 1 edge).

The *length* of a path is the number of edges. The *shortest path* between two nodes is the path with the fewest edges starting at one node (e.g. node `u`) and ending at another (e.g. node `v`). The *shortest path* between two nodes can be _easily found using breadth-first search (BFS)_ at the cost of _slightly_ more memory relative to a depth-first search (DFS) approach. The shortest path may not be unique. The *distance* between two nodes is the length of the shortest path between them. If two graphs are in different connected components, the distance between them is said to be _infinite_. The *diameter* of a connected graph is the _maximum distance_ between any two nodes.
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

Sometimes, edges have associated *weights*:
![Weighted Connected Graph](/data-structures-and-algorithms/egraphs/img/weights.png)

Weights are numerical values that indicate some measure about the edge. A *weighted graph* is a graph where the edges have weights. Otherwise, the graph is *unweighted*. Often, weights denote edge lengths or the distance between nodes, but it depends on the context. *Weights are taken into account when defining the length of paths or the distance between nodes*: in a weighted graph, the length of a path is not the number of edges, it is the sum of the weights of the edges on it.

It is less common, but sometimes nodes have weights too, instead of edges.

A graph that is constructed by taking a subset of the nodes and/or edges or another graph is called a *subgraph*.

A *tree* is a connected graph without cycles. A *forest* is a graph without cycles, where each connected component is a tree. *A connected graph is a tree if and only if it has `n-1` edges*. As we said earlier, _in order to be connected, a graph needs at least `n-1` nodes_. A tree cannot have more than `n-1` edges because if you add an edge `{u, v}` to a graph and `u` and `v` are already in the same connected component, that creates a cycle. 

When we analyze the runtime or space of grpah algorithms (algorithms where the input is a graph), we do it in terms of both `n` and `m`. The fact that trees have `m = n - 1` edges is important in the analysis of algorihms. It means that the time or space of an algorithm for trees depends only on `n`.