//BOJ 12757 전설의 JBNU
//시간 초과
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
    const [N, M, K] = input[0].split(' ').map(Number);
    let data = [], res = [];
    
    const search = (arr) => {
        const [order, Key, Value] = arr.split(' ').map(Number);

        let left = 0, right = data.length-1;
        let mostClose = 0;
        let duplicate = 1;

        while(left <= right) {
            let now = Math.abs(data[mostClose][0] - Key);
            let compare_left = Math.abs(data[left][0] - Key);
            let compare_right = Math.abs(data[right][0] - Key);

            if(now > compare_left && compare_right > compare_left) {
                mostClose = left;
                left++;
            } else if(now > compare_right && compare_left > compare_right) {
                mostClose = right;
                right--;
            } else if(now === compare_left && mostClose !== left) {
                duplicate++;
                left++;
            } else if(now === compare_right && mostClose !== right) {
                duplicate++;
                right--;
            } else left++;
        }

        const [mostCloseKey, mostCloseValue] = data[mostClose];
        const sub = Math.abs(mostCloseKey-Key);
        if(order === 1) {
            data.push([Key, Value]);
        } else if(order === 2) {
            if(sub <= K) {
                data[mostClose] = [mostCloseKey, Value];
            }
        } else if(order === 3) {
            if(sub <= K && duplicate === 1) {
                res.push(mostCloseValue);
            } else if(sub <= K && duplicate > 1) {
                res.push('?');
            } else if(sub > K) {
                res.push(-1);
            }
        }
    };

    for(let i=1;i<=N;i++) data.push(input[i].split(' ').map(Number));
    data.sort((a, b) => a[0]-b[0]);
    for(let i=N+1;i<=N+M;i++) search(input[i]);

    console.log(res.join('\n'));
};