/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let leftIndex = insertionIndex(nums, target, true)

  if (leftIndex == nums.length || (nums[ leftIndex ] != target)) return [ -1, -1 ]

  return [ leftIndex, insertionIndex(nums, target, false) - 1 ]
}

function insertionIndex(nums, target, left) {
  let lo = 0,
    hi = nums.length

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2)

    if (nums[ mid ] > target || (left && target == nums[ mid ])) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }

  return lo
}