//BOJ 11399 ATM
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
    const times = input[1].split(' ').map(Number).sort((a, b) => a-b);
    let sum = new Array(times.length).fill(0);
    for(let i=0;i<times.length;i++) {
        if(i === 0) sum[i] = times[i];
        else {
            let tmp = new Array(...times);
            sum[i] = tmp.splice(0, i+1).reduce((prev, cur) => prev+cur);
        }      
    }

    return sum.reduce((prev, cur) => prev+cur);
};
