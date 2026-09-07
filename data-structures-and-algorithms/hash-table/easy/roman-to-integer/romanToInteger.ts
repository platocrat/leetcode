/**
 * @dev Walking through MCMXCIV
 * Let's see exactly what happens during the loop:
 * Current	Value	  Next	 Next Value	  Action	   Result
 * M	      1000	  C	     100	        Add	       1000
 * C	      100	    M	     1000         Subtract   900
 * M	      1000	  X	     10	          Add	       1900
 * X	      10	    C	     100	        Subtract   1890
 * C	      100	    I	     1	          Add	       1990
 * I	      1	      V	     5	          Subtract   1989
 * V	      5	      —	     —	          Add	       1994
 * 
 * The important observation is that we don't need to explicitly check for IV, IX, XL, XC, CD, or CM. The comparison automatically handles all six cases.
 * 
 * @dev Let n be the length of the Roman numeral.
 * 
 * Time complexity: O(n) - We iterate through the string exactly once. Each lookup and comparison takes constant time.
 * Space complexity: O(1) - The `values` object contains only seven Roman numeral symbols. The amount of extra memory does not grow with input size.
 * 
 * This is optimal because we must examine each character at least once.
 * @param s 
 * @returns 
 */
function romanToInt(s: string): number {
  const values: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0

  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]]
    const next = values[s[i + 1]]

    if (current < next) {
      result -= current
    } else {
      result += current
    }
  }

  return result
}