#회의실 배정
import sys

N = int(sys.stdin.readline())
time = []
end_time = 0; cnt = 0
for i in range(N) :
    a, b = map(int,sys.stdin.readline().split())
    time.append([a,b])

time = sorted(time, key=lambda a : a[0])
time = sorted(time, key=lambda a : a[1])
print(time)
for i, j in time :
    if i >= end_time :
        cnt += 1
        end_time = j

print(cnt)