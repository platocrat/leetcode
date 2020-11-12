class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        return solution(nums, k)

def solution (nums, k):
    if k == 0 or len(nums) < 2: return False
    # window type: fixed-length of size k + 1
    # window data structure: set
    windowElems = set()
    for i in range(k+1):
        if nums[i] in windowElems: return True
        windowElems.add(nums[i])
    for r in range(k+1, len(nums)): # range from k+1 to len(nums) - 1
        windowElems.remove(nums[r-k-1])
        if nums[r] in windowElems: return True
        windowElems.add(nums[r])
    
    return False