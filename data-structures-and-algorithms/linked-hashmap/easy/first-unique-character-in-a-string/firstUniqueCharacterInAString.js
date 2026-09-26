/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  // Use a Map object to store ordered keys and values
  let map = new Map()

  for (let char of s) {
    if (!map.has(char)) {
      map.set(char, 1)
    } else if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    }
  }

  // Extract tuple where number of occurrences of element is equal to 1
  map = Array.from(map).filter(element => element[ 1 ] === 1)
  // To extract a tuple of a specific character and number of occurrences: 
  // map = Array.from(map).filter(element => element[0] === 'l')

  // Using a ternary operation, return the index in `s` of the character stored
  // in the map tuple if the tuple exists, if not, return -1
  return map.length > 0 ? s.indexOf(map[ 0 ][ 0 ]) : -1
}

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  let map = {}

  for (let char of s) {
    map[ char ] ? map[ char ]++ : map[ char ] = 1
  }

  for (let i = 0; i < s.length; i++) {
    if (map[ s[ i ] ] == 1) return i // return its index
  }

  return -1
}
