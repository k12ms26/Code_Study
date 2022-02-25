//BOJ 14888 연산자 끼워넣기
//https://velog.io/@cada/BOJ-14888-%EC%97%B0%EC%82%B0%EC%9E%90-%EB%81%BC%EC%9B%8C%EB%84%A3%EA%B8%B0
const input = [];
require("readline")
.createInterface(process.stdin, process.stdout)
.on("line", (line) => {
    input.push(line);
})
.on("close", () => {
    let N = +input[0];
    let num = input[1].split(' ').map(Number);
    let operators = input[2].split(' ').map(Number);
    
    let max = -Infinity, min = Infinity;
    
    const operation = (num1, num2, operator) => {
        switch(operator) {
            case 0: return num1+num2;
            case 1: return num1-num2;
            case 2: return num1*num2;
            case 3:
                const result = num1 >= 0 ? Math.floor(num1/num2) : -Math.floor(-num1/num2);
                return result;
        }
    };
    
    const dfs = (index, result, operator) => {
        if(index === N) {
            max = Math.max(max, result);
            min = Math.min(min, result);
        }
    
        for(let i=0;i<4;i++) {
            if(operator[i] > 0) {
                const newOperator = new Array(...operator); //JSON.parse(JSON.stringify(operator))와 같은 문법
                newOperator[i]--;
                dfs(index+1, operation(result, num[index], i), newOperator);
            }
        }
    };
    
    dfs(1, num[0], operators);
    
    console.log(max ? max : 0);
    console.log(min ? min : 0);
});