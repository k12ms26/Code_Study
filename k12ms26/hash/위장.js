//programmers: 위장
//경우의 수: (value1 + 1) ... * (valueN + 1) -1
//+1은 안입었을 경우의 수
function solution(clothes) {
    let answer = 1;
    let hm = new Map();
    for(let i=0;i<clothes.length;i++) {
        const type = clothes[i][1];
        if(hm.has(type)) hm.set(type, hm.get(type)+1);
        else hm.set(type, 1);
    }

    let arr = [...hm.entries()];
    for(let i=0;i<arr.length;i++) {
        answer *= arr[i][1] + 1;
    }

    return answer - 1;
}