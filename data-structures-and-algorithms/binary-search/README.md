# Binary search (algorithm)
> The binary search algorithm is so well known and important in the industry, YOU CANNOT MESS THIS ALGORITHM UP

## Interview Cake (explanation)
**A binary search algorithm finds an item in a _sorted array_ in _O(log(n))_ time.**

A brute force search would walk through the whole array, taking _O(n)_ (linear) time in the worst case.

Let's say we have a sorted array of numbers. To find a number with a binary search, we:
1. **Start with the middle number: is it bigger or smaller than our target?** Since the array is sorted, this tells us if the target would be in the _left_ half or _right_ half of our array. If the middle number is _less than_ our target, we know that the target is in the _right_ half, and if it's _greater than_, we know the target is in the _left_ half.
2. **We've effectively divided the problem in half.** We can "rule out" the whole half of the array that we know doesn't contain the target number.
3. **Repeat the same approach (of starting in the middle) on the new half-size problem.** Then do it again, and again, until we either find the number or "rule out" the whole set.

We can do this recursively, or iteratively. Here's an iterative version:
```js
/**
 * @dev See if target appears in nums
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function binarySearch(target, nums) {
  // We think of `floorIndex` and `ceilingIndex` as "walls" around the possible
  // positions of our target, so by -1 below we mean to start our wall "to the
  // left" of the 0th index (we *don't* mean "the last index").
  let floorIndex = -1,
      ceilingIndex = nums.length

  // If there isn't at least 1 index between floor and ceiling, we've run out 
  // of guesses and the number must not be present.
  while (floorIndex + 1 < ceilingIndex) {

    // Find the index ~halfway between the floor and ceiling.
    // We have to round down to avoid to get a whole integer.
    let distance = ceiling - floorIndex
    let halfDistance = Math.floor(distance / 2)
    // adding -1 `floorIndex` brings `guessIndex` down to the value we want
    let guessIndex = floorIndex + halfDistance
    
    let guessValue = nums[guessIndex]

    if (guessValue === target) return true
    if (guessValue > target) {
      ceilingIndex = guessIndex         // move ceiling to the left
    } else {
      floorIndex = guessIndex
    }
  }

  return false
}
```


## First Bad Commit (explanation)
### When to use Binary Search
* **Variables contained in the data structure are consistently linear, i.e. _in a sorted ascending order_**
* Time complexity is faster than O(n)
  * Hashing, constant O(1) time
  * Sorting
  * Determine upper bound quickly to rule out algorithms

#### Algorithm
```python
class Solution:
  def firstBadVersion(self, n):
    l, r = 0, n
    
    while l <= r:
      mid = (l + r) // 2

      if not isBadVersion(mid):
        1 = mid + 1

      else:
        r = mid - 1
    return 1
```
* Note that on the 5th iteration, left pointer gets placed on the right, and right
pointer goes to the left.

### Classical Binary Search
Find any position of a target number in a sorted array. Return -1 if target does not exist.

##### Binary Search - Attempt 1
```python
def binary_search(nums, target):
  l, r = 0, len (nums) - 1
  while l <= r:
    mid = (l + r) // 2  # integer overflow, take smaller num and subtract it from bigger num
    if nums[mid] == target:
      return mid
    if target > nums[mid]:
      1 = mid  # infinite loop
    else:
      r = mid

  return -1
```

##### Attempt 2
```python
def binary_search(nums, target):
  l, r = 0, len (nums) - 1
  while l <= r:
    mid = (l + r) // 2
    if nums[mid] == target:
      return mid
    if target > nums[mid]:
      1 = mid + 1  
    else:
      r = mid - 1
  return -1
```

#### Classical Binary Search Algorithm
```js
function binarySearch(nums, target) {
  let floorIndex = 0, // left wall
  ceilingIndex = nums.length - 1 // right wall

  while (floorIndex + 1 < ceilingIndex) {
    let guessIndex = parseInt((floorIndex + ceilingIndex) / 2)

    if (nums[guessIndex] == target) return guessIndex // OR return true 
    if (nums[guessIndex] > target) {
      ceilingIndex = guessIndex
    } else {
      floorIndex = guessIndex
    }
  }

  if (nums[floorIndex] == target) return floorIndex
  if (nums[ceilingIndex] == target) return ceilingIndex
}
```

### Find Closest Element to Target in Sorted Array
Find an alement that is closest to a given target number

##### Example 2:
Input: arr = [1, 1, 3, 6, 7], target = 4
Output: 2 # index for 3

What to do when target isn't in array?

##### Solution?
Add at the very end, after the algorithm is done, then perform post-processing, a check to see what the data structure contains

```python
def find_nearest(nums, target):
  l, r = 0, len (nums) - 1
  while l <= r:
    mid = (l + r) // 2
    if nums[mid] == target:
      return mid
    if target > nums[mid]:
      1 = mid + 1  
    else:
      r = mid - 1
  
  # Post-processing
  if abs(target - nums[l]) <= abs(target - nums[r]):
    return 1
  else: 
    return r
```

**This happens with a lot of algorithms. Just let the binary search algorithm do it's job, then perform check**

However, we still don't account that left and right at the very end, so...
left will be out of bounds.

##### Updated version
```python
def find_nearest(nums, target):
  l, 
  r = 0, 
  len(nums) - 1
  while l + 1 < r:
    mid = (l + r) // 2
    if nums[mid] < target:
      1 = mid
    else:
      r = mid

    # Post-processing
    if abs(target - nums[l]) <= abs(target - nums[r]):
      return 1
    else: 
      return r
```

##### NOTE
Left and right WILL overlap with 1 element


### Find First Position of Element in Sorted Array
```python
def get_first(nums, target):
    floor_index = - 1
    ceiling_index = len(nums)

    while floor_index + 1 < ceiling_index:
        mid
        if nums[mid] == target:
            ceiling_index = mid
        elif nums[mid] < target:
           1 = mid
        else:
           r = mid

    # Post-processing
    if nums[l] == target: return l
    if nums[r] == target: return r
    return -1
```

### Find Last Position of Element in Sorted Array
```python
def get_first(nums, target):

    while l + 1 < r:
        mid
        if nums[mid] == target:
            ceiling_index = mid
        elif nums[mid] < target:
           floor_index = mid
        else:
           r = mid

    # Post-processing
    if nums[r] == target: return r
    if nums[l] == target: return l
    return -1
```
A lot of people forget to think through how post-processing is affected with different problems. Make sure to run through a quick example during the interview to convince your interviewer!



### InterviewCake's Iterative Version of Binary Search
JavaScript implementation:
```javascript
function binarySearch(target, nums) {
  // See if target appears in nums

  // We think of `floorIndex` and `ceilingIndex` as "walls" around
  // the possible positions of our target, so by -1 below we mean
  // to the start our floor wall "to the left" of the 0th index
  // (we *don't* mean "the last index")
  floorIndex = -1
  ceilingIndex = nums.length

  // If there isn't at least 1 index between floor and ceiling,
  // we've run out of guesses and the target must not be present
  while (floorIndex + 1 < ceilingIndex) {
    
    // Find the index ~halfway between the floor and ceiling
    // We have to round down, to avoid getting a "half index"
    const distance = ceilingIndex - floorIndex
    const halfDistance = Math.floor(distance / 2)
    const guessIndex = floorIndex + halfDistance

    const guessValue = nums[guessIndex]

    if (guessValue == target) return True
    if (guessValue < target) {
      // Target is to the left, move ceiling to the left
      ceilingIndex = guessIndex 
    } else {
      // Target is to the right, move floor to the right
      floorIndex = guessIndex
    }
  }

  return false
}
```


Python implementation:
```python
def binary_search(target, nums):
    """See if target appears in nums"""

    # We think of `floor_index` and `ceiling_index` as "walls" around
    # the possible positions of our target, so by -1 below we mean
    # to start our wall "to the left" of the 0th index
    # (we *don't* mean "the last index")
    floor_index = -1
    ceiling_index = len(nums)

    # If there isn't at least 1 index between floor and ceiling,
    # we've run our of guesses and the number must not be present
    while floor_index + 1 < ceiling_index:

        # Find the index ~halfway between the floor and ceiling
        # We use integer division, so we'll never get "half index"
        distance = ceiling_index - floor_index
        half_distance = distance // 2
        guess_index = floor_index + half_distance

        guess_value = nums[guess_index]

        if guess_value == target:
            return True

        if guess_value > target:
            # Target is to the left, so move ceiling to the left
            ceiling_index = guess_index
        
        else guess_value < target:
            # Target is to the right, so move floor to the right
            floor_index = guess_index
          
    return False
```