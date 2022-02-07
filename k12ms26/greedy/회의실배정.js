//BOJ 1931 회의실배정
const solution = (input) => {
    const N = input.shift();
    const arr = input.map((v) => v.split(' '));
    arr.sort((a, b) => a[1]-b[1] || a[0]-b[0]);
    let end_time = 0, cnt = 0, e = [];
    for(let [start, end] of arr) {
        if(+start >= end_time) {
            cnt++;
            e.push([start, end])
            end_time = end;
        }
    }
    console.log(cnt);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    solution(input);
    rl.close();
    process.exit();
});