class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        floor_index, ceiling_index = 0, len(nums) - 1

        while floor_index <= ceiling_index:
            # Python has automatically handles integer overflow
            guess_index = (floor_index + ceiling_index) // 2

            if nums[guess_index] == target:
                return guess_index
            if target < nums[guess_index]:
                # shift `ceiling_index` left by 1
                ceiling_index = guess_index - 1
            else:
                # shift `floor_index` right by 1
                floor_index = guess_index + 1

        return floor_index
