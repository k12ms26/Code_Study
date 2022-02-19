//BOJ 1476 날짜 계산
//메모리 초과
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    const [E, S, M] = input[0].split(' ').map(Number);
    //1 ≤ E ≤ 15, 1 ≤ S ≤ 28, 1 ≤ M ≤ 19
    if(E === 1 && S === 1 && M === 1) console.log(1);
    else {
        let year = 1;
        while(true) {
            year++;
            if((year-E) % 15 === 0 && (year-S) % 28 === 0 && (year-M) % 19 === 0) break;
        }
        console.log(year);
    }

    process.exit();
});