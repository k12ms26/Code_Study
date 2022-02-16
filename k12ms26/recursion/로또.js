//BOJ 6603 로또
//[조합 알고리즘](https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
//https://velog.io/@proshy/JS%EC%88%9C%EC%97%B4%EC%A1%B0%ED%95%A9%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4-%EA%B5%AC%ED%95%98%EA%B8%B0
const input = [];
require("readline")
.createInterface(process.stdin, process.stdout)
.on("line", (line) => {
    input.push(line);
})
.on("close", () => {
    const getCombinations = (arr, num) => {
        const results = [];
        if (num === 1) return arr.map((e) => [+e]); //하나거나 or 하나가 남았거나 => 현재 arr 모두 리턴
        arr.forEach((fixed, index, origin) => { //origin === arr
            const rest = origin.slice(index + 1); //현재 조합으로 하기로 한 고정 숫자들 제외 나머지 (중복방지)
            const combinations = getCombinations(rest, num - 1); //나머지에 대한 조합
            const attached = combinations.map((el) => [fixed, ...el]); //각각 고정된 배열에 + 나머지 합치기
            results.push(...attached);
        });
    
        return results;
    }

    let t = input.length-1;
    let now = 0;
    while(t--) {
        //첫번째 원소: 테스트 케이스 원소
        getCombinations(input[now++].split(' ').slice(1), 6).forEach((list) => console.log(list.join(' '))); 
        console.log(''); //이거 안넣어주면 '출력 형식이 잘못되었습니다' 뜸... 진짜 싫다
    }
    process.exit();
});

