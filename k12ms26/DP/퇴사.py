#BOJ 14501 퇴사
#https://steadily-worked.tistory.com/635
import sys
input = sys.stdin.readline

n = int(input())

t_list = []
p_list = []
for i in range(n):
    t, p = map(int, input().split())
    t_list.append(t)
    p_list.append(p)

dp = [0 for i in range(30)]

for i in range(n):
    if dp[i] > dp[i + 1]: #현재 받게 될 금액이 다음날 받게 될 금액보다 크다면
        dp[i+1] = dp[i] #다음날 받게 되는 금액 또한 현재 받는 금액으로 바꿔준다
    if dp[i+t_list[i]] < dp[i] + p_list[i]: #dp[i+t_list[i]]: 현재 금액으로 i일 뒤에 받게 될 금액, dp[i]+p_list[i]: i일 뒤에 받게 될 금액
        dp[i+t_list[i]] = dp[i] + p_list[i] #만약 i일 뒤에 받게 될 금액이 더 크다면 더 큰값을 반영

print(dp[n])

# for i in range(N):
#     total = 0; j = i 
#     result = []
#     while True:
#         if j >= N: break
#         [T, C] = counsel[j]
#         if j+T <= N:
#             total += C
#             j += T
#             result.append([T,C])
#         else:
#             break
#     print(result)
#     res = max(res, total)
    
# print(res)