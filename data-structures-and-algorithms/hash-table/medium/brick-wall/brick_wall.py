class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        return solution(wall)

def solution(wall):
    line2GapCount = defaultdict(int)
    for row in wall:
        line = 0
        for i in range(len(row)-1): # skip last brick
            brickWidth = row[i]
            line += brickWidth
            line2GapCount[line] += 1

    # find max count
    maxCount = max(line2GapCount[line] for line in line2GapCount)
    return len(wall) - maxCount

