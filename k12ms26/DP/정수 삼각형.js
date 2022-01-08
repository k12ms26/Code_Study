//BOJ: 정수 삼각형
//https://gobae.tistory.com/27
const solution = ([N, ...arr]) => {
    const tri = [];
    for(let i=0;i<N;i++) {
        tri.push(arr[i].split(' ').map((v) => Number(v)));
    }

    for(let i=1;i<N;i++) {
        for(let j=0;j<=i;j++) {
            let prev;
            if(j === 0) prev = tri[i-1][j];
            else if(j === i) prev = tri[i-1][j-1];
            else prev = Math.max(tri[i-1][j-1], tri[i-1][j]);

            tri[i][j] += prev;
        }
    }

    console.log(Math.max(...tri[N-1]));
}

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    solution(input);
    process.exit();
  });