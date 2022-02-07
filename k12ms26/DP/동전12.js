//BOJ 2293 동전1
const solution = ([nk, ...arr]) => {
    let k = parseInt(nk.split(' ')[1]), cases = [];
    let maxCases = [];
    for(let element of arr) {
        for(let j=0;j<k;j++) {
            maxCases.push(parseInt(element));
        }
    }

    let curIdx = 0, curSum = maxCases[0], curCase = [];
    const addCase = (curSum, curArr, curIdx) => {
        if(curIdx < maxCases.length) {
            if(curSum === k) {
                let isDup = false;
                for(let i=0;i<cases.length;i++) {
                    let c = cases[i].join('');
                    if(curCase.join('') === c) {
                        isDup = true;
                        break;
                    }
                }
    
                if(!isDup) {
                    cases.push(curCase);
                    curCase = [];
                }
            } else {
                for(let i=0;i<arr.length;i++) {
                    addCase(parseInt(curSum + arr[i]), [...curArr, parseInt(arr[i])], curIdx++);
                }
            }

        }
    }

    for(let i=0;i<arr.length;i++) {
        addCase(parseInt(arr[i]), [parseInt(arr[i])], 0);
    }
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