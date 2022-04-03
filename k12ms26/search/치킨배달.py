#BOJ 15686 치킨 배달
import sys
from itertools import combinations
INF = sys.maxsize

N, M = map(int, sys.stdin.readline().split())
cities = [list(map(int, sys.stdin.readline().split())) for i in range(N)]
visited = [[-1]*(N) for i in range(N)]
house = []; chicken = []
distance = INF
for i in range(N):
    for j in range(N):
        if cities[i][j] == 1 : house.append([i,j])
        if cities[i][j] == 2 : chicken.append([i,j])

for c in combinations(chicken, M):
    res = 0
    for h in house:
        res += min([abs(h[0]-i[0])+abs(h[1]-i[1]) for i in c]) #각각 집마다 모든 치킨집들에 대한 치킨 거리들
        if res >= distance: break
    if res < distance : distance = res
print(distance)

# import sys
# input = sys.stdin.readline

# N, M = map(int, input().split())
# cities = []
# houses = []; chicken = []
# for i in range(N):
#     cities.append(list(map(int, input().split())))
#     for j in range(N):
#         if cities[i][j] == 1: houses.append([i, j])
#         elif cities[i][j] == 2: chicken.append([i, j])

# res = []
# idx = 0
# for [chicken_x, chicken_y] in chicken:
#     now = []
#     for [house_x, house_y] in houses:
#         now.append((abs(house_x-chicken_x) + abs(house_y-chicken_y)))
#     res.append(now)
#     idx += 1

# res = sorted(res, key=lambda x: sum(x))[:M]
# minimums = 0
# for i in range(len(houses)):
#     nowArr = []
#     for j in range(M):
#         nowArr.append(res[j][i])
#     minimums += min(nowArr)
# print(minimums)