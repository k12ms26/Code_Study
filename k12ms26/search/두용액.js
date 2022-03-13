//BOJ 2470 두 용액
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
    const N = +input[0];
    let arr = input[1].split(' ').map(Number).sort((a, b) => a-b);

    let left = 0, right = arr.length-1;
    let now = [arr[left], arr[right]];
    while(left <= right) {
        console.log(arr[left], arr[right])
        if(Math.abs(now[0]+now[1]) > Math.abs(arr[left]+arr[right]) && left !== right) {
            now = [arr[left], arr[right]];
        }
        let add = arr[left]+arr[right];
        if(add > 0) right--;
        else left++;
    }

    console.log(`${now[0]} ${now[1]}`)
};