# Dynamic Programming
## Pre-workshop: Memoization
Top-down DP, AKA memoization, is interesting in the sense that it is the foundation of all DP problems.

Broadly speaking, here are 2 types of DP:
* **Top-down (memoization) DP**, which usually involves recursion and _generally is slightly slower_ and _takes slightly more space than bottom-up_
* **Bottom-up (tabulation) DP**, which some people consider "real" DP. It _typically is iterative_ and without any space-saving optimizations applied to it, _generally takes slightly less space due to the lack of recursion_, but still computes the same number (or more) of calculations. 

### Interview Cake: DP
#### Memoization (Top-down)
Memoization ensures that a function doesn't run for the same inputs more than once by keeping a record of the results for the given inputs (usually an object).

For example, a simple recursive function for computing the `n`th Fibonacci number:
```js
function fib(n) {
  if (n < 0) {
    throw new Error(
      'Index was negative. No such thing as a negative index in a series.')
    )
  }

  // Base cases
  if (n === 0 || n === 1) {
    return n
  }

  console.log(`computing fib(${n})`)
  
  return fib(n - 1) + fib(n - 2)
}
```

Will run on the same inputs multiple times:
```
❯ fib(5)
  computing fib(5)
  computing fib(4)
  computing fib(3)
  computing fib(2)
  computing fib(2)
  computing fib(3)
  computing fib(2)
❮ 5
```

We can imagine the recursive calls of this function as a tree, where the two children of a node are the two recursive calls it makes. We can see that the tree quickly branches out of control:

![Fib recursive calls](./swe/workshops/dynamic-programming/img/fib-recursive-calls.png)

To avoid the duplicate work caused by the branching, we can _wrap the function in a class that stores an instance property, memo, that maps inputs to outputs_. Then we simply
1. check `memo` to see if we can avoid computing the answer for any given input, and
2. save the results of any calculations to `memo`.

```js
class Fibber {
  constructor() {
    this.memo = {}
  }

  fib(n) {
    if (n < 0) {
      throw new Error('Index was negative. No such thing as a negative index in a series.')
    }

    // Base cases
    if (n === 0 || n === 1) {
      return n
    }
    
    // See if we've alrady calculated this
    if (this.memo.hasOwnProperty(n)) {
      console.log(`grabbing memo[${n}]`)

      return this.memo[n]
    }

    console.log(`computing fib(${n})`)
    const result = this.fib(n - 1) + this.fib(n - 2)

    // Memoize
    this.memo[n] = result

    return result
  }
}
```

We save a bunch of calls by checking the memo:
```
❯ new Fibber().fib(5)
  computing fib(5)
  computing fib(4)
  computing fib(3)
  computing fib(2)
  grabbing memo[2]
  grabbing memo[3]
❯ 5
```

Now in our recurrence tree, no node appears more than twice:

![Fib DP](./swe/workshops/dynamic-programming/img/fib-recursive-calls.png)

Memoization is a common strategy for dynamic programming problems, which are problems where the solution is composed of solutions to the same problem with smaller inputs (as with the Fibonacci problem, above). The other common strategy for dynamic programming problems is going bottom-up, which is usually cleaner and often more efficient.

#### DP: Bottom-up Problems
Going **bottom-up** is a way to avoid recursion, saving the **memory cost** that recursion incurs when it builds up the **call stack**.

Put simply, a bottom-up algorithm "starts from the beginning", while a recursive algorithm often "starts from the end and works backwards".

For example, if we wanted to multiply all the numbers in the range 1..`n`, we could use this cute, **top-down**, recursive one-liner:
```js
function product1ToN(n) {
  // We assume n >= 1
  return (n > 1) ? (n * product1ToN(n - 1)) : 1
}
```

This approach has a problem: it builds up a **call stack** of size `O(n)`, which makes our total memory cost `O(n)`. This makes it vulnerable to a **stack overflow error**, where the call stack gets too big and runs out of space.

To avoid this, we can instead go **bottom-up**:
```js
function product1ToN(n) {
  // We assume n >= 1
  let result = 1
  for (let num = 1; num <= n; num++) {
    result *= num
  }

  return result
}
```

This approach uses `O(1)` space and `O(n)` time.

> Some compilers and interpreters will do what's called **tail call optimization (TCO)**, where it can optimize some recursive functions to avoid building up a tall call stack. Python and Java decidedly do not use TCO. Some Ruby implementations do, but most don't. Some C implementations do, and the JavaScript spec recently allowed TCO. Scheme is one of the few languages that guarantee TCO in all implementations. In general, best not to assume your compiler/interpreter will do this work for you.

Going bottom-up is a common strategy for dynamic programming problems, which are problems where the solution is composed of solutions to the same problem with smaller inputs (as with multiplying the numbers 1..n1..n, above). The other common strategy for dynamic programming problems is memoization.

## Workshop
### Applications of Dynamic Programming
If you can easily identify dynamic programming problems, you can make your professional work significantly easier.

Dynamic programming is found in many natural occurring problems.

So, how do we identify them?

### Identifying DP Problems
#### Optimal substructure
An **optimal solution** can be constructed from optimal solutions of its subproblems

But, for some problems, there's just **an** answer, like fibonacci.

But, we MUST have an optimal answer to build off of.

#### Overlapping subproblems
The problem can be broken down into subproblems which are then reused.

Keep in mind, that recursion happens **sequentially**, and if there's overlap, we want to avoid repeated computations. In a binary tree, we recurse on each subtree

#### Does the Binary Search Algorithm use
No, because binary search has **no overlapping** subproblems -- i.e. we never perform the same process on the same elements.

#### Memos
Memos can be represented in two ways when tracking only one variable, we keep track of one variable using: 
* Map/Dict
* Array

2D problems will require tracking of 2 variables and use either:
* 2D array
* 2D map/dict

### House Robber problem

### Memoization
Side note: forward vs backward recurrences

Basically the same, but the direction is flipped -- this is up to personal preference.

**Forward recurrence**
**Backward Recurrence**

# REVIEW DP Guide

## Memoization Template
ABC
* Analyse the recursion tree
* Brute force it
* Cache the optimal states

### Problems
#### Minimum Cost sum path
Analyst the Recusion Tree

Solving for one cell optimally allows us to calculate optimally for all other cells --> overlapping subproblems

> Practice recursion using CodingBat

**Insight**: This is similar to the min-height binary tree question

#### Cache optimal states

A - add memo as an argument
S - store answers before returning
K - key check


### 
If we can now move down, we add another recurisve call

If we must take the max, we want to change the `inf` to `-inf`, AND change to max

If we have a target row and column, change the base case
* To a specific cell: the recurrence didn't change, the base cases did!

### Q4: Edit distance (Levenshtein Distance)

TripleByte problem
* Operations cost points, solution would require change of `1`s to the points given

