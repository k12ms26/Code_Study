#BOJ 15683 감시
#왜 틀리지?
from collections import deque
from copy import deepcopy
import sys
input = sys.stdin.readline

def left(x, y):
    for i in range(y, -1, -1):
        if office[x][i] == 6: break
        visited[x][i] = True

def right(x, y):
    for i in range(y+1, M):
        if office[x][i] == 6: break
        visited[x][i] = True

def up(x, y):
    for i in range(x, -1, -1):
        if office[i][y] == 6: break
        visited[i][y] = True
    
def down(x, y):
    for i in range(x+1, N):
        if office[i][y] == 6: break
        visited[i][y] = True

def findBestWay(dirCnt, x, y):
    if office[x][y] == 1:
        maxIdx = dirCnt.index(max(dirCnt))
        if maxIdx == 0: left(x, y)
        elif maxIdx == 1: right(x, y)
        elif maxIdx == 2: up(x, y)
        elif maxIdx == 3: down(x, y)
        
    elif office[x][y] == 2:
        if dirCnt[0]+dirCnt[1] > dirCnt[2]+dirCnt[3]:
            left(x, y); right(x, y)
        else:
            up(x, y); down(x, y)
            
    elif office[x][y] == 3:
        sums = [dirCnt[1]+dirCnt[2], dirCnt[1]+dirCnt[3], dirCnt[0]+dirCnt[2], dirCnt[0]+dirCnt[3]]
        maxIdx = sums.index(max(sums))
        if maxIdx == 0: #위오
            up(x, y); right(x, y)
        elif maxIdx == 1: #오아래
            down(x, y); right(x, y)
        elif maxIdx == 2: #왼위
            up(x, y); left(x, y)
        elif maxIdx == 3: #왼아래
            down(x, y); left(x, y)
            
    elif office[x][y] == 4:
        dirCntSum = sum(dirCnt)
        sums = [dirCntSum-dirCnt[3], dirCntSum-dirCnt[0], dirCntSum-dirCnt[2], dirCntSum-dirCnt[1]]
        maxIdx = sums.index(max(sums))
        if maxIdx == 0: #왼위오
            up(x, y); left(x, y); right(x, y)
        elif maxIdx == 1: #위오아래
            up(x, y); right(x, y); down(x, y)
        elif maxIdx == 2: #왼오아래
            left(x, y); right(x, y); down(x, y)
        elif maxIdx == 3: #위아래왼
            left(x, y); right(x, y); up(x, y)
            
    elif office[x][y] == 5:
        left(x, y); right(x, y); up(x, y); down(x, y)

def search(start_x, start_y):
    visited[start_x][start_y] = True
    tmp = deepcopy(visited)
    q = deque()
    q.append([start_x, start_y])
    
    ways4 = [0, 0, 0, 0]
    while q:
        [x, y] = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < M and not tmp[nx][ny]:
                if nx == start_x and 0 <= ny < M and office[nx][ny] == 0: #가로일때
                    if ny < start_y: ways4[0] += 1 #왼쪽
                    elif ny > start_y: ways4[1] += 1 #오른쪽
                elif 0 <= nx < N and ny == start_y and office[nx][ny] == 0: #세로일때
                    if nx < start_x: ways4[2] += 1 #위
                    elif nx > start_x: ways4[3] += 1 #아래
                tmp[nx][ny] = True
                q.append([nx, ny])
    findBestWay(ways4, start_x, start_y)
    

N, M = map(int, input().split())
office = []
cctv = []
visited = [[False for i in range(M)] for j in range(N)]
dx = [-1, 1, 0, 0]
dy = [0, 0, 1, -1]

for i in range(N):
    office.append(list(map(int, input().split())))
    for j in range(M):
        if 1 <= office[i][j] <= 5: cctv.append([i, j, office[i][j]])
        elif office[i][j] == 6: visited[i][j] = True

cctv.sort(key = lambda x : x[2])
for [x, y, type] in cctv:
    search(x, y)
    
res = 0
for i in range(N):
    res += visited[i].count(False)
print(res)