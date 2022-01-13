//programmers: 순위
//플로이드 와샬
//https://velog.io/@bepyan/JS-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%9C%EC%9C%84
function solution(n, results) {
    let rank = Array.from({length: n+1}, ()=>Array.from({length: n+1}, ()=>false)); //인접 행렬

    results.forEach(([a, b]) => rank[a][b] = true); //들어온 데이터 먼저 채워넣고
    for (let i=1;i<=n;i++)
        for (let j=1;j<=n;j++)
            for (let k=1;k<=n;k++)
                if (rank[j][i] && rank[i][k]) rank[j][k] = true; //연결되는 정점들 모두 넣기 (이긴 경우만)

    let answer = 0;
    for (let i=1;i<=n;i++){
        let cnt = 0;
        for(let j=1;j<=n;j++)
            if(rank[i][j] || rank[j][i]) cnt += 1; //지거나 이긴 거 모두 합산
        if(cnt === n-1) answer += 1;
    }
    return answer;
}