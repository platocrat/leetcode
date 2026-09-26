/**
 * @dev Time and space complexity analysis:
 * Time complexity: O(n) - We traverse the array once with `read`
 * Space complexity: O(1) - We only use two pointers, `read` and `write`. No 
 * additional array, `Set`, or hash map is created. Therefore, O(1) is optimal
 * because the problem explicitly requires the modification to happen in-place.
 * 
 * Final Takeaway:
 * The key insight is: Because the array is sorted, duplicates are adjacent. Use
 * a slow `write` pointer to store unique vales and a fast `read` pointer to 
 * scan the array.
 * 
 * The pattern is:
 * `read` → scans everything
 * `write` → stores unique values
 * @param nums 
 * @returns 
 */
function removeDuplicates(nums: number[]): number {
  let write = 1

  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[write - 1]) {
      nums[write] = nums[read]
      write++
    }
  }

  return write
};