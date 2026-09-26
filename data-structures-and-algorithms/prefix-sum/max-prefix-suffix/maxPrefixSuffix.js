/**
 * @dev
 * 1423. Maximum Points You Can Obtain from Cards
 * 
 * Difficulty: Medium
 * 
 * Reference:
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 * 
 * Approach 4: Out-of-bounds Sliding Window
 * 
 * Time complexity:  O(k),
 * We run through `k` elements twice, and drop the constant "2", so it's just 
 * O(k)
 * 
 * Space complexity:  O(1),
 * We only store 2 sum values and a count for the `left` prefix elements
 * 
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
function maxScore(cardPoints, k) {
  if (!k || !cardPoints.length) return 0
  let prefixSum = 0,
    left

  // Loop will complete with left = k. Time: O(k)
  for (left = 0; left < k; left++) {
    prefixSum += cardPoints[ left ]
  }

  // left = k, let's say that k = 3 and cardPoints = [7, 1, 2, 8, 200, 6].
  // left points to 8, but we want it to point to 2
  left -= 1

  let rightHelper = 0,
    suffixSum = prefixSum

  // The idea is to have a prefix-suffix sliding window that holds the running
  // sum of the suffix while adding in the suffix element going in, and removing
  // the prefix element going out of the window.
  // Time: O(k), so O(2k) total, or more generally, O(k)
  while (left >= 0) {
    // For each suffix element starting from the suffix's right-most element, 
    // we compute the suffixSum. For each suffix element going in, we subtract
    // the previous element going out from our sliding window.
    suffixSum = suffixSum + cardPoints[ cardPoints.length - 1 - rightHelper ] - cardPoints[ left ]
    prefixSum = Math.max(prefixSum, suffixSum)

    rightHelper++  // slide suffix window to the left
    left--         // slide prefix window to the left
  }

  return prefixSum
}