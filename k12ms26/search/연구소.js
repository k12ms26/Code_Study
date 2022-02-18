//BOJ 14502 연구소
//https://hoon-in-seoul.tistory.com/68
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(solution(input));
    process.exit();
});

//JS문법을 너무 잘활용하셔서 거의 그대로 가져와봄
const solution = (inputs) => {
    const [nm, ...rest] = inputs;
    const [N, M] = nm.split(" ").map(Number);
    const board = rest.map((e) => e.split(" ").join(""));
    
    const changeCol = (board, row, col, val) => {
        board[row] = board[row].slice(0, col) + val + board[row].slice(col+1); //받은 val을 column 수 사이에 추가
    };
    const wallAdd = (board, row, col) => changeCol(board, row, col, "1");
    const virusAdd = (board, row, col) => changeCol(board, row, col, "2");
  
    const getSafeNum = (board) => { //안전 영역 크기 구하기
        let cnt = 0;
        for (let row = N; row--; ) {
            for (let col = M; col--; ) {
                if (board[row][col] === "0") cnt += 1;
            }
        }
        
        return cnt;
    };

    const virus = (curBoard) => {
        const ways = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        const isVal = (row, col) => row >= 0 && col >= 0 && row < N && col < M;
        
        const search = (row, col) => {
            virusAdd(curBoard, row, col);
            for (const [r, c] of ways) {
                const [nrow, ncol] = [row + r, col + c];
                //0이면 0인대로 모두 virusAdd하도록
                if (isVal(nrow, ncol) && curBoard[nrow][ncol] === "0") search(nrow, ncol); //탐색 방식은 bfs, 함수 호출 방식은 dfs
            }
        };
        

        for (let row = N; row--; ) {
            for (let col = M; col--; ) {
                if (board[row][col] === "2") search(row, col); //2가 존재하지 않으면 할필요 X
            }
        }
        
        return curBoard;
    };
  
    let max = 0;
    //6중 for문 ㄷㄷ: 3개의 벽을 놓아야 하므로 각각 그 용도
    //JS는 array의 인덱스를 나가도 undefined로 처리되고 별다른 조치를 취하지 않는것을 사용해서 가독성을 높이기도 (이게 좋은 코드인지는 모르겠음)
    for (let row1 = N; row1--; ) {
        for (let col1 = M; col1--; ) {
            if (board[row1][col1] !== "0") continue;
            
            for (let row2 = row1 + 1; row2--; ) {
                for (let col2 = M; col2--; ) {
                    if (board[row2][col2] !== "0" || (row2 === row1 && col2 === col1)) continue;
                    
                    for (let row3 = row2 + 1; row3--; ) {
                        for (let col3 = M; col3--; ) {
                            if (board[row3][col3] !== "0" || (row3 === row2 && col3 === col2) || (row3 === row1 && col3 === col1)) continue;
                            //같은 위치가 아니고 0인 서로 다른 세 row, col일때만 wall 추가
                            let curBoard = [...board];
                            wallAdd(curBoard, row1, col1);
                            wallAdd(curBoard, row2, col2);
                            wallAdd(curBoard, row3, col3);
                            curBoard = virus(curBoard); //2로 감염시키기
                            const curNum = getSafeNum(curBoard); //그 중 살아남은 영역 넣기
                            if (curNum > max) max = curNum; //가장 큰 거 max에 넣기
                        }
                    }
                }
            }
        }
    }
  
    return max;
  };
  