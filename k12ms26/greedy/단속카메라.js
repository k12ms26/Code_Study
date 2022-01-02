//programmers: 단속카메라
function solution(routes) {
    var answer = 1;
    routes.sort((a,b) => a[1]-b[1]);
    let end = routes[0][1]; //시작점
    for(let i=1;i<routes.length;i++) {
        if(end <= routes[i][1] && end >= routes[i][0]) continue;
        else {
            answer += 1;
            end = routes[i][1];
        }
    }
    return answer;
}