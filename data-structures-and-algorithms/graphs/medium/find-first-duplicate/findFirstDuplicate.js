/**
 * @param {Number[]} numbers
 * @return {Number}
 */
function findDuplicate1(numbers) {

  // Because we know there is exactly one duplicated element in the array,
  // we know in a sorted array any duplicate will be appear adjacent to its 
  // first occurrence, so we should return the duplicate as soon as its found.
  numbers.sort() // sort the array -- O(nlogn) time

  for (let i in numbers) {
    if (numbers[ i ] == numbers[ i - 1 ]) {
      return numbers[ i ] // return duplicate
    }
  }
}

/**
 * @param {Number[]} numbers
 * @return {Number}
 */
function findDuplicate2(numbers) {
  // Sets are not constant time! They take up space similar to arrays.
  seen = new Set()

  for (let number in numbers) {
    if (seen.has(numbers[ number ])) {
      return numbers[ number ]
    }

    seen.add(numbers[ number ])
  }
}

/**
 * @param {Number[]} numbers
 * @return {Number}
 */
function findDuplicate3(numbers) {

}