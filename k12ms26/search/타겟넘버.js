//programmers: 타겟넘버
function solution(numbers, target) {
    let answer = 0;

    const DFS = (n, arr, idx) => {
        if(arr.length === numbers.length) {
            if(n === target) answer++;
        } else {
            DFS(n+numbers[idx+1], [...arr, numbers[idx+1]], idx+1);
            DFS(n-numbers[idx+1], [...arr, -numbers[idx+1]], idx+1);
        }
    }

    DFS(numbers[0], [numbers[0]], 0);
    DFS(-numbers[0], [numbers[0]], 0);

    return answer;
}