#BOJ 16236 아기 상어
#https://pacific-ocean.tistory.com/377
#좌표 내에서 어떻게 가까운 거리 따질 건지 감이 안왔음
from collections import deque
import sys

def bfs(i, j):
    visit = [[0] * n for i in range(n)]
    visit[i][j] = 1
    eat = []
    dist = [[0] * n for i in range(n)]
    q = deque()
    q.append([i, j])
    while q:
        x, y = q.popleft()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0 <= nx < n and 0 <= ny < n and visit[nx][ny] == 0:
                if s[nx][ny] <= s[i][j] or s[nx][ny] == 0:
                    q.append([nx, ny])
                    visit[nx][ny] = 1
                    dist[nx][ny] = dist[x][y] + 1
                if s[nx][ny] < s[i][j] and s[nx][ny] != 0:
                    eat.append([nx, ny, dist[nx][ny]])
    if not eat:
        return -1, -1, -1
    eat.sort(key = lambda x : (x[2], x[0], x[1])) #거리, y, x 좌표 순으로 소팅
    return eat[0][0], eat[0][1], eat[0][2]

dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]
input = sys.stdin.readline
n = int(input())
s = []
for i in range(n):
    a = list(map(int, input().split()))
    s.append(a)
    for j in range(n):
        if a[j] == 9:
            s[i][j] = 2
            start = [i, j]
exp = 0
cnt = 0
while True:
    i, j = start[0], start[1]
    ex, ey, dist = bfs(i, j) #가장 첫번째에 있는 물고기 가져오기
    if ex == -1: break
    s[ex][ey] = s[i][j]
    s[i][j] = 0
    start = [ex, ey] #물고기를 먹은 지점으로
    exp += 1
    if exp == s[ex][ey]: #상어의 크기와 같은 수의 물고기를 먹을때마다 크기 증가
        exp = 0
        s[ex][ey] += 1
    cnt += dist
print(cnt)

# from collections import deque
# import sys
# input = sys.stdin.readline

# def getNumZero():
#     #리스트에 아기 상어 위치 말고 다 0이면 끝내기 위함
#     cnt = 0
#     for i in range(N):
#         cnt += space[i].count(0)
    
#     if cnt == N*N-1: return True
#     else: return False

# N = int(input())
# space = []
# queue = deque()
# visited = [[False for i in range(N)] for i in range(N)]

# for i in range(N):
#     space.append(list(map(int, input().split(' '))))
#     if 9 in space[i]:
#         idx = space[i].index(9)
#         queue.append([i, idx]) #아기 상어의 위치 찾기
#         visited[i][idx] = True
    
# baby_shark = 2 #아기 상어의 크기
# baby_shark_xy = queue[0]
# dx = [-1, 0, 1, 0]
# dy = [0, 1, 0, -1]

# time = 0 #이동시간
# while queue:
#     [x, y] = queue.popleft()
#     if getNumZero(): break
#     for i in range(4):
#         nx = x + dx[i]
#         ny = y + dy[i]
#         if 0 <= nx < N and 0 <= ny < N and visited[nx][ny] == False and space[nx][ny] <= baby_shark:
#             if space[nx][ny] < baby_shark:
#                 if space[nx][ny] > 0:
#                     baby_shark += 1
#                     time += abs(nx - baby_shark_xy[0]) + abs(ny - baby_shark_xy[1])
#                     space[nx][ny] = 0
#                     baby_shark_xy = [nx, ny]
#             queue.append([nx, ny])
#             if space[nx][ny] == baby_shark: continue
#             visited[nx][ny] = True

# print(time)