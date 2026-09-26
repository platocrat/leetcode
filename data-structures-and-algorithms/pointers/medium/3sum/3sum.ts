/**
 * @dev The key techniques to solve this problem are:
 * 1. Sort the array to make it easier to avoid duplicates
 * 2. Fix one number as the first element of the triplet
 * 3. Use two pointers to find the other two numbers
 * 4. Carefully skip duplicates
 * 
 * Because the array is sorted, moving `right` leftward gives us a smaller sum,
 * and if we need a larger sum, we move `left` rightward. 
 * 
 * So, every pointer movement is purposeful -- we never need to revisit a pair.
 * 
 * The big interview takeaway:
 * 3Sum is essentially a Two Sum problem repeated for each possible first 
 * element, with sorting making the inner Two Sum search possible in linear 
 * time.
 * 
 * Time complexity: O(n^2) - The optimal standard solution runs in O(n^2)) time.
 * Space complexity: O(1) - The auxiliary space used is constant O(1) because
 * we only use a few variables, but the output itself can contain many triplets,
 * so if we count the returned result, the total space is O(n^2)) in the worst 
 * case. 
 * @param nums 
 */
function threeSum(nums: number[]): number[][] {
  const result: number[][] = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the first number
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    // Since the array is sorted, three non-negative numbers
    // cannot sum to 0
    if (nums[i] > 0) {
      break
    }

    let left = i + 1, // index of the second smallest number
      right = nums.length - 1 // index of the largest number

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      // Record triplet
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])

        // Skip duplicate values
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }

        left++
        right--
      } else if (sum < 0) { // Move the left pointer rightward
        left++
      } else { // Move the right pointer leftward
        right--
      }
    }
  }

  return result
}