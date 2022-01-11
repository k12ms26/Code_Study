//BOJ: 타일 채우기 (다시..)
//https://amunre21.github.io/boj/5-2133/ (여긴 아예 점화식을 만들었네)
// function three_tile(n){
//     if(n%2==1)return 0;
//     let arr = new Array(n*1+1).fill(0);
//     arr[2] = 3;
//     if(n==2)return arr[2];
//     for(let i=3;i<=n;i++){
//       if(i%2==0){
//         arr[i] = arr[i-2]*3 + 2;
//         k=i-2;      
//         while(k>=2){        
//           arr[i] = arr[i]+ arr[k-2]*2
//           k -= 2;
//         }
//       } 
//     }
//     return arr[n]
//   }
  
const solution = ([N]) => {
    let tiles = Array.from({length: N}, ()=>[0,0,0]);
    if(N % 2 !== 1) { //홀수는 어떻게든 못채운다
        const fill = (x, y, now) => {
            if(x < N && y < 3) {
                //2 * 1 가능한지
                if(x+1 < N && y < 3 && now.findIndex((e) => e[0] === x+1 && e[1] === y) !== -1) {
                    tiles[x][y] += 1;
                    tiles[x+1][y] += 1;
                    fill(x+1, y, [...now, tiles[x+1][y]]);
                }
                //1 * 2 가능한지
                if(x < N && y+1 < 3 && now.findIndex((e) => e[0] === x && e[1] === y+1) !== -1) {
                    tiles[x][y] += 1;
                    tiles[x][y+1] += 1;
                    fill(x, y+1, [...now, tiles[x][y+1]]);
                }
            }
        }
            
        tiles[0][0] = 1;
        fill(0, 0, [[0, 0], [0, 1]]);
        fill(0, 0, [[0, 0], [1, 0]]);
    }
    
    console.log(tiles[0][0]);
}

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    solution(input);
    process.exit();
  });