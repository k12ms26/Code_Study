//BOJ 1753 최단경로
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

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        let curIdx = this.heap.length-1;
        let parIdx = Math.floor(curIdx/2);

        while(parIdx !== 0 && this.heap[parIdx][0] > value[0]) {
            const temp = this.heap[parIdx];
            this.heap[parIdx] = value;
            this.heap[curIdx] = temp;

            curIdx = parIdx;
            parIdx = Math.floor(curIdx/2);
        }
    }
}

const solution = () => {
    const [V, E] = input[0].split(' ').map(Number);
    const K = +input[1];
    let graph = Array.from({length: V+1}, ()=>[]);
    let distance = new Array(V+1).fill(Infinity);

    for(let i=0;i<E;i++) {
        const [u, v, w] = input[i+2].split(' ').map(Number);
        graph[u].push([v, w]);
    }

    const dijkstra = (start) => {
        const heap = new MinHeap();
        heap.push([0, start]);
        distance[start] = 0;

        while(heap.heap.length) {
            let [dist, now] = heap.heap.shift();
            if(distance[now] < dist) {
                continue;
            }
            for(let i=0;i<graph[now].length;i++) {
                let cur = graph[now][i];
                let cost = dist + cur[1];
                if(cost < distance[cur[0]]) {
                    distance[cur[0]] = cost;
                    heap.push([cost, cur[0]]);
                }
            }
        }
    }
    
    dijkstra(K);

    for(let i=1;i<=V;i++) {
        if(distance[i] === Infinity) console.log('INF');
        else console.log(distance[i]);
    }
};