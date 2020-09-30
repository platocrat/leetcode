/**
 * @dev
 * LeetCode Reference:
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 *
 * Time complexity:
 *
 * Space complexity:
 *
 * Difficulty:        Medium
 */
// ---------------------------------------------------------------------------
/**
 * @dev  
 * ATTEMPT #1 
 * 
 * Date: 09/30/20
 * 
 * Completed (T/F):  F
 */
const length_of_longest_substring = function (str, k) {
  // keep track of...
  // frequency of chars with hashMap-- charFreqMap
  let charFreqMap = {},
    // window start for resizing window
    wStart = 0,
    // maxLength == length of longest substring
    substring = str,
    numReplacements = 0

  // run through and process each element in str
  for (let wEnd = 0; wEnd < str.length; wEnd++) {
    // track current element (right-most)
    rightChar = str[ wEnd ]

    // if character is not yet in hashMap, add it and increment its count by 1
    if (!(rightChar in charFreqMap)) {
      charFreqMap[ rightChar ] = 0
    }

    charFreqMap[ right ] += 1

    // since keeping track of repeating chars...
    while (numReplacements < k) {
      // if current element is diff than last, try replacing it with the previous char    
      if (rightChar != str[ wEnd - 1 ]) {
        substring[ wEnd ] = substring[ wEnd - 1 ] // replacement

        // increments numReplacements by 1
        numReplacements += 1
      }

      // [~19:00] brainfart because haven't finished outlining rest of algorithm
      // [~19:04] realized that not completely outlining the problem was where my problem was
    }

  }



  return -1;
};

// ---------------------------------------------------------------------------
/**
 * @dev
 * ATTEMPT #2
 *
 * Date:
 *
 * Completed (T/F):
 */