//programmers: 네트워크
function solution(n, computers) {
    var answer = 0;

    let checked = Array.from({length: n}, ()=>0);
    
    const DFS = (i) => {
        checked[i] = 1; //방문 노드 체크
        for(let j=0;j<n;j++) {
            if(computers[i][j] === 1 && checked[j] === 0) { //연결된 노드가 아직 방문된게 아니라면 재귀
                DFS(j);
            }
        }
    }
    
    for(let i=0;i<n;i++) {
        if(checked[i] === 0) { //만약 방문하지 않은 노드가 있다면 방문
            answer += 1; //네트워크 한 개 추가
            DFS(i);
        }
    }
    
    return answer;

}