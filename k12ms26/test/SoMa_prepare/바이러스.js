//BOJ 2606 바이러스
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
    const computerCnt = parseInt(input[0]);
    const nodeCnt = parseInt(input[1]);
    let arr = Array.from({length: computerCnt+1}, ()=>Array.from({length: computerCnt+1}, ()=>-1));
    let visited = new Array(computerCnt+1).fill(false);

    for(let i=0;i<nodeCnt;i++) {
        let [left, right] = input[i+2].split(' ').map(Number);
        arr[left][right] = 1;
        arr[right][left] = 1;
    }

    let queue = [1];
    visited[1] = true;
    while(queue.length) {
        let now = queue.shift();
        for(let i=1;i<=computerCnt;i++) {
            if(arr[now][i] === 1 && visited[i] === false) {
                queue.push(i);
                visited[i] = true;
            }
        }
    }

    return visited.filter((e) => e === true).length - 1;
};
