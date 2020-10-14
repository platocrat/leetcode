/**
 * @dev 
 * 287. Find the Duplicate Number
 * 
 * Difficulty:         Medium
 * 
 * Reference:
 * https://leetcode.com/problems/find-the-duplicate-number/solution/
 * 
 * 
 * Approach 1: Sorting
 * 
 * Intuition:          This problem is provably solvable using the pigeonhole 
 *                     principle: if n items are put into m containers, with
 *                     n > m, then at least one container must contain more than
 *                     one item.
 * 
 * Time Complexity:    O(nlogn)
 
 *                     The `sort` invocation costs O(nlogn) time, so it 
 *                     dominates the linear scan of the for loop.
 * 
 * Space Complexity:   O(1) if an in-place algorithm is used, or O(n) if not
 * 
 *                     We sort `numbers` in place, so the memory footprint is 
 *                     constant. If we cannot modify the input array, then we 
 *                     must allocate linear space for a copy of `numbers` and
 *                     sort that instead.
 * 
 * @param {Number[]} _number
 * @return {Number}
 */
function findDuplicate(_numbers) {
  /**
   * Because we know there is exactly one duplicated element in the array,
   * we know in a sorted array any duplicate will be appear adjacent to its 
   * first occurrence, so we should return the duplicate as soon as its found.
   */
  _numbers.sort() // sort the array -- O(nlogn) time

  for (let i in _numbers) {
    if (_numbers[ i ] == _numbers[ i - 1 ]) {
      return _numbers[ i ] // return duplicate
    }
  }
}

/**
 * @dev
 * Approach 2: Set
 *
 * Intuition:          If we store each element as we iterate over the array,
 *                     we can simply check each element as we iterate over the
 *                     array.
 * 
 * Time Complexity:    O(n)
 * 
 *                     We run through and process each element in the 
 *                     array once since we are using a hash table to store re-
 *                     occurrences. However, note that insertions and lookups
 *                     for hash tables have amortized constant time 
 *                     complexities. The algorithm is therefore linear, as it
 *                     consists of a `for` loop that processes each element in
 *                     the array once. So, performance would decrease as n, the
 *                     size of the array decreases. 
 * 
 * Space Complexity:   O(n)
 * 
 *                     In the worst case, the duplicate element appears twice,
 *                     with the duplicate appearing at array index n - 1. In
 *                     this case, `seen` will contain n - 1 distinct values,
 *                     and will therefore occupy O(n) space.
 * 
 * 
 * @param {Number[]} _number
 * @return {Number}
 */
function findDuplicate(_numbers) {
  // Sets are not constant time! They take up space similar to arrays.
  seen = new Set()

  for (let number in _numbers) {
    if (seen.has(_numbers[ number ])) {
      return _numbers[ number ]
    }

    seen.add(_numbers[ number ])
  }
}

/**
 * @dev
 * Approach 3: Floyd's Tortoise and Hare (Cycle Detection)
 *
 * Intuition:           The idea is to reduce the problem to Linked List Cycle
 *                      II: https://leetcode.com/problems/linked-list-cycle-ii/solution/
 *
 *                      "Given a linked list, return the node where the cycle
 *                      begins."
 *
 *                      First, where does the cycle come from? 
 *                      Let's use the function `f(x) = nums[x]` to construct the
 *                      sequence: `x, nums[x], nums[nums[x]], 
 *                      nums[nums[nums[x]]], ...`
 * 
 *                      Each new element in the sequence is an element in nums 
 *                      at the index of 
 * 
 * Time complexiy:      O(n)
 * 
 * Space complexity:    O(1)
 * 
 * 
 * @param {Number[]} _numbers
 * @return {Number}
 */
function findDuplicate(_numbers) {

}