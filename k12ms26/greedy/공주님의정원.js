//BOJ 2457 공주님의 정원
//시간 초과
const solution = (input) => {
    const N = input[0];
    let flowers = [];
    for(let i=0;i<N;i++) {
        flowers.push(input[i+1].split(' '));
    }

    flowers.sort((a, b) => a[0]-b[0] || a[1]-b[1] || a[2]-b[2] || a[3]-b[3]);

    let end = [3, 1], answer = 0;
    console.log(flowers)
    Loop: for(let month=3;month<=11;month++) {
        for(let day=1;day<=31;day++) {
            const now = flowers.filter((e) => ((+e[0] < +end[0]) || (+e[0] === +end[0] && +e[1] <= +end[1]))
                && ((+e[2] > +end[0]) || (+e[2] === +end[0] && +e[3] >= +end[1])));
            if(now.length) {
                const maximum = now[now.length-1]; //맨 마지막 원소가 제일 최선이 아닐수 있음
                end = [maximum[2], maximum[3]];
                answer++;
                for(let i=0;i<now.length;i++) {
                    flowers.shift();
                } //무한루프를 피하기 위해 그 전 꽃들은 모두 삭제 (중복방지)
                [month, day] = end;
            } else {
                if((+end[0] < 11 || (+end[0] === 11 && +end[1] < 30))) { //이어지지 않을 경우
                    answer = 0;
                    break Loop;
                }
            }
            if(flowers.length === 0 || (+end[0] > 11 || (+end[0] === 11 && +end[1] >= 30))) break Loop;
            if((month === 4 || month === 6 || month === 9 || month === 11) && day === 30) day++;
        }
    }

    return answer;
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(solution(input));
    process.exit();
});