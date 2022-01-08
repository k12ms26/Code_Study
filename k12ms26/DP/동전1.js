//BOJ: 동전1 (미완성 / Maximum call stack size exceeded)
//node js 로 풀어서 맞춘 사람이 없다?
const solution = ([nk, ...arr]) => {
    let k = nk.split(' ')[1], cases = new Set(); //set으로 초기화
    const addCases = (cur, curArray) => {
        curArray.push(cur);

        for(let i=0;i<arr.length;i++) {
            let sum = cur + arr[i];
            if(sum === k && !cases.has([...curArray, arr[i]])) { //만약 현재 것이 k와 같고 cases에도 없다면
                cases.add([...curArray, arr[i]]); //추가하고 이 경우는 끝 (break)
                break;
            }
            addCases(cur + arr[i], [...curArray, arr[i]]);
        }
    }
    
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === k) {
            cases.add([arr[i]]);
            continue;
        }
        addCases(arr[i], []);
    }

    console.log(cases.size);
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