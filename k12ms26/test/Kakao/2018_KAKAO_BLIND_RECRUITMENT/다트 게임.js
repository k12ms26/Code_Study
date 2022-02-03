//programmers: 다트 게임
//과연 효율적인 코드일까?
function solution(dartResult) {
    let answer = [], minus = [];
    let dart = dartResult.split('');
    
    const calculate = (bonus, res) => {
        if(bonus === 'S') answer.push(parseInt(res));
        else if(bonus === 'D') answer.push(parseInt(res) ** 2);
        else if(bonus === 'T') answer.push(parseInt(res) ** 3);
    }
    
    for(let i=0;i<dart.length;i++) {
        if(parseInt(dart[i]) > 0 && parseInt(dart[i]) < 10) {
            let cal = dart[i+1];
            if(cal === '0') continue; //10일 경우
            calculate(cal, dart[i]);
        } else if(parseInt(dart[i]) === 0) {
            //0이거나 10이거나
            let cal = dart[i+1];
            if(i > 0) { //첫번째 인덱스가 아니어야 10 가능
                if(dart[i-1] === '1') calculate(cal, '10');
                else calculate(cal, '0');
            } else calculate(cal, '0');
        } else if(dart[i] === '*') {
            if(answer.length === 1) answer[0] = answer[0] * 2;
            else {
                answer[answer.length-1] = answer[answer.length-1] * 2;
                answer[answer.length-2] = answer[answer.length-2] * 2;
            }
        } else if(dart[i] === '#') {
            minus.push(answer.length-1);
        }
    }
    
    let res = 0;
    for(let i=0;i<answer.length;i++) {
        if(minus.filter(e => e === i).length) res -= answer[i];
        else res += answer[i];
    }
    
    return res;
}