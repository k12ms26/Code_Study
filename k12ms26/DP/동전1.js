//BOJ 2293 동전1
//뭔짓을 해도 메모리 초과
const solution = (input) => {
    const [n, k] = input.shift().split(' ');
    const arr = input.map((v) => Number(v));
    const dp = new Array(k + 1).fill(0);

    dp[0] = 1;
    for(let i=0;i<arr.length;i++) {
        for(let j=arr[i];j<=k;j++) {
            dp[j] = dp[j] + dp[j - arr[i]];
         }
    }
    console.log(dp[k])
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    solution(input);
    rl.close();
    process.exit();
});