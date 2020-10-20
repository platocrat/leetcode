class Solution(object):
    """
    Return `True` or `False` whether a given set of `N` people can be split into
    two groups of any size while keeping people in the given `dislikes` adjacency
    list in separate groups.
    """
    def possibleBipartition(self, N, dislikes):
        graph = collections.defaultdict(list)

        for u, v in dislikes:
            graph[u].append(v)
            graph[v].append(u)

        color = {}

        def dfs(node, c = 0):
            if node in color:
                return color[node] == c

            color[node] = c

            return all(dfs(neighbor, c ^ 1) for neighbor in graph[node])

        return all(dfs(node)
            for node in range(1, N+1)
            if node not in color)
          