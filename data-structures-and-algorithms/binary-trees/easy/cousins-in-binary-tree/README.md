# 993. Cousins in Binary Tree
Difficulty: _Easy_

[Reference](https://leetcode.com/problems/cousins-in-binary-tree/).

## Question
In a binary tree, the root node is at depth `0`, and children of each node depth `k` are at depth `k+1`.

## Approach 1: Depth First Search with Branch Pruning
#### Intuition
We can do a depth-first traversal and find the depth and parent for each node. Once we know the depth and parent for each node, we can easily find out if they are cousins. Let's look at the pseudo-code for this before we try to optimize it a bit.
```
// This pseudo-code recursively traverses the tree and
// records the depth and parent for each node.
function dfs(node, parentNode = None) {
  if (node != null) {
    depth[node.val] = 1 + depth[parentNode.val]
    parent[node.val] = parentNode
    dfs(node.left, node)
    dfs(node.right, node)
  }
}
```

The above pseudo-code would give us the depth and parent for each node. To find out whether or not `x` or `y` are cousins is just one step away.
```
// If x and y are at the same depth but have different parents.
depth[x] == depth[y] and parent[x] != parent[y]
```

Now let's see if this brute-force recursive approach can be optimized for some scenarios.
  If `Node x` or `Node y` is lying very shallow in the tree, then does it make any sense to iterate down the entire tree?

In the above example, `Node 3` and `Node 4 are both cousins and hence at the same depth. What if we find one of the nodes very early on during the traversal?
How would that help us?

What if the tree is skewed?
```
                         1
                      /     \
                    2         2'
                  /  \      /   \
                3     3'   4     4'
             /     \
           5        5'
         /  \      /  \
        6    6'   7    7'
```
Are nodes 3 & 4 cousins?
Notice node 3 and node 4 are at depth 2. What's the need of going to a depth beyond that?

The diagram above shows that we encounter `Node 3` very early on. This would help us to restrict our search space for the other node, i.e. `Node 4`. For the second node, we do not need to go beyond the depth at which the first node was found, thus saving us a traversal of the subtree below node 3.

We can search for the desired nodes in the tree recursively. Whenever either of the given nodes is found, we record its parent and depth. 

#### Algorithm
1. Start traversing the tree from the root node. Look for `Node x` and `Node y`.
2. Record the depth when the first node, i.e. either `x` or `y`, is found and return `true`.
3. Once one of the nodes is discovered, for every other recursive call after this discovery, we return `false` if the current depth is more than the recorded depth. This basically means we didn't find the other node at the same depth and there is no point going beyond. This step of pruning helps to speed up the recursion by reducing the number of recursive calls.
4. Return `true` when the other node is discovered and has the same depth as the recorded depth.
5. Recurse the left and right subtree of the current node. If both left and right recursions return `true` and the current node is not their immediate parent, then `Node x` and `Node y` are cousins. Thus, `isCousin` is set to value `true`.

#### Complexity Analysis
*Time complexity*: _O(n)_ (in the worst case), where _N_ is the number of nodes in the binary tree. In the worst case, we might have to visit all of the nodes in the binary tree, thus the time complexity of this algorithm is worst case _O(n)_.

Let's look into such scenario. When both `Node x` and `Node y` are the leaf nodes and are at the last level of the tree, the algorithm has no reasons to prune the recursion. It can only come to a conclusion once it visits both the nodes. If one of these nodes is the last node to be discovered, the algorithm inevitably goes through each and every node in the tree.

*Space complexity*: _O(n)_ (in the worst case). *This is because the maximum amount of space utilized by the recursion stack would be _n_, as the height of a skewed binary tree could be, at worse, _n_.* For a left skewed or a right skewed binary tree, where the desired nodes are lying at the maximum depth possible, the algorithm would have to maintain a recursion stack of the tree's height. 

## Approach 2: Breadth First Search with Early Stopping
Are nodes 6 & 4 cousins?
Clearly they are not. Node 4 has a depth of 2. Node 6 has a depth of 4.

DFS would lead to discovering the node 6 first. Since node 6 is at depth 4 even with an optimized DFS approach we will be visiting all the nodes.
  If `Node x` or `Node y` is lying very shallow in the tree, then does it make any sense to iterate down the entire tree?
```
                         1
                      /     \
                    2         2'
                  /  \      /   \
                3     3'   4     4'
             /     \
           5        5'
         /  \      /  \
        6    6'   7    7'
```
Since this problem is about finding cousins, i.e. nodes lying at the same level/depth, it seems more natural to do a *level order traversal* of the tree.

If we do a level order traversal for the aforementioned example, we would only traverse until depth 2. At depth 2, we discover `Node 4`, but we do not find `Node 6` at the same level. Hence we can just stop our traversal and conclude that the nodes are not cousins.

Note, if the nodes are cousins, we would find both the nodes at the same depth. However, this is also true for siblings. We need to figure out how to determine when the two nodes are siblings. One way to find out that they are siblings is when we are adding the nodes to the queue. If `Node x` and `Node y` are left and right children of a node, this would mean that they are siblings. Therefore, we would return `false`.

There is a cleaner implementation for the level order traversal for this problem, though. For each node, we can add a delimiter to the queue after its children are added. These delimiters help us define boundaries for each parent and the siblings that are confined within those. This 

#### Algorithm
1. Do a level order traversal of the tree using a queue.
2. For every node that is popped off the queue, check if the node is either `Node x` or `Node y`. If it is, then for the first time, set both `siblings` and `cousins` flags as `true`. The flags are set as `true` to mark the possibilty of siblings or cousins.