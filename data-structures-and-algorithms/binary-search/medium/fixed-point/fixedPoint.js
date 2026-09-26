/**
 * @param {number[]} A
 * @return {number}
 */
function fixedPoint(arr) {
  let l = 0,
    r = arr.length - 1

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2)

    if (arr[ mid ] - mid < 0) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  if (arr[ l ] == l) {
    return l
  } else {
    return -1
  }
}