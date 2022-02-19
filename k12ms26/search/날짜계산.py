#BOJ 1476 날짜 계산
import sys
E, S, M = map(int,sys.stdin.readline().split())

if E == 1 and S == 1 and M == 1: print(1)
else:
    year = 1
    #year: 15n+e or 28n+s or 19n+m
    while True:
        year += 1
        if (year-E) % 15 == 0 and (year-S) % 28 == 0 and (year-M) % 19 == 0: break
        
    print(year)