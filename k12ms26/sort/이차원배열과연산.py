#BOJ 17140 이차원 배열과 연산
import sys
input = sys.stdin.readline

r, c, k = map(int, input().split())
A = []
for i in range(3):
    A.append(list(map(int, input().split())))

def setArray(arr):
    dict = {}
    for a in arr:
        if a == 0: continue
        if a in dict: dict[a] = dict.get(a) + 1
        else: dict[a] = 1
    
    res = sorted(dict.items(), key = lambda x: (x[1], x[0]))
    result = []
    for i in range(len(res)):
        result.append(res[i][0])
        result.append(res[i][1])
    
    return result

def rotated(array_2d):
    list_of_tuples = zip(*array_2d[::-1])
    return [list(elem) for elem in list_of_tuples]

def search(A):
    row = col = 3
    time = 0
    for i in range(101):
        if len(A) == 100: A = A[:100] #100개 넘어갔을때 처리
        if len(A[0]) == 100:
            for i in range(len(A)):
                A[i] = A[i][:100]
        
        if len(A) >= r and len(A[0]) >= c:
            if A[r-1][c-1] == k: break
        
        maximum_cnt = 0 #가장 크게 생긴 배열 크기 (0 채우기용)
        arr = []
        if row >= col:
            for i in range(row):
                tmp = setArray(A[i])
                arr.append(tmp)
                maximum_cnt = max(maximum_cnt, len(tmp))

        else:
            for i in range(col):
                colArr = []
                for j in range(row):
                    colArr.append(A[j][i])
                tmp = setArray(colArr)
                arr.append(tmp)
                maximum_cnt = max(maximum_cnt, len(tmp))

        for i in range(len(arr)): #0채우기
            if len(arr[i]) == maximum_cnt: continue
            for j in range(maximum_cnt - len(arr[i])):
                arr[i].append(0)
        
        if row < col:
            arr.reverse()
            arr = rotated(arr)

        row = len(arr)
        col = len(arr[0])
        A = arr
        
        time += 1
    if time == 101: time = -1
    print(time)

if r <= 3 and c <= 3 and A[r-1][c-1] == k: print(0)
else: search(A)
