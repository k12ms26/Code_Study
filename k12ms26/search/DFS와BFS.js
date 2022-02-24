//BOJ 1260 DFS와 BFS
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
    const [N, M, V] = input[0].split(' ').map(Number);
    let graph = Array.from({length: N+1}, ()=>[]);
    let visited_BFS = new Array(N+1).fill(false);
    let visited_DFS = new Array(N+1).fill(false);
    let res_BFS = [], res_DFS = [];
    res_DFS.push(V); visited_DFS[V] = true;

    for(let i=1;i<=M;i++) {
        const [s, e] = input[i].split(' ').map(Number);
        graph[s].push(e);
        graph[e].push(s);
    }

    for(let g of graph) {
        g.sort((a, b) => a-b);
    }
    
    const BFS = (cur) => {
        let queue = [cur];
        visited_BFS[cur] = true;
        res_BFS.push(cur);

        Loop: while(queue.length) {
            let now = queue.shift();
            for(let i=0;i<graph[now].length;i++) {
                if(!visited_BFS[graph[now][i]]) {
                    queue.push(graph[now][i]);
                    visited_BFS[graph[now][i]] = true;
                    res_BFS.push(graph[now][i]);
                    if(res_BFS.length === N) break Loop;
                }
            }
        }
    };

    const DFS = (cur) => {
        for(let i=0;i<graph[cur].length;i++) {
            if(!visited_DFS[graph[cur][i]]) {
                visited_DFS[graph[cur][i]] = true;
                res_DFS.push(graph[cur][i]);
                DFS(graph[cur][i]);
            }
        }
    };

    BFS(V);
    DFS(V);

    console.log(res_DFS.join(' '));
    console.log(res_BFS.join(' '));
};