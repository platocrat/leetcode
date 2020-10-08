/**
 * @dev
 * 1. Two Sum
 *
 * Difficulty:         Easy
 *
 * Reference:
 * https://leetcode.com/problems/two-sum/
 *
 *
 * Approach 1: Brute force
 *
 * Intuition:          Loop through each element, i, in the array and for each
 *                     element i, see if there is an element j where
 *                     `target == array[i] + array[j]`. Said equivalently, find
 *                     where `array[i] == target - array[j]`
 *
 * Time complexity:    O(n^2)
 *
 *                     We loop through the array once to process each element i
 *                     (O(n)), then twice to process each element j for each
 *                     element i (O(n^2)). The second loop gives us our worst
 *                     case time complexity of O(n^2).
 *
 * Space complexity:   O(1)
 *
 *                     Only return element i and j as a fixed lenth array of 2.
 * 
 * @param {Number[]} nums
 * @param {Number} target
 */
function twoSum(nums, target) {
  // run through each element in array
  for (let i in nums) {
    // check if each element i can be summed to j to = target
    for (let j in nums) {
      if (target == nums[ i ] + nums[ j ]) {
        return [ i, j ]
      }
    }
  }
}

/**
 * @dev
 *
 * Approach 3: One-pass hash table
 *
 *
 * Intuition:          What is the best way to maintain a mapping of each
 *                     element in the array to its index? A hash table.
 *                     To improve the run time complexity, we need a more
 *                     efficient way to check if the complement exists in our
 *                     array.
 *
 *                     By using a hash table, we reduce the lookup time from
 *                     O(n) to O(1) by trading space for speed. Recall that a
 *                     hash table is built exactly for this purpose; it supports
 *                     fast lookup in *near* constant time. We say *near*
 *                     because if a hash collision occurred, a lookup would
 *                     degenerate from O(1) to O(n). But, lookup should be
 *                     amortized O(1) time as long as the hash table was chosen
 *                     carefully.
 * 
 *                     We can do this in one pass. While we iterate and insert
 *                     elements into the object, we also look back to check if
 *                     the current element's complement already exists in the
 *                     object. If it exists, we found a solution and return
 *                     it immediately.
 *
 * Time complexity:    O(n)
 *
 *                     We loop through the array once to process each element.
 *
 * Space complexity:   O(n)
 *
 *                     Worst case we must store n - 1 indices of the array in
 *                     our object, i.e. we store all indices of the array, so
 *                     that's O(n) space.
 * 
 * @param {Number[]} nums              
 * @param {Number} target
 * @return {Number[]}
 */
function twoSum(nums, target) {
  let map = {}

  for (let i in nums) {
    complement = target - nums[ i ] // get complement to check for in next step

    if (complement in map) {
      return [ map[ complement ], i ]
    }

    // set the array value equal to its index in the object map so that we can
    // easily check whether the complement to our target sum is in our object.
    map[ nums[ i ] ] = i
  }
}