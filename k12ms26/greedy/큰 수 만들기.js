//programmers: 큰 수 만들기
function solution(number, k) {
    const stack = []; //큰 값이 나오면 이전 값 중 더 작은 값은 모두 삭제되어야 함 -> 스택 정렬 필요
    let count = 0; //현재 자리수

    for(let item of number) {
        while(count < k && stack[stack.length - 1] < item) { //들어온 item이 스택의 가장 큰 값 보다 크면 pop
            stack.pop();
            count += 1;
        }
        stack.push(item);
    }

    while(count < k) { //k에 맞출때까지
        stack.pop();
        count += 1;
    }
    
    return stack.join('');
}