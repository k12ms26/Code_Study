//BOJ 2696 중앙값 구하기
//100%에서 시간 초과
//우선순위 큐나 힙 클라스 생성해서 만드는데 소팅이 제대로 안됨 이유 찾아봐야할것같음
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];
let now = 1;
for(let i=0;i<T;i++) {
    const M = +input[now++];
    let arr = [];
    for(let j=0;j<M/10;j++) {
        arr.push(...input[now++].split(' ').map(Number));
    }

    let cnt = 0, res = '';
    if(M === 1) {
        console.log(1);
        console.log(arr[0]);
        continue;
    }
    
    for(let j=0;j<M;j++) {
        if(j % 2 === 0) {
            let tmp = new Array(...arr);
            let str = tmp.slice(0, j+1).sort((a, b) => a-b)[Math.floor(j/2)];
            if(j % 9 === 0 && j !== 0 && j !== M-1) res += `${str}\n`;
            else res += `${str} `;
            cnt++;
        }
    }

    console.log(cnt);
    console.log(res);
}