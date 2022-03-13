#용액
#https://hellya.tistory.com/32
import sys

def search(solution):
    left = 0; right = len(solution)-1
    s = solution[left]+solution[right]
    res = [abs(s),solution[left],solution[right]]
    while left<right :
        s = solution[left]+solution[right]
        if abs(s) < res[0] :
            res[0] = abs(s)
            res[1] = solution[left]
            res[2] = solution[right]
        if s > 0 : right -= 1
        elif s < 0 : left += 1
        else :
            return res
    return res

N = int(sys.stdin.readline())
sol = list(map(int, sys.stdin.readline().split()))
sol.sort()
#둘의 차이의 절대값이 가장 작은 두 수여야 한다
result = search(sol)
print("%d %d "%(result[1],result[2]))