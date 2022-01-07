//programmers: 기능개발
function solution(progresses, speeds) {
    let answer = [0];
    let days = [];
    for(let i=0;i<progresses.length;i++) {
        let work = Math.ceil((100 - progresses[i]) / speeds[i]);
        days.push(work);
    }
    
    let maximum = days[0];
    for(let i=0, j=0;i<days.length;i++) {
        if(maximum < days[i]) {
            maximum = days[i];
            answer[++j] = 1;
        } else {
            answer[j] += 1;
        }
    }
    return answer;
}