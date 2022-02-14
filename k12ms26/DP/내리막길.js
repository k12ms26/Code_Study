//BOJ 1520 내리막길
//미완성
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    const [M, N] = input[0].split(' ');
    const arr = [];
    for(let i=0;i<M;i++) {
        arr.push(input[i+1].split(' '));
    }

    let dx = [1, 0, 1, 0], dy = [0, 1, 0, -1]; //위, 오른쪽, 아래, 왼쪽
    let queue = [[0, 0, arr[0][0]]], answer = 0;
    let prev_road = Array.from({length: M}, ()=>Array.from({length: N}, ()=>[]));
    while(queue.length) {
        let [x, y, prev] = queue.shift();
        for(let i=0;i<4;i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(0 <= nx && nx < M && 0 <= ny && ny < N) {
                //&& prev_road[x][y].filter((e) => e <= arr[nx][ny]).length === 0
                if(prev > arr[nx][ny] && prev_road[nx][ny].filter((e) => e === prev).length === 0) {
                    prev_road[nx][ny] = [...prev_road[nx][ny], prev];
                    // console.log(prev_road[nx][ny], prev_road[x][y])
                    if(prev_road[nx][ny].length < prev_road[x][y].length) {
                        let repeat = Array.from({length: prev_road[x][y].length - prev_road[nx][ny].length}, ()=>arr[nx][ny]);
                        prev_road[nx][ny] = [...prev_road[nx][ny], ...repeat];
                    }
                    queue.push([nx, ny, arr[nx][ny]]);
                }
            }
        }
    }

    console.log(prev_road);
    process.exit();
  });