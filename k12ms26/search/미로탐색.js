//BOJ 2178 미로 탐색
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
    const [N, M] = input[0].split(' ').map(Number);
    let arr = [];
    let visited = Array.from({length: N}, ()=>Array.from({length: M}, ()=>0));
    for(let i=1;i<=N;i++) {
        arr.push(input[i].split('').map(Number));
    }

    if(arr[0][0] === 0) return 0;

    let queue = [[0, 0]];
    visited[0][0] = 1;

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    while(queue.length) {
        let [x, y] = queue.shift();
        for(let i=0;i<4;i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(0 <= nx && nx < N && 0 <= ny && ny < M && arr[nx][ny] === 1) {
                if(visited[nx][ny] === 0) {
                    visited[nx][ny] += visited[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    return visited[N-1][M-1];
};