//programmers: 섬 연결하기
//union find?
//https://haerang94.tistory.com/327
function solution(n, costs) {
    var answer = 0;
    //비용이 작도록 정렬
    costs.sort((a,b)=>a[2]-b[2]);
    let checked = Array.from({length: n}, ()=>0);
    let island = Array.from({lengt: costs.length}, ()=>0);
    checked[costs[0][0]] = 1; checked[costs[0][1]] = 1;
    answer += costs[0][2];
    
    let cnt=1;
    while(cnt<n-1){
        for(let i=0;i<costs.length;i+=1){
            const [start, end, cost]=costs[i];
            if(island[i]) continue;
            if(!checked[start] && checked[end] || checked[start] && !checked[end]){
                cnt+=1;
                checked[start] = 1; checked[end] = 1;
                island[i] = 1;
                answer+=cost;
                break; // break하는 이유: 최대한 가중치가 적은 곳(costs의 앞 부분이 먼저 연결되도록 하기위해서)
                
            }
        }
    }
    return answer;
}