//programmers: 카펫
function solution(brown, yellow) {
    let row = 0, col = 0;
    
    let isDone = false;
    for(let i=1;i<=yellow;i++) {
        for(let j=1;j<=i;j++) {
            if(i * j === yellow && i >= j && (brown - 4) % (i + j) === 0) { //4,6,7,9 에러 -> [5, 4] TC 돌려보기
                row += i;
                col += j;
                isDone = true;
                break;
            }
        }
        if(isDone) break;
    }
    
    return [row+2, col+2];
}
