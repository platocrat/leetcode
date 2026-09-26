/**
 * @dev
 * This solution uses a HashMap (object in JavaScript) to keep track of a
 * rolling sum and the number of occurrences of a specific sum.
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number}
 */
function subarraySum(nums, k) {
  let sum = 0,
    kSumCount = 0,
    sumsMap = new Map()

  sumsMap.set(0, 1)

  for (let i in nums) {
    sum += nums[ i ]

    if (sumsMap.has(sum - k)) kSumCount += sumsMap.get(sum - k)

    const value = (sumsMap.get(sum) || 0) + 1
    sumsMap.set(sum, value)
  }

  return kSumCount
}