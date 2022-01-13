//programmers: 입국 심사
//(signal: aborted (core dumped))
function solution(n, times) {
    let answer = [];
    for(let i=1;i<=n;i++) {
        for(let j=0;j<times.length;j++) {
            answer.push(Math.floor(times[j] * i));
        }
    }
    
    answer.sort((a, b) => a-b);
    return answer[n-1];
}

//처리 가능한 수가 n보다 작다면 분을 올려야 되고, n보다 크다면 분을 낮춰야한다..?
//면접관이 시간대비 몇명을 처리할 수 있는가
function solution(n, times) {
    times.sort((a, b) => a-b);
    let left = 1, right = times[times.length - 1] * n; //가질 수 있는 최대 시간

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        //sum: 시간 / 심사시간 (mid라는 전체시간 대비 몇명을 받을 수 있는지 모두 더한다)
        const sum = times.reduce((prev, time) => prev + Math.floor(mid / time), 0);

        if(sum < n) { //더한 값이 받을 수 있는 값보다 작으면 더 당기고
            left = mid + 1;
        } else { //아니면 수를 내리고
            right = mid - 1;
        }
    }

    return left;
}