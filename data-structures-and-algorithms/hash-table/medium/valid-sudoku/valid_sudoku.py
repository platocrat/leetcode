class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        return solution(board)

def solution(board):
    used = set()
    for i in range(9):
        for j in range(9):
            val = board[i][j]
            if val == '.': continue
            # There is value val at cell (i, j)
            """
            if we have already seen 'val' at row i, at column j,
            or at subsquare of cell (i, j), return False
            """
            rowStr = 'row_' + str(i) + '_' + str(val)
            if rowStr in used: return False
            used.add(rowStr)
            colStr = 'col_' + str(j) + '_' + str(val)
            if colStr in used: return False
            subStr = 'sub_' + str(i//3) + '_' + str(j//3) + '_' + str(val)
            if subStr in used: return False
            used.add(subStr)
    return True