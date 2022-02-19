//BOJ 1759 암호만들기
const input = [];
require("readline")
.createInterface(process.stdin, process.stdout)
.on("line", (line) => {
    input.push(line);
})
.on("close", () => {
    const [L, C] = input[0].split(' ').map(Number);
    const includesVowel = (arr) => {
        const vowelLength = arr.filter((e) => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u').length;
        if(arr.length - vowelLength >= 2 && vowelLength >= 1) return true;
        return false;
    }

    const getCombinations = (arr, num) => {
        const results = [];
        if (num === 1) {
            return arr.map((e) => [e]); //하나거나 or 하나가 남았거나 => 현재 arr 모두 리턴
        }
        arr.forEach((fixed, index, origin) => { //origin === arr
            const rest = origin.slice(index + 1); //현재 조합으로 하기로 한 고정 숫자들 제외 나머지 (중복방지)
            const combinations = getCombinations(rest, num - 1); //나머지에 대한 조합
            const attached = combinations.map((el) => [fixed, ...el]); //각각 고정된 배열에 + 나머지 합치기
            results.push(...attached);
        });
    
        return results;
    }

    getCombinations(input[1].split(' ').sort(), L).forEach((list) => {
        if(includesVowel(list)) console.log(list.join(''));
    }); 
    process.exit();
});
