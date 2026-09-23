/**
 * @dev The most important insight is nesting order.
 * A stack provides Last-In, First-Out (LIFO) behavior, which is natural fit for
 * this problem.
 * @notice Time complexity: O(n) - we examine each character exactly once in a
 * single pass. `push()`, `pop()`, and HashMap lookups are all O(1) operations.
 * Space complexity: O(n) - In the worst case, the string could consist entirely
 * of opening brackets; every character gets pushed onto the stack; therefore,
 * the stack can contain `n` elements.
 * @notice Key Interview Takeaway:
 * The pattern to recognize is:
 * Things must be closed in reverse order that they were opened. 
 * @param s 
 * @returns 
 */
function isValid(s: string): boolean {
  const stack: string[] = []

  const matching: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (const char of s) {
    // Opening bracket
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
      continue
    }

    // Closing bracket with no corresponding opening bracket
    if (stack.length === 0) {
      return false
    }

    // Check whether the most recent opening bracket matches
    const top = stack.pop()

    if (top !== matching[char]) {
      return false
    }
  }

  // Valid only if every opening bracket was closed
  return stack.length === 0
}