#BOJ 1939 중량제한
#메모리 초과
import sys

N, M = map(int,sys.stdin.readline().split()) #N: 섬의 개수, M: 연결 개수
graph = [[0 for i in range(N+1)] for j in range(N+1)] #연결 노드 사이의 중량제한
visited = [[False for i in range(N+1)] for j in range(N+1)] #방문 여부

for i in range(M):
    A, B, C = map(int, sys.stdin.readline().split())
    graph[A][B] = C
    graph[B][A] = C

s, e = map(int, sys.stdin.readline().split())

res = []
def DFS(cur, min):
    if cur == e:
        for i in range(1, N+1):
            for j in range(1, N+1):
                visited[i][j] = False
        res.append(min)
    else:
        for i in range(1, M+1):
            if visited[cur][i] == False and visited[i][cur] == False and i != cur and graph[cur][i] != 0:
                minimum = min
                if graph[cur][i] < min: minimum = graph[cur][i]
                visited[cur][i] = True
                visited[i][cur] = True
                DFS(i, minimum)

for i in range(1, M+1):
    if s != i and graph[s][i] != 0:
        DFS(i, graph[s][i])
        visited[s][i] = True
        visited[i][s] = True

print(max(res))