# Tree (data structure)
## Quick Reference
A *tree* organizes values hierarchically.
```
                         Animal
                  /                  \
           Reptile                    Mammal
         /    |    \                /     |    \         
     Lizard  Snake  Bird       Equine   Bovine  Canine
       |             |         /    \     |
   Salamander      Canary   Horse  Zebra  Cow
```

Each entry in the tree is called a *node*, and every node links to zero or more child nodes.
  If you flip the picture upside down, it kind of looks like a tree. That's where the name comes from!

### Example uses:
* *Filesystems* -- files inside folders inside folders
* *Comments* -- comments, replies to comments, replies to replies
* *Family trees* -- parents, grandparents, children, and grandchildren

## Leaves, Depth, and Height
*Leaf nodes* are nodes that are on the bottom of the tree (more formally: nodes that have no children).

Each node in a tree has a *depth*: the number of links from the root to the node.

A tree's *height* is the number of links from its root to the furthest leaf. (That's the same as the maximum node depth.)
```
              O (Root)          Depth: 0 ----
            /    \                          |
           O      O             Depth: 1    |
            \    /                          |
      (Leaf) O  O               Depth: 2    |  Height: 4
                 \                          |
                  O             Depth: 3    |
                /   \                       |
        (Leaf) O     O (Leaf)   Depth: 4 ----
```

## Tree Traversals
### Breadth First Search (BFS)
In a [BFS](https://www.interviewcake.com/concept/bfs), you first explore all the nodes one step away, then all the nodes two steps away, etc...

_Breadth-first search (BFS) is like throwing a stone in the center of a pond. The nodes you explore "ripple out" from the starting point._

Here's a sample tree, with the nodes labeled in the order they'd be visited in a BFS.
```
              (1)
            /     \
         (2)       (3)
        /   \     /   \
      (4)   (5) (6)   (7)
           /   \
         (8)   (9)
```

### Depth First Search (DFS)
In a [DFS](https://www.interviewcake.com/concept/dfs), you go as deep as possible down one path before backing up and trying a different one.

Depth-first search is like walking through a corn maze. You explore one path, hit a dead end, and go back and try a different path.

Here's how a DFS would traverse the same example tree:
```
              (1)
            /     \
         (2)       (7)
        /   \     /   \
      (3)   (4) (8)   (9)
           /   \
         (5)   (6)
```
  *Comparing BFS and DFS*
  * A BFS will find the *shortest path* between the starting point and any other reachable node. Conversely, a depth-first search will not necessarily find the shortest path.
  * Depth-first search on a binary tree _generally_ requires less memory than breadth-first.
  * Depth-first search can be easily implemented with recursion.

  You can also use BFS and DFS on [graphs](https://www.interviewcake.com/concept/graph).

### Pre Order Traversal
Visit the current node, then walk the left subtree, and finally walk the right subtree.
  A pre-order traversal usually visits nodes in the same order as a DFS.
```
              (1)
            /     \
         (2)       (7)
        /   \     /   \
      (3)   (4) (8)   (9)
           /   \
         (5)   (6)
```

### In Order Traversal
Walk the left subtree first, then visit the current node, and finally walk the right subtree.
  Of all three traversal methods, this one is probably the most common. When walking a binary search tree, an in order traversal visits the nodes in sorted, ascending order. Thus, you will often be using in order traversals for Binary Search Trees (BSTs).
```
              (6)
            /     \
         (2)       (8)
        /   \     /   \
      (1)   (4) (7)   (9)
           /   \
         (3)   (5)
```

### Post Order Traversal
Walk the left subtree, then the right subtree, and finally visit the current node.
  Dodge to left, right punch the post!

  This one's kind of rare...but it shows up in some parsing algorithms, like the [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation).
```
              (9)
            /     \
         (3)       (8)
        /   \     /   \
      (1)   (2) (6)   (7)
           /   \
         (4)   (5)
```

## Binary Trees
A *binary tree* is a tree where every node has at most two children.
```
         A
    / /  |  \ \
  B  C   D   E  F

   NON-BINARY TREE
```

### Full binary trees
A *full binary tree* is a binary tree where every node has exactly 0 or 2 children.
```
               O
             /   \
            O     O
          /   \ 
         O     O 
             /   \
            O     O
```

### Perfect binary trees
A *perfect binary tree* doesn't have room for any more nodes -- unless we increase the tree's height.
```
               O
            /     \
          O         O
       /    \     /    \
      O      O   O      O
```

### Complete binary trees
A *complete binary tree* is like a perfect binary tree missing a few nodes in the last level. Nodes are filled in from left to right.
  Complete trees are the basis for heaps and priority queues.
```
               O
            /     \
          O         O
       /    \     /    \
      O      O   O      O
   /    \
  O      O
```

### Balanced binary trees
A *balanced binary tree* is a tree whose height is small relative to the number of nodes it has. By small, we usually mean the height is _O(lg(n))_, where _n_ is the number of nodes.

Conceptually, a _balanced_ tree "looks full", without missing any chunks or branches that end much earlier than other branches.
  There are a few different definitions of balanced depending on the context. One of the most common definitions is that a tree is balanced if: (a) the height of its left and right subtrees differ by at most 1, and (b) both subtrees are also balanced.
```
               O                                O
            /     \                          /     \
          O         O                       O       O
       /    \     /    \                              \
      O      O   O      O                              O
   /    \      /          \                              \ 
  O      O    O            O                              O

      BALANCED BINARY TREE              UNBALANCED BINARY TREE
```
  Similar definitions can be used for trees that have more than two children. For instance, a full _ternary_ tree (with up to three children per node) is a tree where every node has zero or three children.

## Relationship between height and number of nodes
In perfect binary trees there's a cool mathematical relationship between the number of nodes and the height of the tree.

First there's a pattern to how many nodes are on each level:
1. Level 0: 2^0 = 1 nodes,
2. Level 1: 2^1 = 2 nodes,
3. Level 2: 2^2 = 4 nodes,
4. Level 2: 2^3 = 8 nodes,
5. _etc_

Let's call the total number of nodes in the tree _n_, and the height of tree _h_.

We could solve for _n_ by adding up the number of nodes on each level in the tree:
```
n = 2^0 + 2^1 + 2^2 + 2^3 + ... + 2^{h-1} = 2^h - 1
```

Solving for _h_ in terms of _n_, we get:
```
n = 2^h - 1
n + 1 = 2^h
log_2(n + 1) = hlog_2(2)     (log_2() === log base 2)
log_2(n + 1) = h
```

That's the relationship between a perfect binary binary tree's height and the number of nodes it has.

This is the intuition behind our definition of balanced that we used above. A perfect tree is balanced, and in a perfect tree the height grows logarithmically with the number of nodes.