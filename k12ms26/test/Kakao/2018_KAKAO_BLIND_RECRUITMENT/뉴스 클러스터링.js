//programmers: 뉴스 클러스터링
function solution(str1, str2) {
    var answer = 0;
    let map1 = new Map(), map2 = new Map();
    let alphabet_spc = /[A-Z]/;

    str1 = str1.toUpperCase().split(''); str2 = str2.toUpperCase().split('');
    
    for(let i=0;i<str1.length-1;i++) {
        if(alphabet_spc.test(str1[i]) && alphabet_spc.test(str1[i+1])) {
            let str = str1[i]+str1[i+1];
            if(map1.has(str)) map1.set(str, map1.get(str)+1);
            else map1.set(str, 1);
        }
    }
    
    for(let i=0;i<str2.length-1;i++) {
        if(alphabet_spc.test(str2[i]) && alphabet_spc.test(str2[i+1])) {
            let str = str2[i]+str2[i+1];
            if(map2.has(str)) map2.set(str, map2.get(str)+1);
            else map2.set(str, 1);
        }
    }
    
    //다중집합 확장
    let sum = 0, sub = 0;
    let arr1 = [...map1], arr2 = [...map2];
    for(let i=0;i<arr1.length;i++) {
        let duplicatedIdx = arr2.findIndex((e) => e[0] === arr1[i][0]);
        if(duplicatedIdx > -1) { //겹치는게 있으면
            sum += Math.max(arr1[i][1], arr2[duplicatedIdx][1]);
            sub += Math.min(arr1[i][1], arr2[duplicatedIdx][1]);
            arr2.splice(duplicatedIdx, 1);
        } else { //겹치는게 없으면
            sum += arr1[i][1]; //arr1 겹치는거 없는거 더하기
        }
    }
    
    for(let rest of arr2) {
        sum += rest[1];
    }
    
    if(sum === 0) answer = 1;
    else answer = sub / sum;
    
    return Math.floor(answer * 65536);
}