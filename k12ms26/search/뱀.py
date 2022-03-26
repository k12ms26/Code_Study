#BOJ 3190 뱀
#브루트 포스?
import sys
input = sys.stdin.readline

def crush(): #몸에 부딪혔는지 확인
    now_x, now_y = history[-1]
    if len(history) == 1: return False
    for i in range(len(history)-2, len(history)-2-snake, -1):
        his_x, his_y = history[i]
        if now_x == his_x and now_y == his_y: return True #몸에 부딪히면
    
    return False

N = int(input())
K = int(input())
visited = [[0 for i in range(N+1)] for i in range(N+1)]
for i in range(K):
    x, y = map(int, input().split(' '))
    visited[x][y] = 1

L = int(input())
direction = []
for i in range(L):
    direction.append(list(input().split()))

snake = 1 #뱀의 길이
history = [[1, 1]] #다녀간 흔적 (뱀의 몸 계산용)

x = 1; y = 1 #현재 좌표
time = 0 #현재 시간

dx = [0, 1, 0, -1] #시계 방향 순
dy = [1, 0, -1, 0]
curIdx = 0 #현재 방향

while True:
    if x <= 0 or x > N or y <= 0 or y > N or crush(): #위치를 벗어나거나 몸을 부딪히면 break하도록
        break
    
    if len(direction) > 0:
        if int(direction[0][0]) == time: #현재 시간과 같으면 명령어 꺼내기
            [X, C] = direction.pop(0)
            if C == 'L':
                curIdx -= 1
                if curIdx == -1: curIdx = 3
            elif C == 'D':
                curIdx += 1
                if curIdx == 4: curIdx = 0
    
    if visited[x][y] == 1: #사과를 먹으면
        snake += 1
        visited[x][y] = 0
    
    x += dx[curIdx]; y += dy[curIdx]
    time += 1
    history.append([x, y])
    
print(time)