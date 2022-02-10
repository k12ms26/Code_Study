//BOJ 1744 수묶기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let neg = [], pos = [], zero = false;
let answer = 0;

for (let i = 0; i < N; i++) {
  if (Number(input[i + 1]) === 1) {
    answer++;
  } else if (Number(input[i + 1]) === 0) {
    zero = true;
  } else if (Number(input[i + 1]) < 0) {
    neg.push(Number(input[i + 1]));
  } else {
    pos.push(Number(input[i + 1]));
  }
}

pos.sort((a, b) => b-a);
neg.sort((a, b) => a-b);

if(neg.length % 2 === 1 && zero) neg.pop();
if(pos.length % 2 === 1) {
    answer += pos[pos.length-1];
    pos.pop();
}
if(neg.length % 2 === 1) {
    answer += neg[neg.length-1];
    neg.pop();
}

for(let i=0;i<pos.length;i+=2) {
    answer += pos[i] * pos[i+1];
}

for(let i=0;i<neg.length;i+=2) {
    answer += neg[i] * neg[i+1];
}

console.log(answer);