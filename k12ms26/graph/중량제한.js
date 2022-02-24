//BOJ 1939 중량제한
//https://jaekwan.tistory.com/163
//이분 탐색 필요
const input = [];
require("readline")
.createInterface(process.stdin, process.stdout)
.on("line", (line) => {
  input.push(line);
})
.on("close", () => {
  solution();
  process.exit();
});

const solution = () => {
    //shift 함수가 시간을 많이 먹는다
    const [N, M] = input[0].split(' ').map(Number);
    let graph = Array.from({length: N+1}, ()=>[]);
    let max = 0; //최대 개수

    const BFS = (start, end, mid) => {
        let visited = new Array(N+1).fill(false);
        let queue = [];
        queue.push(start);
        while(queue.length) {
        let cur = queue.shift();
        visited[cur] = true;
        if(cur === end) return true;

        for(let i=0;i<graph[cur].length;i++) {
            let [nextNode, nextCost] = graph[cur][i]; //다음 도시와 중량
            if(!visited[nextNode] && mid <= nextCost) { //주어진 mid값: 기준값이 현재 중량보다 작고 방문하지 않았으면 mid값은 조건에 부합하는 최소 중량값
            visited[nextNode] = true;
            queue.push(nextNode);
            } 
        }
        }

        return false;
    };

    for(let i=1;i<=M;i++) {
        const [A, B, C] = input[i].split(' ').map(Number);
        if(C > max) max = C;
        graph[A].push([B, C]);
        graph[B].push([A, C]);
    }

    let [start, end] = input[M+1].split(' ').map(Number);

    //이분탐색: 주어진 중량 제한 무게 중 최대치 중 하나를 고르는 형태
    let left = 1, right = max;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(BFS(start, end, mid)) {
        left = mid+1; //통과가능한 중량이면 중량을 올린다
        } else {
        right = mid-1;
        }
    }

    console.log(right);
};

//기존 풀이: 재귀+이차원 배열로 방문 여부를 체크하고 마지막에 다다르면 visited를 초기화해서 최대값을 일일이 루프를 돌면서 구함
// const solution = () => {
//     const [N, M] = input.shift().split(' ').map(Number); //N: 섬의 개수, M: 연결 개수
//     const graph = Array.from({length: N+1}, ()=>new Array(N+1).fill(0)); //연결 노드 사이의 중량제한
//     let visited = Array.from({length: N+1}, ()=>new Array(N+1).fill(false)); //방문 여부

//     for(let i=0;i<M;i++) {
//         const [A, B, C] = input.shift().split(' ').map(Number);
//         graph[A][B] = C;
//         graph[B][A] = C;
//     }

//     let [s, e] = input.shift().split(' ').map(Number);

//     const DFS = (cur, min) => {
//         if(cur === e) {
//             visited = Array.from({length: N+1}, ()=>new Array(N+1).fill(false));
//             res.push(min);
//         } else {
//             for(let i=1;i<=M;i++) {
//                 if(visited[cur][i] === false && visited[i][cur] === false && i !== cur && graph[cur][i] !== 0) {
//                     let minimum = min;
//                     if(graph[cur][i] < min) minimum = graph[cur][i];
//                     visited[cur][i] = true;
//                     visited[i][cur] = true;
//                     DFS(i, minimum);
//                 }
//             }
//         }
//     };

//     let res = [];
//     for(let i=1;i<=M;i++) {
//         if(s !== i && graph[s][i] !== 0) {
//             DFS(i, graph[s][i]);
//             visited[s][i] = true;
//             visited[i][s] = true;
//         }
//     }

//     return Math.max(...res);
// };