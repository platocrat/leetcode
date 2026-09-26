/**
 * @dev Let `n` be the number of digits in `x`.
 * 
 * Time complexity: O(log x) - We process roughly half of the digits. A number x has O(log x) digits, so the overall time complexity is O(log x).
 * Space complexity: O(1) - We only use a couple of integer variables: `x` and `reversed`. Therefore, space complexity is O(1).
 * 
 * @notice The important trick to remember for this problem is: 
 * Don't reverse the entire number. Reverse only half, then compare the two halves.
 * This gives us the follow-up solution without using strings while maintaining constant extra space.
 * @param x 
 * @returns 
 */
function isPalindrome(x: number): boolean {
  // Negative numbers are never palindromes
  // Numbers ending in 0 are never palindromes unless x is 0
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  let reversed = 0

  // Reverse only the second half of the number
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  // Even number of digits:
  // x === reversed 
  //
  // Odd number of digits:
  // The middle digit doesn't matter, so remove it
  // from reversed with Math.floor(reversed / 10)
  return x === reversed || x === Math.floor(reversed / 10)
};