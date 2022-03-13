#BOJ 1753 최단경로
import heapq
import sys
INF = sys.maxsize

V, E = map(int, sys.stdin.readline().split())
K = int(sys.stdin.readline())
graph = [[] for i in range(V+1)]
# visited = [False] * (V+1)
distance = [INF] * (V+1)

for i in range(E) :
    u, v, w = map(int, sys.stdin.readline().split())
    graph[u].append([v,w])

def dijkstra(start) :
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0
    while q:
        print(q)
        dist, now = heapq.heappop(q)
        if distance[now] < dist :
            continue
        for i in graph[now] :
            cost = dist + i[1]
            if cost < distance[i[0]] :
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

# def get_smallest_node() :
#     min_value = INF
#     index = 0
#     for i in range(1, V+1) :
#         if distance[i] < min_value and not visited[i] :
#             min_value = distance[i]
#             index = i
#     return index

# def dijkstra(start) :
#     distance[start] = 0
#     visited[start] = True
#     for i in graph[start] :
#         distance[i[0]] = i[1]
#     for i in range(V-1) :
#         now = get_smallest_node()
#         visited[now] = True
#         for j in graph[now] :
#             cost = distance[now] + j[1]
#             if cost < distance[j[0]] :
#                 distance[j[0]] = cost

dijkstra(K)

for i in range(1, V+1) :
    if distance[i] == INF :
        print("INF")
    else :
        print(distance[i])