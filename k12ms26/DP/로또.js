//BOJ 2758 로또
//DP로 풀자..
//https://he1fire.tistory.com/82
const input = [];
require("readline")
.createInterface(process.stdin, process.stdout)
.on("line", (line) => {
    input.push(line);
})
.on("close", () => {
    solution();
    process.exit();
});

const solution = () => {
    const T = input.shift();
    const arr = Array.from({length: 11}, ()=>Array.from({length: 2001})); //모든 경우의 수
    for (let i=1;i<=10;i++){
        for (let j=1;j<=2000;j++){
            let cnt = 0;
            for (let k=1;k<=j/2;k++) {
                cnt += arr[i-1][k]; //지금꺼 -1개만큼 뽑았을 때의 현재 수 / 2보다 작은 수들의 경우의 수를 모두 더하는것
            }
            if (i === 1) cnt = 1; //N이 1일때는 cnt = 1 (본인 혼자 밖에 없다) => 1일때는 일단 다 채워짐
            arr[i][j] = cnt;
        }
    }

    for(let i=0;i<+T;i++) {
        let answer = 0;
        const [N, M] = input[i].split(' ');
        for(let i=1;i<=+M;i++) {
            console.log(arr[+N][i]);
            answer += arr[+N][i]; //로또 개수가 N일때의 M까지의 경우의 수를 모두 더함 (완주한 경우의 수만 채워짐)
        }
        console.log(answer);
    }
};

// const solution = () => {
//     const T = input.shift();
//     let arr = input.map((e) => e.split(' '));
//     let res = []; //테스트 케이스 당 로또 구매 개수 저장

//     const buyLotto = (nm) => {
//         const [N, M] = nm;
//         let cnt = 0;
//         const checkNum = (curNum, curArr) => {
//             if(curArr.length === +N) cnt++;
//             else {
//                 //만약 현재 가지고 있는게 0보다 크면 재귀
//                 let next = Math.floor(curNum/2);
//                 if(next >= 2**(N-1-curArr.length)) {
//                     while(next >= 2**(N-1-curArr.length)) {
//                         checkNum(next, [...curArr, next]);
//                         next--;
//                     }
//                 }
//             }
//         };

//         if(N === 1) return M;
//         let m = M;
//         while(m >= 2**(N-1)) {
//             checkNum(m, [+m]); //현재 숫자, 현재 저장된 배열
//             m--;
//         }
//         return cnt;
//     };

//     for(let i=0;i<T;i++) {
//         res.push(buyLotto(arr[i]));
//     }

//     res.forEach((e) => console.log(e));
// };