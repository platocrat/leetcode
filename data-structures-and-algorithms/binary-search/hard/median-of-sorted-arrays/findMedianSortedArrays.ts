function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // Always binary search the smaller array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1)
  }

  const m = nums1.length
  const n = nums2.length

  let left = 0
  let right = m

  // The left partition must contain this many elements
  const half = Math.floor((m + n + 1) / 2)

  while (left <= right) {
    // Number of elements taken from nums1
    const partition1 = Math.floor((left + right) / 2)

    // Number of elements needed from nums2
    const partition2 = half - partition1

    // Elements immediately to the left/right of each partition
    const left1 = partition1 === 0
      ? -Infinity
      : nums1[partition1 - 1]

    const right1 = partition1 === m
      ? Infinity
      : nums1[partition1]

    const left2 = partition2 === 0
      ? -Infinity
      : nums2[partition2 - 1]

    const right2 = partition2 === n
      ? Infinity
      : nums2[partition2]

    // We found the correct partition
    if (left1 <= right2 && left2 <= right1) {
      // Odd number of total elements
      if ((m + n) % 2 === 1) {
        return Math.max(left1, left2)
      }

      // Even number of total elements
      const leftMax = Math.max(left1, left2)
      const rightMin = Math.min(right1, right2)

      return (leftMax + rightMin) / 2
    }

    // nums1's partition is too far right
    if (left1 > right2) {
      right = partition1 - 1
    } else {
      // nums1's partition is too far left
      left = partition1 + 1
    }
  }

  throw new Error(`Input arrays are not sorted`)
}