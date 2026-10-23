/**
 * @dev Let `n` be the length of the input string.
 * Time complexity analysis: O(n) - In the worst case, we scan the entire
 * string. Each character is visited at most once across the two loops.
 * Space complexity analysis: O(1) - We only use two integer variables, `i` and
 * `length`. We don't create another string or array.
 * @param s
 * @returns 
 */
function lengthOfLastWord(s: string): number {
  let i = s.length - 1

  // Skip trailing spaces
  while (s[i] === ' ') {
    i--
  }

  let length = 0

  // Count characters in the last word
  while (i >= 0 && s[i] !== ' ') {
    length++
    i--
  }

  return length
}