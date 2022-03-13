//BOJ 3217 malloc
//메모리 초과
const input = [];
require("readline")
.createInterface(process.stdin, process.stdout)
.on("line", (line) => {
  input.push(line);
})
.on("close", () => {
  solution();
  process.exit();
});

const solution = () => {
    const N = +input[0];
    let arr = new Array(100001).fill(0);
    arr[0] = -1;
    let vars = []; //변수이름별 공간저장
    let res = '';

    for(let i=1;i<=N;i++) {
        if(input[i].indexOf('print') > -1) {
            let now = input[i].slice(6, 10);
            res += `${vars[vars.findIndex((e) => e[0] === now)][1]}\n`;
        } else if(input[i].indexOf('free') > -1) {
            let now = input[i].slice(5, 9);
            let nowIdx = -1;
            for(let i=vars.length-1;i>=0;i--) {
                if(vars[i][0] === now) {
                    nowIdx = i;
                    break;
                }
            }

            if(vars[nowIdx][1] > 0) {
                arr = [...arr.slice(0, vars[nowIdx][1]), ...new Array(vars[nowIdx][2]).fill(0), ...arr.slice(vars[nowIdx][2])];
                vars[nowIdx] = [vars[nowIdx][0], 0, vars[nowIdx][2]];
            }
        } else {
            let [v, memory] = input[i].split('=');
            memory = memory.slice(7, memory.length-2);

            const firstIdx = arr.indexOf(0);
            const lastIdx = arr.lastIndexOf(0);

            if(lastIdx - firstIdx + 1 >= +memory) {
                vars.push([v, firstIdx, +memory]);
                arr = [...arr.slice(0, firstIdx), ...new Array(+memory).fill(1), ...arr.slice(firstIdx+(+memory))];
            } else {
                vars.push([v, 0, +memory]);
            }
        }
    }

    console.log(res.slice(0, res.length-1));
};