//programmers: 가장 먼 노드
//너무 어렵게 생각하지 말기;;
function solution(n, edge) {
    let visited = Array.from({length: n+1}, ()=>0);
    let distance = Array.from({length: n+1}, ()=>0);

    let queue = [1];
    distance[0] = distance[1] = 0;
    visited[1] = 1;
    
    //bfs
    while (queue.length) {
        let now = queue.shift();
        for(let i=0;i<edge.length;i++) {
            //양방향
            if(edge[i][0] === now && visited[edge[i][1]] === 0) {
                queue.push(edge[i][1]);
                visited[edge[i][1]] = true;
                distance[edge[i][1]] = distance[now] + 1;
            } else if(edge[i][1] === now && visited[edge[i][0]] === 0) {
                queue.push(edge[i][0]);
                visited[edge[i][0]] = true;
                distance[edge[i][0]] = distance[now] + 1;
            }
        }
    }
    return distance.filter((e) => e === Math.max(...distance)).length;
}