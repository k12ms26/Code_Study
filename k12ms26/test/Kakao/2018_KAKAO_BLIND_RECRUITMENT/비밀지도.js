function solution(n, arr1, arr2) {
    var answer = [];
    //toString(2) -> 2진수 변환
    for(let i=0;i<n;i++) {
        let str = '';
        let arr1_two = arr1[i].toString(2).split(''), arr2_two = arr2[i].toString(2).split('');
        //n 길이만큼 2진수가 없을 경우 채워나가는 것
        if(arr1_two.length < n) {
            for(let i=arr1_two.length;i<n;i++) {
                arr1_two.unshift('0');
            }
        }
        if(arr2_two.length < n) {
            for(let i=arr2_two.length;i<n;i++) {
                arr2_two.unshift('0');
            }
        }
        for(let j=0;j<n;j++) {
            if(arr1_two[j] === '1' || arr2_two[j] === '1') str += '#';
            else str += ' ';
        }
        answer.push(str);
    }
    return answer;
}