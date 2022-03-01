//BOJ 2579 계단 오르기
//미완성
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
    if(dp.length === 1) return dp[0];
    else if(dp.length === 2) return dp[0] + dp[1];
    else if(dp.length === 3) return dp[0] + dp[2];

    let origin = dp[stairCnt-1];
    dp[stairCnt-1] = dp.reduce((cur, prev) => cur+prev) - dp[stairCnt-1];

    for(let i=1;i<stairCnt-1;i++) {
        if(dp[i] < dp[i+1]) {
            dp[i+1] += dp[i-1];
            i++;
        } else {
            dp[i] += dp[i-1];
        }
    }

    if(dp[stairCnt-3] >= dp[stairCnt-2]) dp[stairCnt-1] = origin + dp[stairCnt-3];
    else dp[stairCnt-1] = origin + dp[stairCnt-2];

    return dp[stairCnt-1];
};
