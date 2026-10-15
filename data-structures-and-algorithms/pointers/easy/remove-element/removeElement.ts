/**
 * @dev We use two pointers:
 * - `i` scans through every element in the array
 * - `k` tracks where the next element **not equal to `val`** should be placed.
 * 
 * Time complexity: O(n) - We examine every element exactly once.
 * Space complexity: O(1) - We only use the two pointers `i` and `k`; no
 * additional array is created.
 * 
 * @notice Pattern to Remember:
 * This problem is a classic Two-Pointer / Write-Pointer problem
 * 
 * When you see:
 * "Remove elements in-place"
 * 
 * And the remaining elements need to be placed at the beginning, think:
 * read pointer --> scan the array
 * write pointer --> place valid elements
 * 
 * The general template is
 * ```ts
 * let write = 0
 * 
 * for (let read = 0; read < nums.length; read++) {
 *   if (shouldKeep(nums[read])) {
 *     nums[write] = nums[read]
 *     write++
 *   } 
 * }
 * 
 * return write
 * ```
 * 
 * @notice This same patter is useful for several array problems, including
 * [Remove Duplicates from Sorted Array (#26)](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
 * @param nums 
 * @param val 
 * @returns 
 */
function removeElement(nums: number[], val: number): number {
  let k = 0

  // For every element...
  for (let i = 0; i < nums.length; i++) {
    // where `nums[i] !== val`...
    if (nums[i] !== val) {
      // we copy it to position `k`...
      nums[k] = nums[i]
      // then move `k` forward
      k++
    }
  }

  // At the end, `k` represents the number of elements that weren't removed.
  return k
}