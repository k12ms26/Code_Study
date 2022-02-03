//programmers: 프렌즈4블록
//미완성
function solution(m, n, b) {
    //BFS?
    let queue = [], board = [];
    for(let i=0;i<m;i++) {
        board.push(b[i].split(''));
    }
    let dx = [1, -1, 0, 0], dy = [0, 0, -1, 1];
    let visited = Array.from({length: m}, ()=>Array.from({length: n}, ()=>false));
    
    queue.push([0, 0]);
    let answer = 0, now = 0;
    while(queue.length) {
        let [x, y] = queue.shift();
        for(let i=0;i<4;i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
                if(board[nx][ny] === board[x][y]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                    now += 1;
                } else {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    
    return now;
    
}