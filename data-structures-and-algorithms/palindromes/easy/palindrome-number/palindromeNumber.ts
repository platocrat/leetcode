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