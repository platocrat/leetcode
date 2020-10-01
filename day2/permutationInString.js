/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 
 * @dev
 * LeetCode Reference:
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
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
 * Date: 10/01/20
 *
 * Completed (T/F):  F
 */
function checkInclusion(s1, s2) {
  // an s1 permutation is any resulting uninterrupted scramble of s1

  // turn s1 into hashMap so that we can quickly check if a char in s2 is also in s1 
  //let s1Map = new Map(s1) // 18:36 stuck on the right data struc to use to query s1 quickly chars

  // we can use .includes() string method 19:20


  // how to keep track of adjacency 9:02

  // run through s2 and process each element
  for (let end = 0; end < s2.length; end++) {
    rightChar = s2[ rightChar ]


    // while processing an element in s2
    // use window to keep track of whether chars in s1 are adjacent

    // if current s2 char is in s1 && previous s2 char is in s1, then this is 11:04
    if (s1.includes(s2[ rightChar ]) && )


    // continuous check that every character in a sequence of s2 is somewhere in s1

    // check if s1 permutation in s2
      // if yes, return true
      // else, return false
  }
}