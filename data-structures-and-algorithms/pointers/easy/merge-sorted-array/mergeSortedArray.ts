/**
 * Do not return anything, modify nums1 in-place instead.
 * @dev The arrays are already sorted, so the largest remaining element must be at the end of one of the arrays. Put that largest element at the end of nums1, then move backward.
 * 
 * Time complexity: O(m + n) - We traverse both arrays once, where m is the length of nums1 and n is the length of nums2.
 * Space complexity: O(1) - We are using a constant amount of extra space for the pointers.
 */
function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1, // Pointer for nums1
    j = n - 1, // Pointer for nums2
    k = m + n - 1 // Pointer for the merged array 

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }

    k--
  }
}

// const nums1 = [1, 2, 3, 0, 0, 0]
// const nums2 = [2, 5, 6]

// merge(nums1, 3, nums2, 3)