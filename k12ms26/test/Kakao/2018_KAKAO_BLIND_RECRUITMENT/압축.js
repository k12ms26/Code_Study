//programmers: 압축
//미완성
const changeToNum = (str) => {
    return str.charCodeAt(0) - 64;
}

function solution(msg) {
    var answer = [];
    msg = msg.toUpperCase();
    //해시? DP?
    let dict = new Map();

    let idx = 0, w, c, long = msg[0];
    for(let i=0;i<msg.length-1;i++) {
        w = msg[i]; c = msg[i+1];
        
        if(long.length >= 4) {
            do {
                if(dict.has(long[0] + long[1])) long = long.substring(1);
            } while (long.length < 3);
        }
        
        if(dict.has(long) && long.includes(w + c)) {
            answer.push(dict.get(long) + 27);
        } else if(dict.has(w + c)) {
            answer.push(dict.get(w + c) + 27);
        } else {
            dict.set(w + c, idx++);
            answer.push(changeToNum(w));
        }
        console.log(w + c, answer, dict);
        long += c;
        dict.set(long, idx++);
    }
    return answer;
}