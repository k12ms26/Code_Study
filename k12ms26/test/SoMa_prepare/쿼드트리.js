//BOJ 1992 쿼드트리
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

};
