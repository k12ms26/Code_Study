#BOJ 21609 상어 중학교
#https://velog.io/@titiman1013/Python-BOJ-%EC%83%81%EC%96%B4-%EC%A4%91%ED%95%99%EA%B5%9021609
#접근 자체는 계속 비슷하게 하는데 거기서 응용을 더 못하겠는
import sys
from collections import deque

input = sys.stdin.readline
dx, dy = [-1, 1, 0, 0], [0, 0, -1, 1]

def search(tmp_arr, N):
    visited = [[False] * N for _ in range(N)]
    selected_blocks = []
    rainbow_cnt = 0
    start_block_x, start_block_y = -1, -1
    for i in range(N):
        for j in range(N):
            if tmp_arr[i][j] > 0 and visited[i][j] == False: #시작 가능한 블록이면ㅇ 시작
                tmp_selected_blocks = []
                tmp_rainbow_cnt = 0
                rainbows = []
                deq = deque([(i, j)])
                while deq:
                    x, y = deq.popleft()
                    for k in range(4):
                        nx = x + dx[k]
                        ny = y + dy[k]
                        if 0 <= nx < N and 0 <= ny < N:
                            if (tmp_arr[nx][ny] == 0 and (nx, ny) not in rainbows) or (tmp_arr[nx][ny] == tmp_arr[i][j] and visited[nx][ny] == False): ##0이거나 같은 색이거나
                                if tmp_arr[nx][ny] == 0:
                                    tmp_rainbow_cnt += 1
                                    rainbows.append((nx, ny))
                                else:
                                    visited[nx][ny] = True
                                deq.append((nx, ny))
                                tmp_selected_blocks.append((nx, ny))
                
                if len(tmp_selected_blocks) < len(selected_blocks):
                    continue
                elif len(tmp_selected_blocks) == len(selected_blocks): #기준 가리기 -> 동점일 경우
                    if tmp_rainbow_cnt < rainbow_cnt:
                        continue
                    elif tmp_rainbow_cnt == rainbow_cnt: #무지개 블록 개수로 가리기
                        if i < start_block_x:
                            continue
                        elif i == start_block_x: #행의 번호가 가장 작은 번호
                            if j < start_block_y: #열의 번호가 가장 작은 번호
                                continue
                rainbow_cnt = tmp_rainbow_cnt
                start_block_x, start_block_y = i, j
                selected_blocks = tmp_selected_blocks
    
    return selected_blocks, len(selected_blocks)


def delete_block(tmp_arr, blocks):
    for x, y in blocks:
        tmp_arr[x][y] = -5 #여기선 -5로 없애네
    return tmp_arr


def gravity(tmp_arr):
    for j in range(N-1, -1, -1):
        for i in range(N):
            if tmp_arr[j][i] == -5:
                move_x, move_y = i, j
                while 0 <= move_y - 1 and tmp_arr[move_y - 1][move_x] != -1: #-1 바로 위 행 인덱스 찾기
                    move_y -= 1
                    if tmp_arr[move_y][move_x] >= 0: break
                if move_y != j: #현재 행이 아니면
                    tmp_arr[j][i] = tmp_arr[move_y][i] #바꿔주기 (중력 기능)
                    tmp_arr[move_y][i] = -5
    return tmp_arr


def rotate(tmp_arr):
    for _ in range(3):
        tmp_arr = [list(elem) for elem in zip(*tmp_arr[::-1])] #반시계 90도 회전
    return tmp_arr
    
N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]

answer = 0
while True:
    selected_blocks, selected_length = search(arr, N)
    if selected_length < 2: break
    answer += selected_length ** 2
    arr = gravity(rotate(gravity(delete_block(arr, selected_blocks)))) #덜덜
    
print(answer)
# from collections import deque
# import sys
# import copy
# input = sys.stdin.readline

# def bfs(i, j, tmp):
#     #i, j는 스타트
#     visited = [[False for i in range(N)] for j in range(N)]
#     visited[i][j] = True
#     path = 1
    
#     nowColor = arr[i][j]
#     tmp[i][j] = -2
#     q = deque()
#     q.append([i, j])
    
#     while q:
#         x, y = q.popleft()
#         for k in range(4):
#             nx = x + dx[k]
#             ny = y + dy[k]
#             if 0 <= nx < N and 0 <= ny < N:
#                 if nowColor == 0 and arr[nx][ny] > 0: nowColor = arr[nx][ny]
#                 if not visited[nx][ny] and (arr[nx][ny] == 0 or nowColor == arr[nx][ny]):
#                     q.append([nx, ny])
#                     visited[nx][ny] = True
#                     tmp[nx][ny] = -2 #플레이 끝난 거 처리
#                     path += 1

#     return tmp, path

# def gravity():
#     #중력 작용하기
#     for i in range(N):
#         for j in range(N):
#             if arr[j][i] <= 0: continue
#             idx = findMinusOne(i)
#             for k in range(idx-1, j, -1):
#                 if arr[k][i] == -2:
#                     print(arr)
#                     print(k, i)
#                     arr[k][i] = arr[k][j]
#                     arr[k][j] = -2
#                     break
#     # if(score == 64): print(arr)

# def findMinusOne(now):
#     idx = N
#     for i in range(N):
#         if arr[i][now] == -1:
#             idx = i
#             break
#     if idx == N: return N-1
#     else: return idx

# N, M = map(int, input().split(' '))
# arr = []
# for i in range(N):
#     arr.append(list(map(int, input().split(' '))))

# dx = [-1, 1, 0, 0]
# dy = [0, 0, -1, 1]

# score = 0
# while True:
#     s0 = 0; s1 = 0
#     groupCnt = 0
#     tmp_arr = []
#     for x in range(N):
#         for y in range(N):
#             if 0 <= arr[x][y] <= M:
#                 temp = copy.deepcopy(arr)
#                 tmp, gc = bfs(x, y, temp)
#                 if groupCnt < gc:
#                     groupCnt = gc
#                     tmp_arr = tmp
#                     print(tmp)
#     arr = tmp_arr
#     if groupCnt == 0: break
#     # 점수 획득
#     score += groupCnt ** 2
#     #중력작용 -> 90도 반시계 회전 -> 중력작용
#     gravity()
#     # rotate()
#     # gravity()