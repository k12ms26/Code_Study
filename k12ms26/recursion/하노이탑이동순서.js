//BOJ 11729 하노이 탑 이동 순서
//https://www.acmicpc.net/source/21599609
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(solution(input[0]));
    process.exit();
});

const solution = (n) => {
    const N = +n;
    //경우의 수는 2**input[0]-1이 맞는데 그래서 과정까지 출력하라 한듯
    let K = 0, res = '';

    //1. n-1개의 원판을 첫번째(start)에서 두번째로(mid),
    //2. 마지막 원판을 첫번째에서 세번째로 (start, end)
    //3. n-1개의 원판을 두번째에서 세번째로 옮기는 과정(mid, end)
    const move = (n, start, mid, end) => {
        K++;
        if(n === 1) res += `${start} ${end}\n`; //2번 과정
        else {
            move(n-1, start, end, mid); //1번 과정
            res += `${start} ${end}\n`;
            move(n-1, mid, start, end); //3번 과정
        }
    };

    move(N, 1, 2, 3);

    return `${K}\n${res}`;
};