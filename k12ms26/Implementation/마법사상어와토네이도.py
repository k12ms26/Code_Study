#BOJ 20057 마법사 상어와 토네이도
#https://developer-ellen.tistory.com/73
#다시
import sys
input = sys.stdin.readline
n = int(input())
dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]

board = [list(map(int, input().split())) for _ in range(n)]

b_dict = {}

x, y = n // 2, n // 2
s = 1
count = 0
d = 0
go = []
for i in range(1, n):
    go.append(i)
    go.append(i)
go.append(n)
g_idx = 0
b_dict[1] = [x, y, 0]
sand = 0

#행, 열에 맞춰서 흩날리도록 선언
left = [[0,0,2,0,0],[0,10,7,1,0],[5,-1,0,0,0],[0,10,7,1,0],[0,0,2,0,0]]
right = [[0,0,2,0,0],[0,1,7,10,0],[0,0,0,-1,5],[0,1,7,10,0],[0,0,2,0,0]]
up = [[0,0,5,0,0],[0,10,-1,10,0],[2,7,0,7,2],[0,1,0,1,0],[0,0,0,0,0]]
down = [[0,0,0,0,0],[0,1,0,1,0],[2,7,0,7,2],[0,10,-1,10,0],[0,0,5,0,0]]

def moving(x, y, a, plus):
    global sand
    a_x, a_y = -1, -1
    remain = 0
    for i in range(-2, 3):
        for j in range(-2, 3):
            if plus[i+2][j+2] == 0 or plus[i+2][j+2] == -1:
                if plus[i+2][j+2] == -1:
                    a_x, a_y = i+2, j+2
                continue
            temp = int(a*(plus[i+2][j+2]/100))
            remain += temp
            if x+i < 0 or x+i >=n or y+j < 0 or y+j >= n:
                sand += temp
            else:
                board[x+i][y+j] += temp
    if 0 <= x+a_x-2 < n and 0<= y+a_y-2 < n:
        board[x+a_x-2][y+a_y-2] += (a-remain)
    else:
        sand += (a-remain)

for i in range(1, n*n):
    nx = x + dx[d]
    ny = y + dy[d]
    count += 1
    x, y = nx, ny
    if count >= go[g_idx]: #방향 바꾸는지 여부
        d = (d+1) % 4
        b_dict[i + 1] = [nx, ny, d]
        g_idx += 1
        count = 0
    else:
        b_dict[i+1] = [nx, ny, d]

for i in range(1, n*n):
    x, y, d = b_dict[i]
    nx, ny, nd = b_dict[i+1]
    if d == 0:
        moving(nx, ny, board[nx][ny],left)
    elif d == 1:
        moving(nx, ny, board[nx][ny], down)
    elif d == 2:
        moving(nx, ny, board[nx][ny], right)
    else:
        moving(nx, ny, board[nx][ny], up)
    board[nx][ny] = 0

print(sand)

# import sys
# import math

# def search(x, y, arr):
#     org = A[x][y]
#     sl = 0; r = 0
#     for i in range(10):
#         [a, b, rate] = arr[i]
#         da = x + a
#         db = y + b
#         s = math.trunc(org * rate)
#         if i == 9:
#             if 0 < da <= N and 0 < db <= N:
#                 A[da][db] += (org - r)
#             else:
#                 sl += (org - r)
#             org = 0
#             break
        
#         if 0 < da <= N and 0 < db <= N:
#             A[da][db] += s
#             r += s
#         else:
#             sl += s
    
#     return sl

# def left(x, y):
#     sand_left = 0 #격자밖으로 나간 모래
#     nearby = [[-1, 0, 0.01], [1, 0, 0.01], [-1, -1, 0.07], [1, -1, 0.07],
#               [-2, -1, 0.02], [2, -1, 0.02], [-1, -2, 0.1], [1, -2, 0.1],
#               [0, -3, 0.05], [0, -2, -1]]
    
#     sand_left += search(x, y, nearby)
#     return sand_left
        
# def down(x, y):
#     sand_left = 0
#     nearby = [[0, -1, 0.01], [0, 1, 0.01], [1, -1, 0.07], [1, 1, 0.07],
#               [1, -2, 0.02], [1, 2, 0.02], [2, -1, 0.1], [2, 1, 0.1],
#               [3, 0, 0.05], [2, 0, -1]]
    
#     sand_left += search(x, y, nearby)
#     return sand_left
    
# def right(x, y):
#     sand_left = 0
#     nearby = [[-1, 0, 0.01], [1, 0, 0.01], [-1, 1, 0.07], [1, 1, 0.07],
#               [-2, 1, 0.02], [2, 1, 0.02], [-1, 2, 0.1], [1, 2, 0.1],
#               [0, 3, 0.05], [0, 2, -1]]
    
#     sand_left += search(x, y, nearby)
#     return sand_left
    
# def up(x, y):
#     sand_left = 0
#     nearby = [[0, -1, 0.01], [0, 1, 0.01], [-1, -1, 0.07], [-1, 1, 0.07],
#               [-1, -2, 0.02], [-1, 2, 0.02], [-2, -1, 0.1], [-2, 1, 0.1],
#               [-3, 0, 0.05], [-2, 0, -1]]
    
#     sand_left += search(x, y, nearby)
#     return sand_left

# N = int(sys.stdin.readline())
# A = [[0]*N]

# for i in range(1, N+1):
#     A.append(list(map(int, sys.stdin.readline().split(' '))))
#     A[i].append(0)

# moveCnt = 1 #토네이도 칸 이동 수
# dx = [0, 1, 0, -1] #왼, 아래, 오, 위
# dy = [-1, 0, 1, 0]

# mid = math.ceil(N/2)
# start = [mid, mid, 0] #시작점과 dx, dy 현재

# queue = [start]
# visited = [[False for i in range(N+1)] for j in range(N+1)]

# sand = 0
# moveNowCnt = 1 #토네이도 칸 현재 이동 수
# while queue:
#     [x, y, cur] = queue.pop()
#     nx = x + dx[cur]
#     ny = y + dy[cur]
#     if 0 < nx <= N and 0 < ny <= N and not visited[nx][ny]:
#         if cur == 0:
#             sand += left(nx, ny)
#             print(sand, x, y)
#         elif cur == 1: sand += down(nx, ny)
#         elif cur == 2: sand += right(nx, ny)
#         elif cur == 3: sand += up(nx, ny)
#         visited[nx][ny] = True
#         if moveNowCnt == moveCnt:
#             if cur == 1 or cur == 3: moveCnt += 1
#             moveNowCnt = 1
#             cur += 1
#         else: moveNowCnt += 1
#         if cur == 4: cur = 0
#         queue.append([nx, ny, cur])

# print(sand)