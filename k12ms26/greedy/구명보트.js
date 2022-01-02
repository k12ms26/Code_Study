//programmers: 구명보트
//https://velog.io/@diddnjs02/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8
function solution(people, limit){
	var answer = 0;
    people.sort((a,b) => b-a); //내림차순 정렬
    //투포인터?
    let left = 0;
    let right = people.length-1;
    
    while(left < right){
    	let sum = people[left] + people[right];
        if(sum > limit){ //현재 가지고 있는 큰 수 (left) 가 limit 보다 크면 더 작은 수로 이동
        	left += 1;
        } else { //아니라면 양쪽 모두 이동
            left += 1;
            right -= 1;
        }
        answer += 1;
    }
    if(left === right) answer += 1; //계산되지 않은 남은 하나가 있다면 하나 더 추가
    return answer;
}