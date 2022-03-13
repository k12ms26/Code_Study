//BOJ 2565 전깃줄
//https://chanhuiseok.github.io/posts/algo-49/
//https://velog.io/@lucas/BOF-2565-%EC%A0%84%EA%B8%B0%EC%A4%84-%ED%92%80%EC%9D%B4-NodeJS
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
    const N = +input.shift();
    let arr = input.map((e) => e.split(' ').map(Number));
    let dp = new Array(N).fill(0);
    arr.sort((a, b) => a[0]-b[0]);

    //LIS 알고리즘
    for(let i=0;i<N;i++) {
        dp[i] = 1;
        for(let j=0;j<i;j++) {
            if(arr[i][1] > arr[j][1]) {
              dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }

    //겹치지 않는 최대 증가 수열의 값을 전체에서 빼면 제거해야할 전깃줄의 수가 나오는 형태
    console.log(N-Math.max(...dp));
};