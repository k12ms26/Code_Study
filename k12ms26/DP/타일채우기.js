//BOJ 2133 타일 채우기
//https://amunre21.github.io/boj/5-2133/
function solution(n){
    if(n % 2 === 1) return 0;

    let arr = new Array(n*1+1).fill(0);
    
    arr[2] = 3;
    for(let i=4;i<=n;i+=2){
        arr[i] = arr[i-2] * 3 + 2;
        for(let j=i-4;j>=2;j-=2) {                   
            arr[i] += arr[j] * 2;
        }
    }

    return arr[n];
}

const input = [];
require("readline")
.createInterface(process.stdin, process.stdout)
.on("line", (line) => {
    input.push(line);
})
.on("close", async () => {
    console.log(solution(input[0]));
    process.exit();
});