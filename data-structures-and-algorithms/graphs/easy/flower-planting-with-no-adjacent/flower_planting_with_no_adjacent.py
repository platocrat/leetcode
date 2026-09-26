from collections import deque


class Solution:
    def gardenNoAdj(self, N: int, paths: List[List[int]]) -> List[int]:
        G = [[] for node in range(N)]
        for p1, p2 in paths:
            G[p1-1].append(p2-1)
            G[p2-1].append(p1-1)

        color = [0 for node in range(N)]  # 0 unassigned
        for node in range(N):
            if color[node] == 0:
                # color the connected component of node (COMMENT ONE OUT)
                bfs(G, node, color)
                # dfs(G, node, color)

        return color


def bfs(G, start, color):
    Q = deque()
    Q.append(start)
    while Q:
        node = Q.popleft()
        # assign a color to node
        nbrColors = {color[nbr] for nbr in G[node]}
        freeColors = {col for col in [1, 2, 3, 4] if col not in nbrColors}
        color[node] = freeColors.pop()
        for nbr in G[node]:
            if color[nbr] == 0:
                color[nbr] = -1
                Q.append(nbr)


def dfs(G, node, color):
    usedColors = {color[nbr] for nbr in G[node]}
    freeColors = {col for col in {1, 2, 3, 4} if col not in usedColors}
    color[node] = freeColors.pop()
    for nbr in G[node]:
        if color[nbr] == -1:
            dfs(nbr)
