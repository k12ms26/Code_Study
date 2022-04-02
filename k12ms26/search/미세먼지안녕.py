#BOJ 17144 미세먼지 안녕! (pypy3)
#한칸씩 옮기는 로직 기억해두기 (https://pacific-ocean.tistory.com/378)
from copy import deepcopy
import sys
input = sys.stdin.readline

def scatter():
    tmp = [[0 for i in range(C)] for j in range(R)] #저장해 뒀다가 나중에 한번에 추가
    tmp[ux][uy] = tmp[lx][ly] = -1
    for i in range(R):
        for j in range(C):
            if arr[i][j] > 0:
                cnt = 0
                sc = arr[i][j] // 5
                for k in range(4):
                    nx = i + upper[k][0]
                    ny = j + upper[k][1]
                    if 0 <= nx < R and 0 <= ny < C and arr[nx][ny] != -1:
                        tmp[nx][ny] += sc
                        cnt += 1
                tmp[i][j] += arr[i][j] - (sc*cnt)
    return tmp

def circulate(x, y, direction):
    sx, sy = x, y-1
    tmp = deepcopy(arr) #한칸씩 옮기기: 기존 arr 복사해놓고 그거 넣어주기
    arr[x][y] = 0
    
    for i in range(4):
        while True:
            nx = x + direction[i][0]
            ny = y + direction[i][1]
            if nx == sx and ny == sy: return
            if 0 <= nx < R and 0 <= ny < C:
                arr[nx][ny] = tmp[x][y]
                x = nx; y = ny
            else: break
                    
R, C, T = map(int, input().split())
arr = []; air_cleaner = [] #공기 청정기 좌표 저장
for i in range(R):
    arr.append(list(map(int, input().split())))
    for j in range(C):
        if arr[i][j] == -1: air_cleaner.append([i, j])

# 항상 1번열에 설치되어 있기 때문에 가능한 순서
upper = [[0, 1], [-1, 0], [0, -1], [1, 0]] #위쪽 공기청정기 순환 방향: 오 -> 위 -> 왼 -> 아래
lower = [[0, 1], [1, 0], [0, -1], [-1, 0]] #아래쪽 공기청정기 순환 방향: 오 -> 아래 -> 왼 -> 위

time = 0
[ux, uy] = air_cleaner[0]
[lx, ly] = air_cleaner[1]
while time < T:
    arr = scatter() #미세먼지 확산
    #공기청정기 작동
    circulate(ux, uy+1, upper) #공기청정기 작동
    circulate(lx, ly+1, lower)
    time += 1

arr[ux][uy] = arr[lx][ly] = 0
res = 0
for i in range(R):
    res += sum(arr[i])
print(res)