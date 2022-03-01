//BOJ 3273 두 수의 합
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
    const x = +input[2];

    let arr = input[1].split(' ').map(Number).sort((a, b) => a-b);
    let cnt = 0;

    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            if(arr[i] + arr[j] === x && i !== j) cnt++;
        }
    }

    return cnt;
    //메모리초과
    // const getCombinations = (arr, num) => {
    //     const results = [];
    //     if (num === 1) return arr.map((e) => [+e]);
    //     arr.forEach((fixed, index, origin) => {
    //         const rest = origin.slice(index + 1);
    //         const combinations = getCombinations(rest, num - 1);
    //         const attached = combinations.map((el) => [fixed, ...el]);
    //         results.push(...attached);
    //     });
    
    //     return results;
    // }

    // let arr = getCombinations(input[1].split(' ').map(Number), 2);
    // return arr.filter((e) => e[0] + e[1] === x).length;
};
