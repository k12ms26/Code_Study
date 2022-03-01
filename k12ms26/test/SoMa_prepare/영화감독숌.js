//BOJ 1436 영화감독 숌
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
    const N = parseInt(input[0]);
    if(N === 1) return 666;

    let order = 1;
    let now = 667, numberOfN = 0;
    while(order < N) {
        let movie = String(now).split('').map(Number);
        if(movie.join('').indexOf(666) > -1) {
            numberOfN = movie.join('');
            order++;
        }
        now++;
    }

    return numberOfN;
};
