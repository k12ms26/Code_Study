//BOJ 1992 쿼드트리
//https://tesseractjh.tistory.com/94
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
    const n = +input[0];
    const arr = input.slice(1).map(v => v.split("").map(Number));

    const quadTree = [];
    const recursion = (n, x, y) => {
        let total = 0;
        for(let i=0;i<n;i++) {
            for(let j=0;j<n;j++) {
                total += arr[y+j][x+i];
            }
        }

        if (total === 0) quadTree.push("0");
        else if (total === n*n) quadTree.push("1");
        else {
            n /= 2;
            quadTree.push("(");
            recursion(n, x, y);
            recursion(n, x+n, y);
            recursion(n, x, y+n);
            recursion(n, x+n, y+n);
            quadTree.push(")");
        }
    }
    recursion(n, 0, 0);
    return quadTree.join("");
};
