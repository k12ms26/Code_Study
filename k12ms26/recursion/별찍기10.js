//BOJ 2447 별 찍기 - 10
//https://nyang-in.tistory.com/211

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
    const N = Number(n);
    let str = '';

    const PaintStar = (i, j) => {
        if(i % 3 === 1 && j % 3 === 1){
            str += " ";
        }else{
            if(Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0){
                str += "*";
            } else {
                PaintStar(Math.floor(i / 3), Math.floor(j / 3)); //3으로 쪼개서 재귀
            }
        }
    }
    
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            PaintStar(i, j);
        }
        if(i !== N - 1){
            str += "\n";
        }
    }
    
    return str;
}


// const solution = (n) => {
//     const N = Number(n);
//     let cur = 1, starRange = [1]; //거듭제곱 리스트 저장해두기
//     let res = Array.from({length: N+1}, ()=>Array.from({length: N+1}, ()=>'*'));

//     const fillEmpty = (idx) => {
//         let left_top = [0, 0], start = [0, 0];
//         while(left_top[0]+3**idx < N && left_top[1]+3**idx < N) { //마지막까지 돌기
//             for(let i=left_top[0];i<left_top[1];i++) {
//                 for(let j=i;j<left_top[1];j++) {
//                     res[i][j] = ' ';
//                 }
//             }
//             if(left_top[0]+3**idx === N) {
//                 start = [start[0]+3**idx, start[1]+3**idx];
//                 left_top = start;
//             } else {
//                 left_top = [left_top[0]+3**idx, left_top[1]];
//             }
//             console.log(left_top)
//         }
//     }

//     while(3**cur <= N) {
//         starRange.push(3**cur);
//         cur++;
//     }

//     for(let i=0;i<res.length;i++) {
//         res[i][N] = '\n';
//     }

//     for(let i=1;i<starRange.length;i++) {
//         if(i===1)fillEmpty(i); //index 가져가기
//     }

//     let answer = '';
//     res.forEach((e) => answer += e.join(''));

//     return answer;
// };