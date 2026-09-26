/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSumOfThreeSubarrays(nums, k, m = 3) {
  let len = nums.length - k + 1

  // Step 1: create windowSum array
  const memo = Array(len).fill(0)
  memo[ 0 ] = nums.slice(k).reduce((acc, n) => acc + n)

  for (let i = 1; i < nums.length - k + 1; i++) {
    memo[ i ] = memo[ i - 1 ] - nums[ i - 1 ] + nums[ i + k - 1 ]
  }

  // Step 2: create map key: sum, value: indexes.
  const sumMemo = Array.from(Array(m + 1), () => [ 0, [] ]) // [sum, indexes]

  // Step 3:
  // Loop through len-k*m+1 to make sure that we could always produce m arrays
  // that has k elements.
  // windowSum[l], which l is the start index of the jth subarray,
  // DP formula, windowSum[l] + sumMap.get(j-1)[0] > sumMap.get(j)[0],
  // update indexes arr and sum,
  for (let i = 0; i < nums.length - k * m + 1; i++) {
    for (let j = 1; j <= m; j++) {
      let l = i + (j - 1) * k;

      let windowSum = memo[ l ] // 
      let tempSum = windowSum + sumMemo[ j - 1 ][ 0 ]

      if (tempSum > sumMemo[ j ][ 0 ]) {
        const indices = [ ...sumMemo[ j - 1 ][ 1 ], l ]

        sumMemo[ j ] = [ tempSum, indices ]
      }
    }
  }

  return sumMemo[ m ][ 1 ]
}