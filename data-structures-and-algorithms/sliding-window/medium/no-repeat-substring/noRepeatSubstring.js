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
