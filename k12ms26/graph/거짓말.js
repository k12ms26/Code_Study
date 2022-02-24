//BOJ 1043 거짓말
//인접 리스트?
const input = [];
require("readline")
.createInterface(process.stdin, process.stdout)
.on("line", (line) => {
    input.push(line);
})
.on("close", () => {
    console.log(solution());
    process.exit();
});

const solution = () => {
    const [N, M] = input.shift().split(' ').map(Number);
    let [truth_num, ...truth] = input.shift().split(' ').map(Number);
    if(truth_num === 0) return M;

    const party = Array.from({length: M}, ()=>new Array());
    let visited = Array.from({length: M}, ()=>false); //파티를 수색했는지 안했는지
    for(let i=0;i<M;i++) {
        party[i] = input[i].split(' ').map(Number).slice(1);
    }

    let queue = truth;
    while(queue.length) {
        let now = queue.shift();
        for(let i=0;i<M;i++) {
            let nowIdx = party[i].indexOf(now);
            if(nowIdx > -1 && visited[i] === false) {
                //현재 파티의 모든 사람들을 넣는다 -> 현재 인덱스 빼고
                let tmp = [...party[i].slice(0, nowIdx), ...party[i].slice(nowIdx+1)];
                queue = [...queue, ...tmp].map(Number);
                visited[i] = true;
            }
        }
    }
    return visited.filter((e) => e === false).length; //진실을 모르는 사람들
};