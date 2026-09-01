function findMaxAverage(nums: number[], k: number): number {
  let windowSum = 0

  // Calculate the sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += nums[i]
  }

  let maxSum = windowSum

  // Slide the window across the array
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k]
    maxSum = Math.max(maxSum, windowSum)
  }

  return maxSum / k
};