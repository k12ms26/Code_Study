//BOJ 2579 계단 오르기
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [];
require("readline")
.createInterface(process.stdin, process.stdout)
.on("line", (line) => {
  input.push(line);
})
.on("close", () => {
  console.log(solution());
  process.exit();
});

const solution = () => {
    const stairCnt = parseInt(input[0]);
    let dp = [];
    for(let i=1;i<=stairCnt;i++) dp.push(+input[i]);
    let sum = new Array(stairCnt).fill(0);

    //N번째 계단: N-3번째 계단에서 N-1번째 계단까지 2단점프를 한 후, N번째 계단으로 점프를 했을 때 || N-2번째 계단에서 2단점프를 했을 때
    sum[0] = dp[0]; //첫번째는 그대로
    sum[1] = Math.max(dp[1], dp[0]+dp[1]);
    sum[2] = Math.max(dp[1]+dp[2], dp[0]+dp[2]);

    for(let i=3;i<stairCnt;i++) {
        sum[i] = Math.max(dp[i-1]+sum[i-3], sum[i-2]) + dp[i];
    }

    return sum[stairCnt-1];
};
