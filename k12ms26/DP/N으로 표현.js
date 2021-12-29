//programmers: N으로 표현
//https://nyang-in.tistory.com/267
//ES6 : set 관련 문서 (https://velog.io/@nittre/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Array-VS-Set)
function solution(N, number) {
    const res = Array.from({length: 9}, ()=>new Set()); //N을 1~8번 쓰는 것에 따른 횟수를 저장하기 위함
    if(N === number) {
        return 1;
    } else {
        res.forEach((e, idx) => {
            if (idx !== 0) e.add(Number(String(N).repeat(idx))); //주어진 idx 수만큼 문자열을 반복해 붙임
        })
        for(let i=1;i<=8;i++) { //N을 몇번 쓰는지
            for(let j=1;j<i;j++) { //현재 쓰는 횟수의 -1만큼만 for문 루프
                for(let item1 of res[j]) {
                    for(let item2 of res[i-j]) { //ex. N을 3번 쓰는 경우, N 1번쓰는 경우와 N 2번 쓰는 경우를 사칙연산
                        res[i].add(item1 + item2);
                        res[i].add(item1 - item2);
                        res[i].add(item1 * item2);
                        res[i].add(Math.floor(item1 / item2));
                    }
                }
            }
            if(res[i].has(number)) return i; //만약 number가 있으면 해당 인덱스 리턴
        }
        return -1;
    }
}
// function solution(N, number) {
//     let answer = 0, cnt = 0; //answer: 현재 값, cnt: N 사용한 횟수
//     while(answer <= number) {
//         if(answer === number) break;
        
//         let ten = answer * 10 + N;
//         let results = [answer + N, answer - N, answer * N, answer / N,
//                        ten, ten + N, ten - N, ten * N, ten / N]
//         let calculated = []
//         for(let i=0;i<results.length;i++) {
//             calculated.push(Math.abs(number - results[i]))
//         }
        
//         //가장 가까운 값이 무엇인지 찾는 용도
//         let minIndex = calculated.indexOf(Math.min(...calculated))
//         answer = results[minIndex];
        
//         if(minIndex > 4) cnt += 2; //10곱한 상태면 N두번 사용
//         else cnt += 1;
//     }
    
//     if(cnt > 8) return -1;
//     else return cnt;
// }