#BOJ 14889 스타트와 링크
#from itertools import combinations
import sys
input = sys.stdin.readline
INF = sys.maxsize

N = int(input())
S = []
for i in range(N):
    S.append(list(map(int, input().split())))

#시간 초과
# whole = [i for i in range(N)]
# start = list(combinations(whole, N//2))

# min_power = INF
# for start_member in start:
#     start_power = link_power = 0
#     for i in range(N):
#         for j in range(N):
#             if i in start_member and j in start_member:
#                 start_power += (S[i][j] + S[j][i])
#             elif i not in start_member and j not in start_member:
#                 link_power += (S[i][j] + S[j][i])
#     min_power = min(min_power, abs(start_power-link_power))

# print(min_power//2)

#DFS로 경우의 수 조합
#https://developer-ellen.tistory.com/50?category=879172
def dfs(depth, idx):
    global min_diff
    if depth == N//2:
        power1, power2 = 0, 0
        for i in range(N):
            for j in range(N):
                if visited[i] and visited[j]:
                    power1 += S[i][j]
                elif not visited[i] and not visited[j]:
                    power2 += S[i][j]
        min_diff = min(min_diff, abs(power1-power2))
        return

    for i in range(idx, N):
        if not visited[i]:
            visited[i] = True
            dfs(depth+1, i+1)
            visited[i] = False

visited = [False for _ in range(N)]
min_diff = INF
dfs(0, 0)
print(min_diff)