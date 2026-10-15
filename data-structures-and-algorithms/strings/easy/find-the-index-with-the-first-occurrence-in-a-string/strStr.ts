function strStr(haystack: string, needle: string): number {
  const lps = new Array(needle.length).fill(0)

  // Build the LPS array
  let length = 0,
    i = 1

  while (i < needle.length) {
    if (needle[i] === needle[length]) {
      length++
      lps[i] = length
      i++
    } else if (length > 0) {
      length = lps[length - 1]
    } else {
      lps[i] = 0
      i++
    }
  }

  // Search for needle inside haystack
  let haystackIndex = 0,
    needleIndex = 0

  while (haystackIndex < haystack.length) {
    if (haystack[haystackIndex] === needle[needleIndex]) {
      haystackIndex++
      needleIndex++

      // Entire needle was found
      if (needleIndex === needle.length) {
        return haystackIndex - needle.length
      }
    } else if (needleIndex > 0) {
      needleIndex = lps[needleIndex - 1]
    } else {
      haystackIndex++
    }
  }

  return -1
}