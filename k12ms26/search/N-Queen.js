//BOJ 9663 N-Queen
//https://tear94fall.github.io/lecture/2020/09/16/n-queen-problem.html (N-queen 알고리즘)
//https://www.acmicpc.net/source/18803960 (이게 뭐지..?)
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(solution(input[0]));
    process.exit();
});

const solution = (n) => {
    const N = +n;
    let cnt = 0, arr = Array.from({length: 15}, ()=>0);

    const nQueen = (col) => {
        if(col === N) cnt++; //마지막에 도달하면 +1

        for(let i=0;i<N;i++) {
            let checked = true;
            for(let j=0;j<col;j++) { //N*N 체스판에 한 자리씩 비교하는것
                arr[col] = i;
                if(arr[j] === arr[col] || j-col === arr[j]-arr[col] || j-col === arr[col]-arr[j]) { //현재 퀸 위치에 같은 col이 있거나, 대각선에 있으면 fail
                    checked = false; //백트래킹?
                    break;
                }
            }

            if(checked) nQueen(col+1);
        }
    }

    for(let i=0;i<N;i++) {
        arr[0] = i; //0번째 col에 i번째 row 값 넣기
        nQueen(1); //다음 세로줄(1번째 col)
    }

    return cnt;
};