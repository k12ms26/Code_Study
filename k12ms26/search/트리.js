//BOJ 4803 트리
//https://welog.tistory.com/235
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
    let i = 0, c = 1;

    while(true) {
        let [n, m] = input[i++].split(' ').map(Number);
        if(n === 0 && m === 0) break;
        let graph = Array.from({length: n+1}, ()=>Array.from({length: n+1}, ()=>0));
        for(let j=i;j<i+m;j++) {
            let [x, y] = input[j].split(' ').map(Number);
            graph[x][y] = 1;
            graph[y][x] = 1;
        }

        let cnt = 0;
        let visited = new Array(n+1).fill(false);
        const BFS = (start) => {
            visited[start] = true;
            let queue = [start];
    
            while(queue.length) {
                let now = queue.shift();
    
                for(let j=1;j<=n;j++) {
                    if(graph[now][j] === 1) {
                        if(!visited[j]) {
                            visited[j] = true;
                            queue.push(j);
                            graph[now][j] = 0;
                            graph[j][now] = 0;
                        } else return false; //사이클 발견
                    }
                }
            }
    
            return true;
        };

        for(let j=1;j<=n;j++) {
            if(!visited[j]) {
                if(BFS(j)) cnt++;
            }
        }

        if(cnt === 0) console.log(`Case ${c}: No trees.`);
        else if(cnt === 1) console.log(`Case ${c}: There is one tree.`);
        else console.log(`Case ${c}: A forest of ${cnt} trees.`);

        c++; i+=m;
    }
};

// const solution = () => {
//     let i = 0;
//     let [n, m] = input[i].split(' ').map(Number);
//     let res = [];

//     const BFS = (a, n) => {
//         let graph = new Array(n+1).fill([]);
//         let visited = new Array(n+1).fill(false);
//         visited[0] = true;

//         for(let i=0;i<a.length;i++) {
//             graph[a[i][0]] = [...graph[a[i][0]], a[i][1]];
//         }

//         let queue = [1];
//         visited[1] = true;
//         let cnt = 0; //트리의 개수

//         while(a.length) { //트리 여러가지 찾기 위함
//             if(queue.length === 0) {
//                 queue.push(a[0][0]);
//                 visited[a[0][0]] = true;
//             }

//             while(queue.length) {
//                 let now = queue.shift();
//                 for(let n of graph[now]) {
//                     if(visited[n] === true && now !== n) return 0; //사이클 발견
//                     visited[n] = true;
//                     if(now !== n) queue.push(n);

//                     let findIdx = a.findIndex((e) => e[0] === now && e[1] === n);
//                     a.splice(findIdx, 1);

//                     let findIdx_rev = a.findIndex((e) => e[0] === n && e[1] === now);
//                     a.splice(findIdx_rev, 1);
//                 }
//             }

//             cnt++;
//         }

//         return cnt+visited.filter((e) => e === false).length;
//     };

//     let c = 1;
//     while(n !== 0 || m !== 0) {
//         let arr = [];
//         for(let j=i+1;j<=i+m;j++) {
//             arr.push(input[j].split(' ').map(Number));
//         }

//         let result;
//         if(m === n-1) result = 1;
//         else if(m === 0) result = n;
//         else result = BFS(arr, n);

//         if(result === 0) console.log(`Case ${c}: No trees.`);
//         else if(result === 1) console.log(`Case ${c}: There is one tree.`);
//         else console.log(`Case ${c}: A forest of ${result} trees.`);

//         i += m+1; c++;
//         [n, m] = input[i].split(' ').map(Number);
//     }
// };