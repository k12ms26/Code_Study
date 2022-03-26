#BOJ 14890 경사로
#https://pacific-ocean.tistory.com/368
import sys
input = sys.stdin.readline

def check(li):
    sw = [False for i in range(n)]
    for i in range(n-1):
        if li[i] == li[i+1]: #다음 높이와 같으면 계속하고
            continue
        if abs(li[i] - li[i+1]) > 1: #높이가 1보다 크면 그대로 False 리턴
            return False
        if li[i] > li[i+1]: #현재꺼가 다음꺼보다 높은 거면
            temp = li[i+1]
            for j in range(i+1, i+1+l): #경사로의 길이만큼
                if 0 <= j < n: #범위 안에 있으면
                    if li[j] != temp: return False #경사로가 일정한 높이가 아니면 False 리턴
                    if sw[j] == True: return False #이미 놓여져있으면 False 리턴
                    sw[j] = True
                else: #범위 안에 없으면 False 리턴
                    return False
        else: #현재꺼보다 다음꺼가 높으면
            temp = li[i]
            for j in range(i, i-l, -1): #거꾸로 놓기
                if 0 <= j < n:
                    if li[j] != temp: return False
                    if sw[j] == True: return False
                    sw[j] = True
                else:
                    return False
    return True

n, l = map(int, input().split())
s = []
for i in range(n):
    s.append(list(map(int, input().split())))
    
cnt = 0
#가로
for i in s:
    if check(i):
        cnt += 1
#세로   
for i in range(n):
    temp = []
    for j in range(n):
        temp.append(s[j][i])
    if check(temp):
        cnt += 1
        
print(cnt)