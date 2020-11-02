# Tree (data structure)
## Quick Reference (see Deep Dive section for in-depth info)
A **tree** organizes values hierarchically.
```
                         Animal
                  /                  \
           Reptile                    Mammal
         /    |    \                /     |    \         
     Lizard  Snake  Bird       Equine   Bovine  Canine
       |             |         /    \     |
   Salamander      Canary   Horse  Zebra  Cow
```

Each entry in the tree is called a **node**, and every node links to zero or more child nodes.
  If you flip the picture upside down, it kind of looks like a tree. That's where the name comes from!

**Example uses:**
* **Filesystems** -- files inside folders inside folders
* **Comments** -- comments, replies to comments, replies to replies
* **Family trees** -- parents, grandparents, children, and grandchildren

### Leaves, Depth, and Height
**Leaf nodes** are nodes that are on the bottom of the tree (more formally: nodes that have no children).

Each node in a tree has a **depth**: the number of links from the root to the node.

A tree's **height** is the number of links from its root to the furthest leaf. (That's the same as the maximum node depth.)
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

### Tree Traversals
#### Breadth First Search (BFS)
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

#### Depth First Search (DFS)
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
  **Comparing BFS and DFS**
  * A BFS will find the **shortest path** between the starting point and any other reachable node. Conversely, a depth-first search will not necessarily find the shortest path.
  * Depth-first search on a binary tree _generally_ requires less memory than breadth-first.
  * Depth-first search can be easily implemented with recursion.

  You can also use BFS and DFS on [graphs](https://www.interviewcake.com/concept/graph).

#### Pre Order Traversal
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

#### In Order Traversal
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

#### Post Order Traversal
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

### Binary Trees
A **binary tree** is a tree where every node has at most two children.
```
         A
    / /  |  \ \
  B  C   D   E  F

   NON-BINARY TREE
```

#### Full binary trees
A **full binary tree** is a binary tree where every node has exactly 0 or 2 children.
```
               O
             /   \
            O     O
          /   \ 
         O     O 
             /   \
            O     O
```

#### Perfect binary trees
A **perfect binary tree** doesn't have room for any more nodes -- unless we increase the tree's height.
```
               O
            /     \
          O         O
       /    \     /    \
      O      O   O      O
```

#### Complete binary trees
A **complete binary tree** is like a perfect binary tree missing a few nodes in the last level. Nodes are filled in from left to right.
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

#### Balanced binary trees
A **balanced binary tree** is a tree whose height is small relative to the number of nodes it has. By small, we usually mean the height is _O(lg(n))_, where _n_ is the number of nodes.

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

### Relationship between height and number of nodes
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

## Deep Dive
### Applications of a Tree data structure
* File system
* Search indexing
* Social network analysis

#### Application: Social network analysis
**Lowest Common Ancestor (LCA) of a Binary Tree**:
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. 

According to the definition on Wikipedia: "The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in T (a tree) that has both `p` and `q` as descendents (where we allow a node to be a descendant of itself)."

![LCA Example](./data-structures-and-algorithms/binary-trees/img/lca.png)
```
Input: p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3

Input: p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself, according to the LCA definition.
```

**Use case**:

![Facebook's People you may know](./data-structures-and-algorithms/binary-trees/img/fb-people-you-may-know.png)

### Tree traversal
These the following 3 traversals are the most common in interviews:
1. Pre-order,
2. In-order, and
3. Post-order

**Pre-order traversal**:

![Pre-order](./data-structures-and-algorithms/binary-trees/img/pre-order.png)

In JavaScript:
```js
function preOrderTraversal(root) {
  if (!root) return

  console.log(root.val) // root
  preOrderTraversal(root.left) //left
  preOrderTraversal(root.right) // right
}
```

In Python:
```py
def pre_order_traversal(root):
    if not root: return

    print(root.val) # root 
    pre_order_traversal(root.left) # left 
    pre_order_traversal(root.right) # right
```

**In-order traversal**:

![In-order](./data-structures-and-algorithms/binary-trees/img/in-order.png)

In JavaScript:
```js
function inOrderTraversal(root) {
  if (!root) return

  inOrderTraversal(root.left) //left
  console.log(root.val) // root
  inOrderTraversal(root.right) // right
}
```

In Python:
```py
def in_order_traversal(root):
    if not root: return

    in_order_traversal(root.left) # left
    print(root.val) # root
    in_order_traversal(root.right) # right
```

**Post-order**:

![Post-order](./data-structures-and-algorithms/binary-trees/img/post-order.png)

In JavaScript:
```js
function postOrderTraversal(root) {
  if (!root) return

  postOrderTraversal(root.left) //left
  postOrderTraversal(root.right) // right
  console.log(root.val) // root
}
```

In Python:
```py
def post_order_traversal(root):
    if not root: return

    in_order_traversal(root.left) # left
    in_order_traversal(root.right) # right
    print(root.val) # root
```

### Tree problems
#### Find the mode in a binary search tree (BST)
Given a BST, find the mode.

**Example**:
Given this BST
```
       10
     /   \
   2      80
 /  \    /  \
1    4  80  103
```
Returns 80

##### Solution
The mode is the _most frequent_ value in the tree.

Thus, we use a _frequency map_ and store the node as the key and the frequency as the value.
```
{
  10: 1, 
  2: 1, 
  1: 1,
  80: 2,
  103: 1
}
```

**Now, can we do it in constant space?**
Use in-order traversal:
```py
def in_order_dfs(self, node):
    if not node: return

    self.in_order_dfs(node.left)
    self.current_count = 1 if self.prev != node.data else self.current_count + 1

    if self.current_count > self.max_count:
        self.maxPcount = self.current_count
        self.mod = self.prev

    self.prev = node.data
    self.in_order_dfs(node.right)
    
    return self.mode
```

**Key takeaway - BST**
In-order traversals on a BST automatically allow us to traverse the list in _sorted order_.

#### Height based
##### Template
Require:
* Base case
* Recursive call
  * Request (top down process)
  * Return (bottom up process)

![Base case and recursive call](./data-structures-and-algorithms/binary-trees/img/base-case-and-recursive-call.png)

Template in JavaScript:
```js
function maxDepth(root) {
  if (!root) return 0

  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  
  return Math.max(left, right) + 1 // add one because level of root is 1.
}
```

Template in Python:
```python
class Solution:
    def max_depth(self, root):
        if not root: return 0

        left = self.max_depth(root.left)
        right = self.max_depth(root.right)

        return max(left, right) + 1
```

Template in Rust:
```rs
/// struct root {
///     val: i64,
///     left: Node,
///     right: Node
/// }
use std::cmp; 

impl Solution {
    fn max_depth(self, &root: i64) -> i64 {
        if (root == None) {
          return 0;
        }

        let left = self.max_depth(root.left);
        let right = self.max_depth(root.right);

        return cmp::max(left, right) + 1;
  }
}
```

###### Base case
![Null base case](./data-structures-and-algorithms/binary-trees/img/base-case-null.png)
* The base case serves to prevent the function from recursing infinitely, i.e. it notifies the recursive function to start the return process.
* In _most_ of the Binary Tree problems we see, the base case occurs when `node == null`

###### Recursive rule
![Recursive request](./data-structures-and-algorithms/binary-trees/img/recursive-request.png)
* **Request**: at each level, we are requesting the next level to pass back some values, so we can use these values to do post-processing.

![Recursive return](./data-structures-and-algorithms/binary-trees/img/recursive-rule.png)
* **Return**: at each level, after receiving the values we requested, i.e. performing post-processing, and returning the final result.

##### Balanced Binary Tree (problem)
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:
* _a binary tree in which the depth of the two subtrees of every node never differ by more than 1._

**Example 1**:
Given the following tree: `[3, 9, 20, null, null, 15, 7]`:
```
     3
   /   \
  9     20
       /  \
      15   7
```
Return true.

**Example 2**:
Given the following tree: `[1, 2, 2, 3, 3, null, null, 4, 4]`:
```
             1
           /   \
          2     2
        /   \
       3     3
     /   \  
    4     4 
```
Return false.

###### Solution 3 (optimal)
Time complexity: `O(n)`
Space complexity: `O(height)`

JavaScript:
```js
function isBalanced(root) {
  return getHeight(root) != -1
} 

// Using pre-order traversal to get the height
function getHeight(root) { 
  if (!root) return 0

  let left = getHeight(root.left)
  let right = getHeight(root.right)

  // post-processing
  if (left == -1 || right == -1) return -1
  if (Math.abs(left - right) > 1) return -1

  return Math.max(left, right) + 1
}
```

Python:
```py
class Solution:
    def is_balanced(self, root):
        return self.get_height(root) != -1

    def get_height(self, root):
        if not root: return 0

        left = self.get_height(root.left)
        right = self.get_height(root.right)

        # post-processing
        if left == -1 or right == -1: return -1
        if abs(left - right) > 1: return -1

        return max(left, right) + 1
```

##### More height based problems
* Minimum Depth of Binary Tree
* Maximum Depth of N-ary Tree
* Diameter of Binary Tree

#### Comparison between two nodes
Q3: Same Tree
Q4: Symmetric Tree

**Key takeaway - Node comparison**
* Base case: 
  * involves comparison of 2 nodes
* Recursive call
  * Request
    * Make sure to pass down the right node parameter based on the question
  * Return 
    * Compare its value

##### More node comparison problems
* Univalued Binary Tree
* Merge Two Binary Trees
* Subtree of Another Tree
* Invert Binary Tree

#### Level order traversal (BFS)
**When to use BFS in a Tree traversal**:
When asked to perform a **_level_ order traversal**
* Binary Tree **Level Order Traversal**
* Binary Tree Zigzag **Level Order Traversal**
* Average of **Levels** in Binary Tree

#### Binary Tree Level Order Traversal
Given a binary tree, return the level order traversal of its nodes' values.
(i.e. from left to right, level by level).
```
For example, given:
  
     3
   /   \
  9     20
       /  \
      15   7
```
Returns its level order traversal as:
```
[
  [3],
  [9, 20],
  [15, 7]
]
```

##### Solution
```py
from collections import deque

def level_order(root):
    if not root: return []

    queue, result = deque([root]), []

    while queue:
        # we need size of queue to be decoupled from queue since queue is being
        # modified.
        current_lvl, size = [], len(queue)

        for _ in range(size):
            node = queue.popleft()
            current_lvl.append(node.val)
            
            if node.left:
                queue.append(node.left)
            
            if node.right:
                queue.append(node.right)

        result.append(current_lvl)

    return result
```

**Key takeaway - BFS**
* When asked to print out a Tree **level by level**, think about BFS
* Because the length of the queue is changing, make sure to store the size of the queue as a variable.

#### BFS template
MIKE:
* I - Initialize a queue
* I - Iterate over the queue
* M - monitor queue size
* E - expand child nodes

#### BFS problems 
When asked to access elements based on each _level_:
* Binary Tree Right Side View
* Find Largest Value in Each Tree Row
* Populating Next Right Pointers in Each Node