//programmers: 소수찾기
//https://webigotr.tistory.com/247
function solution(numbers) {
    let answer = 0;
    let num = numbers.split('').sort((a,b)=>b-a); // numbers를 배열로 변환하고 내림차순으로 정렬 (내림차순으로 정렬한 수가 가장 큰수라고 기대)
    let N = Number(num.join('')); //현재 문자열로 만들 수 있는 최댓값
    
    let arr = makePrimeNum(N);

    for(let i=2;i<=N;i++){ //최댓값만큼 돌기
        if(arr[i] === false) continue; //소수가 아니면 패스

        //소수라면
        let tmp = i.toString().split(''); //해당 숫자를 배열로 변환
        for (let cn of num) { //현재 tmp (소수) 를 이루는 각각의 숫자들이 모두 numbers에 있는지 확인
            let idx = tmp.indexOf(cn);
            if(idx > -1) tmp.splice(idx,1); //있으면 하나씩 빼서
        }
        
        if(tmp.length === 0) answer++; //모두 빠지면 소수가 맞으니까 answer++
    }

    return answer;
}

//에라토스테네스의 체 (소수 구하기)
function makePrimeNum(N) {
    let arr = [];
    for(let i=2;i<=N;i++){
        if(arr[i] === false) continue;
        for(let k=i+i; k<=N; k+=i) { //배수들 모두 제외
            arr[k] = false;
        }
    }
    return arr;
}