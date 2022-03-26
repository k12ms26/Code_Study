#BOJ 14500 테트로미노
# https://pacific-ocean.tistory.com/364
#pypy3 사용
import sys
input = sys.stdin.readline
dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]
mfinger = [[[0, 1], [0, 2], [-1, 1]], [[0, 1], [0, 2], [1, 1]], 
[[1, 0], [2, 0], [1, 1]], [[1, 0], [1, -1], [2, 0]]]
n, m = map(int, input().split())
s = []
visit = [[0] * m for i in range(n)]
result = 0
def dfs(x, y, cnt, num):
    global result
    if cnt == 4:
        result = max(result, num)
        return
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < n and 0 <= ny < m and visit[nx][ny] == 0:
            visit[nx][ny] = 1
            dfs(nx, ny, cnt + 1, num + s[nx][ny])
            visit[nx][ny] = 0
            
def middlefinger(x, y):
    global result
    for i in mfinger:
        try:
            num = s[x][y] + s[x + i[0][0]][y + i[0][1]] + s[x + i[1][0]][y + i[1][1]] + s[x + i[2][0]][y + i[2][1]]
        except:
            num = 0
        result = max(result, num)
        
for i in range(n):
    s.append(list(map(int, input().split())))
result = 0
for i in range(n):
    for j in range(m):
        visit[i][j] = 1
        dfs(i, j, 1, s[i][j])
        visit[i][j] = 0
        middlefinger(i, j) #가운데 솟아 있는 거 처리
print(result)
# from collections import deque
# import sys
# input = sys.stdin.readline

# def bfs(a, b):
#     q = deque()
#     q.append([a, b])
#     now = [[a, b, arr[a][b]]]
#     maximum_tmp = 0
#     visited = [[False for i in range(M)] for i in range(N)]
#     while q:
#         print(q)
#         if len(now) >= 4:
#             now = sorted(now, key=lambda n: n[2], reverse=True)
#             nowSum = 0
#             for nt in now[:4]:
#                 visited[nt[0]][nt[1]] = True
#                 nowSum += nt[2]
#             maximum_tmp = max(maximum_tmp, nowSum)
#             while q: q.popleft()
#             q.append([a, b]); now.append([a, b, arr[a][b]])
#             visited[a][b] = False
#         [x, y] = q.popleft()
#         for i in range(4):
#             nx = x + dx[i]
#             ny = y + dy[i]
#             if 0 <= nx < N and 0 <= ny < M and [nx, ny] not in now:
#                 q.append([nx, ny])
#                 now.append([nx, ny, arr[nx][ny]])
#     return maximum_tmp

# N, M = map(int, input().split())
# arr = []
# for i in range(N):
#     arr.append(list(map(int, input().split())))

# dx = [1, -1, 0, 0]
# dy = [0, 0, 1, -1]

# maximum = 0

# for i in range(N):
#     for j in range(M):
#         tmp = bfs(i, j)
#         maximum = max(maximum, tmp)
#         # print(tmp)
                   
# # print(maximum)