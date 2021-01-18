/**
 * @dev
 * 3. Longest Substring Without Repeating Characters
 *
 * Difficulty:        Medium
 *
 * Reference:
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 *
 *
 * Intuition:
 *
 * Time complexity:   O(n)
 *
 *                    since we run and process each element in n-sized string
 *                    once
 *
 * Space complexity:  O(K)
 *
 *                    where K is the number of characters in the string,
 *                    however, since we know that there are 26 possible English
 *                    letters, we can say we will store a constant fixed number
 *                    of characters, thus space complexity is O(1)
 */

/**
 * Given a number, `n`, return the length of the longest sequence of characters 
 * that contains no repeats.
 * 
 * Note that `n` is not given as a string nor an array
 * 
 * Example input:
 * n: 1123223
 * 
 * Example output:
 * 3
 */

const solution = (n) => {
  if (n.length == 0) return 0

  const seen = new Map()
  let s = n + ""
  let start = 0, 
      maxLen = 0
  
  for (let i = 0, j = 0; i < s.length; i++) {
      if (seen.has(s[i])) {
          j = Math.max(j, seen.get(s[i]) + 1)
      }
      console.log(seen)
      seen.set(s[i], i)
      maxLen = Math.max(maxLen, i - j + 1)
  }
  
  return maxLen
}

