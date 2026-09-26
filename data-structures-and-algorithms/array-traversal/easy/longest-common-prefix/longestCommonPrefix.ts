/**
 * @dev Finds the longest common prefix among an array of strings.
 * Directly compares each character and avoids repeatedly creating shorter prefix strings.
 * 
 * Time complexity: O(N * M)
 * Space complexity: O(1)
 * 
 * Interview Takeaway:
 * The important pattern to recognize is:
 * When looking for something shared by every string, compare the strings character-by-character until the first mismatch.
 */
function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1)

      if (prefix === ``) {
        return ``
      }
    }
  }

  return prefix
}