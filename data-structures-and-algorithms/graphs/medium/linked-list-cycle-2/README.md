# 142. Linked List Cycle II
Difficulty: Medium
[Reference](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Intuition:          
Since each node needs to hold *its own value*, represented by the `this.val` method, and *a pointer to the next node in the list*, represented by the `this.next` method, we can specify each property as as amethod of our `ListNode` function.

The `head` is a linked list, created by a call of the `ListNode` function with
the values of the linked list passed in as an array for the argument.

## Approach 1: Set (or Hash Table)
### Intuition:          
If we use a `Set` data structure to keep track of nodes that we've seen previously, we can traverse the linked list and return the first duplicate node.

### Time complexity: O(n)
In the worst case, we must run through and process each node in the linked list, `ListNode`, which takes O(n) time.

### Space complexity: O(n)
In the worst case, we store n - 1 (i.e., all) nodes in the linked list, which takes O(n) space.

## Approach 2: Floyd's Tortoise and Hare Algorithm
### Intuition:          
The idea behind the algorithm is, if you have two pointers in a linked list, one moving twice as fast (the hare) than the other (the tortoise), then if they intersect, there is a cycle in the linked list. If the hare and tortoise don't intersect, then there is no cycle. In the problem, we're asked to return a boolean for whether or not there is a cycle. You are given a linked list, `ListNode`, with each node's value that is represented by the `.val` method, and a pointer (which points to the next node after each node value) that is represented by the `.next` method.

Visualize the linked list as a kite with a hanging string rotated to the right by 90 degrees. The nodes that make up the kite are cyclic while the nodes that make up the kite's string are acyclic.

All nodes are labeled from 0 to C - 1, where C is the length of the cycle. The acyclic nodes of the kite's string are labelled from -F to -1, where F is the number of nodes outside of the cycle (you can think of F as how many nodes outside of the kite, or far away along the  string). 

After F iterations, `tortoise` points to node 0 and `hare` points to node h, where F === h (mod C). (This in  the example given in LeetCode's guided solution, this  works out to F = 3, h = 2, and C = 5, and when you solve for F, you get 3 == 2 mod 5 => 3 === 3.) This is because `hare` traverses 2F nodes over the course of F  iterations, exactly F of which are in the cycle. 

After C - h (5 - 3, so 2) more iterations, `tortoise` obviously points to node C - h, but (less obviously) `hare` also points to the same node. To seewhy, remember that `hare` traverses 2F, or 2(C - h), fromits starting position of h (or 3):
```
h + 2(C - h) = 2C - h === C - h (mod C)
```

Thereforce, given that the list is cyclic, `hare` and `tortoise` will eventually both point to the same node, known as the `intersection`.

Given that phase 1 finds an intersection, phase 2 proceeds to find the node that is the entrance to the cycle. To do so, we initialize two more pointers: `pointer1`, which pointers to the head of the list, and `pointer2`, which points to the intersection. Then, we advance each of them by 1 until they meet; the node where they meet is the entrance to ths cycle, so we return it.

### Time complexity:    O(n)
For cyclic lists, `hare` and `tortoise` will point to the same node after F + C - h iterations, as demonstrated in the proof of correctness. 

F + C - h <= F + C = n, so phase 1 runs in O(n) time. Phase 2 runs for F < n iterations, so it also runs in O(n) time.

For acyclic lists, `hare` will reach the end of the list in roughly n/2 iterations, causing the function to return before phase 2. Therefore, regardless of which list category the algorithm receives as input, it runs in time linearly proportional to the number of nodes.
                    
### Space complexity:   O(1)
Floyd's Tortoise and Hare algorithms allocates only pointers, so it runs with constant overall memory usage.
