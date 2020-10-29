/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  // edge case if nums.length = 1
  if (nums[ 0 ] == target) {
    return 0
  } else if (target < nums[ 0 ]) {
    return 0
  } else {
    // first do binary search to find if target found or not
    let floor = 0,
      ceiling = nums.length

    // return true if found

    // if not, find closestNum in nums to target,

    // if closestNum is greater than target, insert at the index of closestNum
    // plus 1

    // if closestNum is less than target, insert at the index of closestNum
    while (floor + 1 < ceiling) {
      let distance = ceiling - floor,
        halfDistance = Math.floor(distance / 2),
        guessIndex = floor + halfDistance

      let guessValue = nums[ guessIndex ]

      if (guessValue == target) {
        return guessIndex
      } else if (guessValue < target) {
        floor = guessIndex
      } else {
        ceiling = guessIndex
      }
    }

    if (target > nums[ floor ] && target < nums[ ceiling ]) return floor + 1
    if (target > nums[ nums.length - 1 ]) return nums.length
  }
}