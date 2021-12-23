//programmers: 조이스틱
//미완성
function solution(name) {
    const arr = name.split('');
    let answer = Math.abs(arr[0].charCodeAt(0) - 'A'.charCodeAt(0));
    if(answer > 13) answer = 26 - answer;

    if(arr.length === 1) {
        //1개면 그것만 반환
        return answer;
    } else {
        //오른쪽, 왼쪽
        let right = Math.abs(arr[1].charCodeAt(0) - 'A'.charCodeAt(0)),
            left = Math.abs(arr[arr.length-1].charCodeAt(0) - 'A'.charCodeAt(0));
        if(right > 13) right = 26 - right;
        if(left > 13) left = 26 - left;
        
        if(right > left) { //첫 글자 기준 오른쪽이 왼쪽보다 차이가 크면 왼쪽으로 커서 계속 이동
            for(let i=arr.length-1;i>0;i--) {
                let sub = Math.abs(arr[i].charCodeAt(0) - 'A'.charCodeAt(0));
                if(sub > 13) sub = 26 - sub;
                answer += sub + 1;
            }
            if(arr[1].chrCodeAt(0) === 'A'.charCodeAt(0)) answer -= 1;
        } else {
            for(let i=1;i<arr.length;i++) {
                let sub = Math.abs(arr[i].charCodeAt(0) - 'A'.charCodeAt(0));
                if(sub > 13) sub = 26 - sub;
                answer += sub + 1;
            }
            if(arr[arr.length-1].charCodeAt(0) === 'A'.charCodeAt(0)) answer -= 1;
        }
        
        return answer;
    }
}