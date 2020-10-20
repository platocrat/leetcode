class Solution:
    # Where `dislikes` is the adjacency list of nodes.
    def possibleBipartition(self, N: int, dislikes: List[List[int]]) -> bool:
        # `G` is the graph.
        # Here, we represent the graph as an adjacency list, where for each
        # given `node` in the adjacency list `dislikes` which contains `n`
        # nodes, we initialize a graph as an empty list of lists.
        G = [[] for node in range(N)]

        for a, b in dislikes:
            G[a-1].append(b-1)  # insert value of `b`-1 at index prior to `a`.
            G[b-1].append(a-1)  # insert value of `a`-1 at index prior to `b`.

        # Initialize an adjacency list of 0s and assign it to `colors`.
        colors = [0 for node in range(N)]  # e.g. 1 red, 2 blue, 0 unassigned.

        # Run one BFS if we can properly split everyone into two groups.
        for node in range(N):
            if colors[node] == 0:
                canColorCC = bfs(G, node, colors)

                if not canColorCC:
                    return False

        return True


def bfs(G, start, _colors):
    """
    G: graph as an adjacency list
    start: starting node
    colors: like or dislike

    Tries to colors the graph (`G`) if it can, otherwise, returns `False`
    """
    Q = deque()
    Q.append(start)
    _colors[start] = 1

    while Q:
        node = Q.popleft()

        # Need to split the graph into 2 groups so that there are NO nodes in
        # between them.
        # For node's neighbor in graph `G`...
        for neighbor in G[node]:
            # If the colors of that neighbor in our `colors` adjacency list is
            # equal to 0.
            if _colors[neighbor] == 0:
                # In the `colors` adjacency list, set that neighbor's colors equal
                # to 2 if that 
                _colors[neighbor] = 2 if _colors[node] == 1 else 1
                Q.append(neighbor)

            # Return `False` if the colors of this node's neighbor is equal to
            # the colors of the node itself, i.e. there is a conflict because
            # node's of the same colors CANNOT be adjacent in the graph.
            elif _colors[neighbor] == _colors[node]:
                return False

    return True
