/**
 * @dev Time and space complexity analysis:
 * 
 * Time complexity: O(n), each character in the string is processed at most twice, once it is added to the map and once it is removed from the map when we move the left pointer.
 * Space complexity: O(n), because in the worst case, every character in the string is unique, and we store each character in the map.
 */
function lengthOfLongestSubstring(s: string): number {
  const lastSeen = new Map<string, number>()

  let left = 0,
    maxLength = 0

  for (let right = 0; right < s.length; right++) {
    const char = s[right]

    if (lastSeen.has(char)) {
      left = Math.max(left, lastSeen.get(char)! + 1)
    }

    lastSeen.set(char, right)

    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
};